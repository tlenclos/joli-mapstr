import haversine from "haversine";

// This is our office
const OFFICE_GEOLOCATION = { latitude: 48.8599078, longitude: 2.3791582 };

// Haversine
type Position = {
  latitude: number;
  longitude: number;
};

export function distanceFromOffice({ latitude, longitude }: Position): number {
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

export function timeByFoot(distanceInMeters: number): string {
  return secondsToMinutes(Number(((distanceInMeters / 80) * 60).toFixed(0)));
}
