import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { PlacesDetailsResponse } from "~/lib/googleMapSdk";
import placesData from "~/data/places.json";
import googleMapClient from "~/lib/googleMapClient";

const today = new Date().getDate();

export async function loader(args: LoaderArgs) {
  let places: PlacesDetailsResponse[] = [];
  let error = false;

  try {
    places = (
      await Promise.all(
        placesData.map((place) =>
          googleMapClient.maps.placeDetails({
            place_id: place.id,
            // @ts-ignore
            key: process.env.GOOGLE_API_KEY,
          })
        )
      )
    ).map((response) => response.data);
  } catch (e) {
    console.error(e);
    error = true;
  }

  return json({ error, places });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Joli Mapstr</h1>
      <ul>
        {data.places.map((place) => (
          <li key={place.result.place_id}>
            {place.result.name} - Ouvert:{" "}
            {place.result.opening_hours?.open_now ? "Oui" : "Non"}
            <br />
            <ul>
              {place.result.opening_hours?.weekday_text?.map((day, i) => (
                <li style={today - 1 === i ? { fontWeight: "bold" } : {}}>
                  {day}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
