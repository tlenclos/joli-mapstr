// This script is just to format dataset better for the remix app and add metadata if needed
import haversine from "haversine";
import fs from "fs/promises";
import placesData from "../../data/places.json" assert { type: "json" };
import { createRequire } from "node:module";
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
    indexedPlaces[place.url] = {
      ...place,
      distance,
      timeByFoot: timeByFootValue,
    };
  })
);

placesData.forEach((category, index) => {
  placesData[index].places = category.places
    .map((place) => indexedPlaces[place])
    .filter((a) => a);
});

await fs.writeFile("../data/crawled.json", JSON.stringify(placesData, null, 2));
