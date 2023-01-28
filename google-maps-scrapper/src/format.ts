// This script is used for
// - Downloading images that can't be served directly from google
// - Format dataset
// - Add more information like distance from workplace
import haversine from "haversine";
import fs from "fs/promises";
import fsSync from "fs";
import https from "https";
// @ts-expect-error
import placesData from "../../data/places.json" assert { type: "json" };
import { createRequire } from "node:module";
// @ts-ignore
const require = createRequire(import.meta.url);

const DATASET_DIR = "./storage/datasets/default";

// This is our office
const OFFICE_GEOLOCATION = { latitude: 48.8599078, longitude: 2.3791582 };

// Haversine
type Position = {
  latitude: number;
  longitude: number;
};

function distanceFromOffice({ latitude, longitude }: Position): number {
  return haversine(
    OFFICE_GEOLOCATION,
    {
      latitude,
      longitude,
    },
    { unit: "meter" }
  );
}

// Time by foot
function secondsToMinutes(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function timeByFoot(distanceInMeters: number): string {
  return secondsToMinutes(Number(((distanceInMeters / 80) * 60).toFixed(0)));
}

async function downloadFile(url: string, targetFile: string) {
  return await new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        const code = response.statusCode ?? 0;

        if (code >= 400) {
          return reject(new Error(response.statusMessage));
        }

        // handle redirects
        if (code > 300 && code < 400 && !!response.headers.location) {
          return resolve(downloadFile(response.headers.location, targetFile));
        }

        // save the file to disk
        const fileWriter = fsSync
          .createWriteStream(targetFile)
          .on("finish", () => {
            resolve({});
          });

        response.pipe(fileWriter);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

// Format and move files
let indexedPlaces: Record<string, any> = {};
const files = await fs.readdir(DATASET_DIR);
await Promise.all(
  files.map(async (file) => {
    const place = await require(`.${DATASET_DIR}/${file}`);
    const distance =
      place.coords &&
      distanceFromOffice({
        latitude: place.coords.lat,
        longitude: place.coords.lng,
      });
    const timeByFootValue = distance ? timeByFoot(distance) : undefined;
    indexedPlaces[place.url.replace("?hl=fr", "")] = {
      ...place,
      distance,
      timeByFoot: timeByFootValue,
      images: await Promise.all(
        place.images.map(async (image: string, index: number) => {
          const imageName = `${index}-${place.placeId}.jpg`;
          await downloadFile(image, `../public/images/${imageName}`);
          return imageName;
        })
      ),
    };
  })
);

placesData.forEach((category, index) => {
  placesData[index].places = category.places
    .map((place) => indexedPlaces[place])
    .filter((a) => a);
});

await fs.writeFile("../data/crawled.json", JSON.stringify(placesData, null, 2));
