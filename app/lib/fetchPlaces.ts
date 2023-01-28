import placesData from "../../data/crawled.json";
import parseDate from "date-fns/parse";
import { sortBy } from "lodash";

const todayInFrench = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
}).format(new Date());

// Ex "11:30 to 22:00"
function isOpenInRange(range: string): boolean {
  const today = new Date();
  const dateRange = range
    .split(" to ")
    .map((hours) => parseDate(hours, "kk:mm", today));

  if (dateRange.length === 2) {
    return dateRange[0] <= today && today <= dateRange[1];
  }

  return false;
}

function isOpen(openingHours: Place["openingHours"]): boolean {
  return !!openingHours.find((day) => {
    if (day.day === todayInFrench) {
      if (day.hours !== "Fermé") {
        return day.hours.split(", ").some((range) => isOpenInRange(range));
      }
    }

    return false;
  });
}

export interface Place {
  url: string;
  title: string;
  openingHours: OpeningHour[];
  images: string[];
  coords?: Coords;
  addressParsed?: AddressParsed;
  website?: string | null;
  categories?: string[];
  isOpen?: boolean;
  distance?: number;
  timeByFoot?: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export interface Coords {
  lat: number;
  lng: number;
}

export interface AddressParsed {
  neighborhood: string;
  street: string;
  city: string;
  postalCode: string;
  state: any;
  countryCode: string;
}

export type GroupedPlaces = Array<{
  name: string;
  places: Place[];
}>;

export default function fetchPlaces(): GroupedPlaces {
  placesData.forEach((category, index) => {
    placesData[index].places = sortBy(
      category.places.map((place) => ({
        ...place,
        isOpen: isOpen(place.openingHours),
      })),
      (item) => {
        return [!item.isOpen, item.distance];
      }
    );
  });

  return placesData satisfies GroupedPlaces;
}
