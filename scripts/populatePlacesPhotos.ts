import { promises as fs } from "fs";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../.env" });
import placesData from "../app/data/places.json";
import googleMapClient from "../app/lib/googleMapClient";

async function populatePlacesPhotos() {
  try {
    await Promise.all(
      placesData.map(
        async (category, categoryIndex) =>
          await Promise.all(
            category.places.map(async (place, placeIndex) => {
              const googleMapData = await googleMapClient.maps.placeDetails({
                place_id: place.id,
                // @ts-ignore
                key: process.env.GOOGLE_API_KEY,
              });

              const photos = googleMapData.data.result?.photos
                ? await Promise.all(
                    googleMapData.data.result.photos.map(
                      async (photo, index) => {
                        const placePhoto = await googleMapClient.maps
                          .placePhoto({
                            photo_reference: photo.photo_reference,
                            maxwidth: 1000,
                            // @ts-ignore
                            key: process.env.GOOGLE_API_KEY,
                          })
                          .catch((e) => {
                            console.log(e.response);
                            return null;
                          });
                        return placePhoto?.request.res.responseUrl;
                      }
                    )
                  )
                : [];

              // @ts-ignore
              placesData[categoryIndex].places[placeIndex].photos = photos;

              return photos;
            })
          )
      )
    );

    fs.writeFile(
      "./app/data/places.json",
      JSON.stringify(placesData, undefined, 2)
    );
  } catch (e) {
    // console.error(e);
  }
}

populatePlacesPhotos();
