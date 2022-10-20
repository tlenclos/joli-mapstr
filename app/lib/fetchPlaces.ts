import { sortBy } from "lodash";

import client from "~/lib/googleMapClient";
import placesData from "~/data/places.json";
import { Place } from "./googleMapSdk";
import { distanceFromOffice, timeByFoot } from "./distance";

export type ContributedPlace = {
  id: string;
  name: string;
  url?: string;
  tags?: string[];
  distance?: number; // in meters
  timeByFoot?: string;
  googleData?: Place;
  photos?: string[];
  isReportedClosed?: boolean;
  takeaway?: boolean;
  onPremise?: boolean;
};

export type GroupedPlaces = Array<{
  name: string;
  places: ContributedPlace[];
}>;

async function fetchPlacesIds(ids: string[]) {
  return (
    await Promise.all(
      ids.map((id) =>
        client.maps.placeDetails({
          place_id: id,
          // @ts-ignore
          key: process.env.GOOGLE_API_KEY,
          language: "fr",
        })
      )
    )
  ).map((response) => {
    return response.data.result;
  });
}

// TODO Add cache system
// In production https://www.npmjs.com/package/lru-cache
// In dev filesystem
export default async function fetchPlaces(): Promise<GroupedPlaces> {
  let places: GroupedPlaces = [];

  await Promise.all(
    placesData.map(async (category, index) => {
      places[index] = {
        name: category.name,
        places: await fetchPlacesIds(
          category.places.map((placeData) => placeData.id)
        ).then((googlePlaces) => {
          return sortBy<ContributedPlace>(
            category.places.map((place) => {
              const googleData = googlePlaces.find(
                (googlePlace) =>
                  googlePlace && googlePlace.place_id === place.id
              );
              const distance =
                googleData?.geometry?.location &&
                distanceFromOffice({
                  latitude: googleData?.geometry.location.lat,
                  longitude: googleData?.geometry.location.lng,
                });

              return {
                onPremise: false,
                takeaway: false,
                ...place,
                distance,
                timeByFoot: distance ? timeByFoot(distance) : undefined,
                googleData,
              };
            }),
            (item) => {
              return [!item.googleData?.opening_hours?.open_now, item.distance];
            }
          );
        }),
      };
    })
  );

  return places;
}
