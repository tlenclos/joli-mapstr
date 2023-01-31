import placesData from "../../data/crawled.json";
import parseDate from "date-fns/parse";
import { sortBy } from "lodash";

const defaultDateWithTimezone = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Paris' }))

function dateInFrench(date: Date = defaultDateWithTimezone) {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
  }).format(date);
}

// Ex "11:30 to 22:00"
function isOpenInRange(range: string, date: Date = defaultDateWithTimezone): boolean {
  const dateRange = range
    .split(" to ")
    .map((hours) => parseDate(hours, "kk:mm", date));

  if (dateRange.length === 2) {
    return dateRange[0] <= date && date <= dateRange[1];
  }

  return false;
}

function isOpen(openingHours: Place["openingHours"], date?: Date): boolean {
  return !!openingHours.find((day) => {
    if (day.day === dateInFrench(date)) {
      if (day.hours !== "Fermé") {
        return day.hours.split(", ").some((range) => isOpenInRange(range, date));
      }
    }

    return false;
  });
}

export interface Place {
  url: string;
  placeId: string;
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
  state?: any;
  countryCode: string;
}

export type GroupedPlaces = Array<{
  name: string;
  places: Place[];
}>;

export default function fetchPlaces(date?: Date): GroupedPlaces {
  placesData.forEach((category, index) => {
    placesData[index].places = sortBy(
      category.places.map((place) => {
        return {
          ...place,
          isOpen: place.openingHours ? isOpen(place.openingHours, date) : false,
        }
      }),
      (item) => {
        return [!item.isOpen, item.distance];
      }
    );
  });

  return placesData satisfies GroupedPlaces;
}
