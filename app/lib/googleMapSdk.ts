/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * A rectangle in geographical coordinates from points at the southwest and northeast corners.
 */
export interface Bounds {
  /** An object describing a specific location with Latitude and Longitude in decimal degrees. */
  northeast: LatLngLiteral;

  /** An object describing a specific location with Latitude and Longitude in decimal degrees. */
  southwest: LatLngLiteral;
}

/**
 * An array of comma separated {latitude,longitude} strings.
 * @example ["35,-100","40,-110"]
 */
export type LatLngArrayString = string[];

/**
 * An object describing a specific location with Latitude and Longitude in decimal degrees.
 */
export interface LatLngLiteral {
  /** Latitude in decimal degrees */
  lat: number;

  /** Longitude in decimal degrees */
  lng: number;
}

/**
 * An object describing a specific location with Latitude and Longitude in decimal degrees.
 */
export interface LatitudeLongitudeLiteral {
  /** Latitude in decimal degrees */
  latitude: number;

  /** Longitude in decimal degrees */
  longitude: number;
}

export interface AddressComponent {
  /**
   * The full text description or name of the address component as returned by the Geocoder.
   * @example Council of the City of Sydney
   */
  long_name: string;

  /**
   * An abbreviated textual name for the address component, if available. For example, an address component for the state of Alaska may have a long_name of "Alaska" and a short_name of "AK" using the 2-letter postal abbreviation.
   * @example Sydney
   */
  short_name: string;

  /**
   * An array indicating the type of the address component. See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types).
   * @example ["administrative_area_level_2","political"]
   */
  types: string[];
}

/**
* The total fare for the route.

```
{
  "currency" : "USD",
  "value" : 6,
  "text" : "$6.00"
}
```
*/
export interface Fare {
  /**
   * An [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) indicating the currency that the amount is expressed in.
   * @example USD
   */
  currency: string;

  /** The total fare amount, in the currency specified. */
  value: number;

  /**
   * The total fare amount, formatted in the requested language.
   * @example $6.00
   */
  text: string;
}

/**
 * An object describing the location.
 */
export interface Geometry {
  /** An object describing a specific location with Latitude and Longitude in decimal degrees. */
  location: LatLngLiteral;

  /** A rectangle in geographical coordinates from points at the southwest and northeast corners. */
  viewport: Bounds;
}

/**
 * An encoded location reference, derived from latitude and longitude coordinates, that represents an area, 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named).
 */
export interface PlusCode {
  /** The `compound_code` is a 6 character or longer local code with an explicit location (`CWC8+R9, Mountain View, CA, USA`). Some APIs may return an empty string if the `compound_code` is not available. */
  compound_code?: string;

  /** The `global_code` is a 4 character area code and 6 character or longer local code (`849VCWC8+R9`). */
  global_code: string;
}

/**
* - `DRIVING` (default) indicates calculation using the road network.
- `BICYCLING` requests calculation for bicycling via bicycle paths & preferred streets (where available).
- `TRANSIT` requests calculation via public transit routes (where available). 
- `WALKING` requests calculation for walking via pedestrian paths & sidewalks (where available).
*/
export enum TravelMode {
  DRIVING = "DRIVING",
  BICYCLING = "BICYCLING",
  TRANSIT = "TRANSIT",
  WALKING = "WALKING",
}

/**
 * An object containing a numeric value and its formatted text representation.
 */
export interface TextValueObject {
  /** String value. */
  text: string;

  /** Numeric value. */
  value: number;
}

/**
 * An object containing Unix time, a time zone, and its formatted text representation.
 */
export interface TimeZoneTextValueObject {
  /** The time specified as a string in the time zone. */
  text: string;

  /** The time specified as Unix time, or seconds since midnight, January 1, 1970 UTC. */
  value: number;

  /** Contains the time zone. The value is the name of the time zone as defined in the [IANA Time Zone Database](http://www.iana.org/time-zones), e.g. "America/New_York". */
  time_zone: string;
}

/**
* - `OK` indicates the response contains a valid result.
- `NOT_FOUND` indicates that the origin and/or destination of this pairing could not be geocoded.
- `ZERO_RESULTS` indicates no route could be found between the origin and destination.
- `MAX_ROUTE_LENGTH_EXCEEDED` indicates the requested route is too long and cannot be processed.
*/
export enum DistanceMatrixElementStatus {
  OK = "OK",
  NOT_FOUND = "NOT_FOUND",
  ZERO_RESULTS = "ZERO_RESULTS",
  MAX_ROUTE_LENGTH_EXCEEDED = "MAX_ROUTE_LENGTH_EXCEEDED",
}

export interface DistanceMatrixResponse {
  /** An array of addresses as returned by the API from your original request. These are formatted by the geocoder and localized according to the language parameter passed with the request. This content is meant to be read as-is. Do not programatically parse the formatted addresses. */
  origin_addresses: string[];

  /** An array of addresses as returned by the API from your original request. As with `origin_addresses`, these are localized if appropriate. This content is meant to be read as-is. Do not programatically parse the formatted addresses. */
  destination_addresses: string[];

  /** An array of elements, which in turn each contain a `status`, `duration`, and `distance` element. */
  rows: DistanceMatrixRow[];

  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: DistanceMatrixStatus;

  /**
   * A string containing the human-readable text of any errors encountered while the request was being processed.
   * @example You have exceeded your rate-limit for this API.
   */
  error_message?: string;
}

export interface DistanceMatrixRow {
  /**
   * When the Distance Matrix API returns results, it places them within a JSON rows array. Even if no results are returned (such as when the origins and/or destinations don't exist), it still returns an empty array.
   *
   * Rows are ordered according to the values in the origin parameter of the request. Each row corresponds to an origin, and each element within that row corresponds to a pairing of the origin with a destination value.
   * Each row array contains one or more element entries, which in turn contain the information about a single origin-destination pairing.
   */
  elements: DistanceMatrixElement[];
}

export interface DistanceMatrixElement {
  /** If present, contains the total fare (that is, the total ticket costs) on this route. This property is only returned for transit requests and only for transit providers where fare information is available. */
  fare?: Fare;

  /** The total distance of this route, expressed in meters (value) and as text. The textual value uses the unit system specified with the unit parameter of the original request, or the origin's region. */
  distance?: TextValueObject;

  /**
   * The length of time it takes to travel this route, based on current and historical traffic conditions. See the `traffic_model` request parameter for the options you can use to request that the returned value is optimistic, pessimistic, or a best-guess estimate. The duration is expressed in seconds (the value field) and as text. The textual representation is localized according to the query's language parameter. The duration in traffic is returned only if all of the following are true:
   *
   * * The request includes a `departure_time` parameter.
   * * Traffic conditions are available for the requested route.
   * * The mode parameter is set to driving.
   */
  duration_in_traffic?: TextValueObject;

  /** The length of time it takes to travel this route, expressed in seconds (the value field) and as text. The textual representation is localized according to the query's language parameter. */
  duration?: TextValueObject;

  /** A status for the element. */
  status: DistanceMatrixElementStatus;
}

/**
* Status codes returned by service.
- `OK` indicates the response contains a valid result.
- `INVALID_REQUEST` indicates that the provided request was invalid.
- `MAX_ELEMENTS_EXCEEDED` indicates that the product of origins and destinations exceeds the per-query limit.
- `MAX_DIMENSIONS_EXCEEDED` indicates that the number of origins or destinations exceeds the per-query limit.
- `OVER_DAILY_LIMIT` indicates any of the following:
  - The API key is missing or invalid.
  - Billing has not been enabled on your account.
  - A self-imposed usage cap has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).
- `OVER_QUERY_LIMIT` indicates the service has received too many requests from your application within the allowed time period.
- `REQUEST_DENIED` indicates that the service denied use of the Distance Matrix service by your application.
- `UNKNOWN_ERROR` indicates a Distance Matrix request could not be processed due to a server error. The request may succeed if you try again.
*/
export enum DistanceMatrixStatus {
  OK = "OK",
  INVALID_REQUEST = "INVALID_REQUEST",
  MAX_ELEMENTS_EXCEEDED = "MAX_ELEMENTS_EXCEEDED",
  MAX_DIMENSIONS_EXCEEDED = "MAX_DIMENSIONS_EXCEEDED",
  OVER_DAILY_LIMIT = "OVER_DAILY_LIMIT",
  OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
  REQUEST_DENIED = "REQUEST_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export interface DirectionsResponse {
  /**
   * Contains an array with details about the geocoding of origin, destination and waypoints. Elements in the geocoded_waypoints array correspond, by their zero-based position, to the origin, the waypoints in the order they are specified, and the destination.
   *
   * These details will not be present for waypoints specified as textual latitude/longitude values if the service returns no results. This is because such waypoints are only reverse geocoded to obtain their representative address after a route has been found. An empty JSON object will occupy the corresponding places in the geocoded_waypoints array.
   */
  geocoded_waypoints?: DirectionsGeocodedWaypoint[];

  /** Contains an array of routes from the origin to the destination. Routes consist of nested Legs and Steps. */
  routes: DirectionsRoute[];

  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: DirectionsStatus;

  /** Contains an array of available travel modes. This field is returned when a request specifies a travel mode and gets no results. The array contains the available travel modes in the countries of the given set of waypoints. This field is not returned if one or more of the waypoints are 'via waypoints'. */
  available_travel_modes?: TravelMode[];

  /**
   * When the service returns a status code other than `OK`, there may be an additional `error_message` field within the response object. This field contains more detailed information about the reasons behind the given status code. This field is not always returned, and its content is subject to change.
   *
   */
  error_message?: string;
}

/**
* Each element in the steps array defines a single step of the calculated directions. A step is the most atomic unit of a direction's route, containing a single step describing a specific, single instruction on the journey. E.g. "Turn left at W. 4th St." The step not only describes the instruction but also contains distance and duration information relating to how this step relates to the following step. For example, a step denoted as "Merge onto I-80 West" may contain a duration of "37 miles" and "40 minutes," indicating that the next step is 37 miles/40 minutes from this step.

When using the Directions API to search for transit directions, the steps array will include additional transit details in the form of a transit_details array. If the directions include multiple modes of transportation, detailed directions will be provided for walking or driving steps in an inner steps array. For example, a walking step will include directions from the start and end locations: "Walk to Innes Ave & Fitch St". That step will include detailed walking directions for that route in the inner steps array, such as: "Head north-west", "Turn left onto Arelious Walker", and "Turn left onto Innes Ave".
*/
export interface DirectionsStep {
  /** Contains the distance covered by this step until the next step. This field may be undefined if the distance is unknown. */
  distance?: TextValueObject;

  /** Contains the typical time required to perform the step, until the next step. This field may be undefined if the duration is unknown. */
  duration: TextValueObject;

  /** Contains the location of the last point of this step. */
  end_location: LatLngLiteral;

  /** Contains formatted instructions for this step, presented as an HTML text string. This content is meant to be read as-is. Do not programmatically parse this display-only content. */
  html_instructions: string;

  /** Contains the action to take for the current step (turn left, merge, straight, etc.). Values are subject to change, and new values may be introduced without prior notice. */
  maneuver?:
    | "turn-slight-left"
    | "turn-sharp-left"
    | "turn-left"
    | "turn-slight-right"
    | "turn-sharp-right"
    | "keep-right"
    | "keep-left"
    | "uturn-left"
    | "uturn-right"
    | "turn-right"
    | "straight"
    | "ramp-left"
    | "ramp-right"
    | "merge"
    | "fork-left"
    | "fork-right"
    | "ferry"
    | "ferry-train"
    | "roundabout-left"
    | "roundabout-right";

  /** Contains a single points object that holds an [encoded polyline](https://developers..google.com/maps/documentation/utilities/polylinealgorithm) representation of the step. This polyline is an approximate (smoothed) path of the step. */
  polyline: DirectionsPolyline;

  /** Contains the location of the starting point of this step. */
  start_location: LatLngLiteral;

  /** Details pertaining to this step if the travel mode is `TRANSIT`. */
  transit_details?: DirectionsTransitDetails;

  /** Contains the type of travel mode used. */
  travel_mode: TravelMode;

  /** Contains detailed directions for walking or driving steps in transit directions. Substeps are only available when travel_mode is set to "transit". The inner steps array is of the same type as steps. */
  steps?: any;
}

export interface DirectionsLeg {
  /** Contains the estimated time of arrival for this leg. This property is only returned for transit directions. */
  arrival_time?: TimeZoneTextValueObject;

  /** Contains the estimated time of departure for this leg, specified as a Time object. The `departure_time` is only available for transit directions. */
  departure_time?: TimeZoneTextValueObject;

  /** The total distance covered by this leg. */
  distance?: TextValueObject;

  /** The total duration of this leg. */
  duration?: TextValueObject;

  /**
   * Indicates the total duration of this leg. This value is an estimate of the time in traffic based on current and historical traffic conditions. See the `traffic_model` request parameter for the options you can use to request that the returned value is optimistic, pessimistic, or a best-guess estimate. The duration in traffic is returned only if all of the following are true:
   *
   * * The request does not include stopover waypoints. If the request includes waypoints, they must be prefixed with `via:` to avoid stopovers.
   * * The request is specifically for driving directions—the mode parameter is set to `driving`.
   * * The request includes a `departure_time` parameter.
   * * Traffic conditions are available for the requested route.
   */
  duration_in_traffic?: TextValueObject;

  /** Contains the human-readable address (typically a street address) from reverse geocoding the `end_location` of this leg. This content is meant to be read as-is. Do not programmatically parse the formatted address. */
  end_address: string;

  /** The latitude/longitude coordinates of the given destination of this leg. Because the Directions API calculates directions between locations by using the nearest transportation option (usually a road) at the start and end points, `end_location` may be different than the provided destination of this leg if, for example, a road is not near the destination. */
  end_location: LatLngLiteral;

  /** Contains the human-readable address (typically a street address) resulting from reverse geocoding the `start_location` of this leg. This content is meant to be read as-is. Do not programmatically parse the formatted address. */
  start_address: string;

  /** The latitude/longitude coordinates of the origin of this leg. Because the Directions API calculates directions between locations by using the nearest transportation option (usually a road) at the start and end points, `start_location` may be different than the provided origin of this leg if, for example, a road is not near the origin. */
  start_location: LatLngLiteral;

  /** An array of steps denoting information about each separate step of the leg of the journey. */
  steps: DirectionsStep[];

  /** Information about traffic speed along the leg. */
  traffic_speed_entry: DirectionsTrafficSpeedEntry[];

  /** The locations of via waypoints along this leg. */
  via_waypoint: DirectionsViaWaypoint[];
}

/**
 * Routes consist of nested `legs` and `steps`.
 */
export interface DirectionsRoute {
  /** An array which contains information about a leg of the route, between two locations within the given route. A separate leg will be present for each waypoint or destination specified. (A route with no waypoints will contain exactly one leg within the legs array.) Each leg consists of a series of steps. */
  legs: DirectionsLeg[];

  /** Contains the viewport bounding box of the `overview_polyline`. */
  bounds: Bounds;

  /** Contains an array of warnings to be displayed when showing these directions. You must handle and display these warnings yourself. */
  copyrights: string;

  /** Contains a short textual description for the route, suitable for naming and disambiguating the route from alternatives. */
  summary: string;

  /** An array indicating the order of any waypoints in the calculated route. This waypoints may be reordered if the request was passed optimize:true within its waypoints parameter. */
  waypoint_order: number[];

  /** Contains an array of warnings to be displayed when showing these directions. You must handle and display these warnings yourself. */
  warnings: string[];

  /** Contains an object that holds an encoded polyline representation of the route. This polyline is an approximate (smoothed) path of the resulting directions. */
  overview_polyline: DirectionsPolyline;

  /** If present, contains the total fare (that is, the total ticket costs) on this route. This property is only returned for transit requests and only for routes where fare information is available for all transit legs. */
  fare?: Fare;
}

/**
* The status field within the Directions response object contains the status of the request, and may contain debugging information to help you track down why the Directions service failed. The status field may contain the following values:

- `OK` indicates the response contains a valid result.
- `NOT_FOUND` indicates at least one of the locations specified in the request's origin, destination, or waypoints could not be geocoded.
- `ZERO_RESULTS` indicates no route could be found between the origin and destination.
- `MAX_WAYPOINTS_EXCEEDED` indicates that too many waypoints were provided in the request. For applications using the Directions API as a web service, or the directions service in the Maps JavaScript API, the maximum allowed number of waypoints is 25, plus the origin and destination.
- `MAX_ROUTE_LENGTH_EXCEEDED` indicates the requested route is too long and cannot be processed. This error occurs when more complex directions are returned. Try reducing the number of waypoints, turns, or instructions.
- `INVALID_REQUEST` indicates that the provided request was invalid. Common causes of this status include an invalid parameter or parameter value.
- `OVER_DAILY_LIMIT` indicates any of the following:
    - The API key is missing or invalid.
    - Billing has not been enabled on your account.
    - A self-imposed usage cap has been exceeded.
    - The provided method of payment is no longer valid (for example, a credit card has expired).
    See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) to learn how to fix this.
- `OVER_QUERY_LIMIT` indicates the service has received too many requests from your application within the allowed time period.
- `REQUEST_DENIED` indicates that the service denied use of the directions service by your application.
- `UNKNOWN_ERROR` indicates a directions request could not be processed due to a server error. The request may succeed if you try again.
*/
export enum DirectionsStatus {
  OK = "OK",
  NOT_FOUND = "NOT_FOUND",
  ZERO_RESULTS = "ZERO_RESULTS",
  MAX_WAYPOINTS_EXCEEDED = "MAX_WAYPOINTS_EXCEEDED",
  MAX_ROUTE_LENGTH_EXCEEDED = "MAX_ROUTE_LENGTH_EXCEEDED",
  INVALID_REQUEST = "INVALID_REQUEST",
  OVER_DAILY_LIMIT = "OVER_DAILY_LIMIT",
  OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
  REQUEST_DENIED = "REQUEST_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export interface DirectionsGeocodedWaypoint {
  /** Indicates the status code resulting from the geocoding operation. This field may contain the following values. */
  geocoder_status?: "OK" | "ZERO_RESULTS";

  /**
   * Indicates that the geocoder did not return an exact match for the original request, though it was able to match part of the requested address. You may wish to examine the original request for misspellings and/or an incomplete address.
   *
   * Partial matches most often occur for street addresses that do not exist within the locality you pass in the request. Partial matches may also be returned when a request matches two or more locations in the same locality. For example, "21 Henr St, Bristol, UK" will return a partial match for both Henry Street and Henrietta Street. Note that if a request includes a misspelled address component, the geocoding service may suggest an alternative address. Suggestions triggered in this way will also be marked as a partial match.
   */
  partial_match?: any;

  /** A unique identifier that can be used with other Google APIs. See the [Place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id). */
  place_id?: string;

  /**
   * Indicates the address type of the geocoding result used for calculating directions.
   *
   * * `administrative_area_level_1` indicates a first-order civil entity below the country level. Within the United States, these administrative levels are states. Not all nations exhibit these administrative levels. In most cases, administrative_area_level_1 short names will closely match ISO 3166-2 subdivisions and other widely circulated lists; however this is not guaranteed as our geocoding results are based on a variety of signals and location data.
   * * `administrative_area_level_2` indicates a second-order civil entity below the country level. Within the United States, these administrative levels are counties. Not all nations exhibit these administrative levels.
   * * `administrative_area_level_3` indicates a third-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.
   * * `administrative_area_level_4` indicates a fourth-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.
   * * `administrative_area_level_5` indicates a fifth-order civil entity below the country level. This type indicates a minor civil division. Not all nations exhibit these administrative levels.
   * * `airport` indicates an airport.
   * * `colloquial_area` indicates a commonly-used alternative name for the entity.
   * * `country` indicates the national political entity, and is typically the highest order type returned by the Geocoder.
   * * `intersection` indicates a major intersection, usually of two major roads.
   * * `locality` indicates an incorporated city or town political entity.
   * * `natural_feature` indicates a prominent natural feature.
   * * `neighborhood` indicates a named neighborhood
   * * `park` indicates a named park.
   * * `plus_code` indicates an encoded location reference, derived from latitude and longitude. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named). See [https://plus.codes](https://plus.codes/) for details.
   * * `point_of_interest` indicates a named point of interest. Typically, these "POI"s are prominent local entities that don't easily fit in another category, such as "Empire State Building" or "Eiffel Tower".
   * * `political` indicates a political entity. Usually, this type indicates a polygon of some civil administration.
   * * `postal_code` indicates a postal code as used to address postal mail within the country.
   * * `premise` indicates a named location, usually a building or collection of buildings with a common name
   * * `route` indicates a named route (such as "US 101").
   * * `street_address` indicates a precise street address.
   * * `sublocality` indicates a first-order civil entity below a locality. For some locations may receive one of the additional types: sublocality_level_1 to sublocality_level_5. Each sublocality level is a civil entity. Larger numbers indicate a smaller geographic area.
   * * `subpremise` indicates a first-order entity below a named location, usually a singular building within a collection of buildings with a common name
   * * `tourist_attraction` indicates a tourist attraction.
   * * `train_station` indicates a train station.
   * * `transit_station` indicates a transit station.
   * An empty list of types indicates there are no known types for the particular address component, for example, Lieu-dit in France.
   */
  types?: (
    | "administrative_area_level_1"
    | "administrative_area_level_2"
    | "administrative_area_level_3"
    | "administrative_area_level_4"
    | "administrative_area_level_5"
    | "amusement_park"
    | "airport"
    | "colloquial_area"
    | "country"
    | "establishment"
    | "intersection"
    | "locality"
    | "natural_feature"
    | "neighborhood"
    | "park"
    | "plus_code"
    | "point_of_interest"
    | "political"
    | "postal_code"
    | "premise"
    | "route"
    | "street_address"
    | "sublocality"
    | "sublocality_level_1"
    | "subpremise"
    | "tourist_attraction"
    | "train_station"
    | "transit_station"
  )[];
}

/**
* [Polyline encoding](https://developers.google.com/maps/documentation/utilities/polylinealgorithm) is a lossy compression algorithm that allows you to store a series of coordinates as a single string. Point coordinates are encoded using signed values. If you only have a few static points, you may also wish to use the interactive polyline encoding utility.

The encoding process converts a binary value into a series of character codes for ASCII characters using the familiar base64 encoding scheme: to ensure proper display of these characters, encoded values are summed with 63 (the ASCII character '?') before converting them into ASCII. The algorithm also checks for additional character codes for a given point by checking the least significant bit of each byte group; if this bit is set to 1, the point is not yet fully formed and additional data must follow.

Additionally, to conserve space, points only include the offset from the previous point (except of course for the first point). All points are encoded in Base64 as signed integers, as latitudes and longitudes are signed values. The encoding format within a polyline needs to represent two coordinates representing latitude and longitude to a reasonable precision. Given a maximum longitude of +/- 180 degrees to a precision of 5 decimal places (180.00000 to -180.00000), this results in the need for a 32 bit signed binary integer value.
*/
export interface DirectionsPolyline {
  /**
   * A single string representation of the polyline.
   * @example chnwEbderQ?XR@D?@?
   */
  points: string;
}

export interface DirectionsTrafficSpeedEntry {
  /** The current traffic/speed conditions on this portion of a path. */
  speed_category: string;

  /** The offset along the path (in meters) up to which this speed category is valid. */
  offset_meters: number;
}

export interface DirectionsTransitAgency {
  /** The name of this transit agency. */
  name?: string;

  /** The transit agency's phone number. */
  phone?: string;

  /** The transit agency's URL. */
  url?: string;
}

/**
 * Additional information that is not relevant for other modes of transportation.
 */
export interface DirectionsTransitDetails {
  /** The arrival transit stop. */
  arrival_stop?: DirectionsTransitStop;

  /** An object containing Unix time, a time zone, and its formatted text representation. */
  arrival_time?: TimeZoneTextValueObject;

  /** The departure transit stop. */
  departure_stop?: DirectionsTransitStop;

  /** An object containing Unix time, a time zone, and its formatted text representation. */
  departure_time?: TimeZoneTextValueObject;

  /** Specifies the direction in which to travel on this line, as it is marked on the vehicle or at the departure stop. This will often be the terminus station. */
  headsign?: string;

  /** Specifies the expected number of seconds between departures from the same stop at this time. For example, with a `headway` value of 600, you would expect a ten minute wait if you should miss your bus. */
  headway?: number;

  /** Contains information about the transit line used in this step. */
  line?: DirectionsTransitLine;

  /** The number of stops from the departure to the arrival stop. This includes the arrival stop, but not the departure stop. For example, if your directions involve leaving from Stop A, passing through stops B and C, and arriving at stop D, `num_stops` will return 3. */
  num_stops?: number;

  /**
   * The text that appears in schedules and sign boards to identify a transit trip to passengers. The text should uniquely identify a trip within a service day. For example, "538" is the `trip_short_name` of the Amtrak train that leaves San Jose, CA at 15:10 on weekdays to Sacramento, CA.
   * @example 538
   */
  trip_short_name?: string;
}

export interface DirectionsTransitLine {
  /** The transit agency (or agencies) that operates this transit line. */
  agencies: DirectionsTransitAgency[];

  /**
   * The color commonly used in signage for this line.
   * @example #ce8e00
   */
  color?: string;

  /** The full name of this transit line, e.g. "8 Avenue Local". */
  name: string;

  /** The short name of this transit line. This will normally be a line number, such as "M7" or "355". */
  short_name?: string;

  /**
   * The color commonly used in signage for this line.
   * @example #121212
   */
  text_color?: string;

  /** Contains the URL for this transit line as provided by the transit agency. */
  url?: string;

  /** Contains the URL for the icon associated with this line. */
  icon?: string;

  /** The type of vehicle that operates on this transit line. */
  vehicle?: DirectionsTransitVehicle;
}

export interface DirectionsTransitStop {
  /** The location of the stop. */
  location: LatLngLiteral;

  /** The name of the transit stop. */
  name: string;
}

export interface DirectionsTransitVehicle {
  /** Contains the URL for an icon associated with this vehicle type. */
  icon?: string;

  /** Contains the URL for the icon associated with this vehicle type, based on the local transport signage. */
  local_icon?: string;

  /**
   * The name of this vehicle, capitalized.
   * @example Train
   */
  name: string;

  /**
   * The type of vehicle used.
   *
   * * `BUS` -	Bus.
   * * `CABLE_CAR` -	A vehicle that operates on a cable, usually on the ground. Aerial cable cars may be of the type GONDOLA_LIFT.
   * * `COMMUTER_TRAIN` -	Commuter rail.
   * * `FERRY` -	Ferry.
   * * `FUNICULAR` -	A vehicle that is pulled up a steep incline by a cable. A Funicular typically consists of two cars, with each car acting as a counterweight for the other.
   * * `GONDOLA_LIFT` -	An aerial cable car.
   * * `HEAVY_RAIL` -	Heavy rail.
   * * `HIGH_SPEED_TRAIN` -	High speed train.
   * * `INTERCITY_BUS` -	Intercity bus.
   * * `LONG_DISTANCE_TRAIN` -	Long distance train.
   * * `METRO_RAIL` -	Light rail transit.
   * * `MONORAIL` -	Monorail.
   * * `OTHER` -	All other vehicles will return this type.
   * * `RAIL` -	Rail.
   * * `SHARE_TAXI` -	Share taxi is a kind of bus with the ability to drop off and pick up passengers anywhere on its route.
   * * `SUBWAY` -	Underground light rail.
   * * `TRAM` -	Above ground light rail.
   * * `TROLLEYBUS` -	Trolleybus.
   */
  type:
    | "BUS"
    | "CABLE_CAR"
    | "COMMUTER_TRAIN"
    | "FERRY"
    | "FUNICULAR"
    | "GONDOLA_LIFT"
    | "HEAVY_RAIL"
    | "HIGH_SPEED_TRAIN"
    | "INTERCITY_BUS"
    | "LONG_DISTANCE_TRAIN"
    | "METRO_RAIL"
    | "MONORAIL"
    | "OTHER"
    | "RAIL"
    | "SHARE_TAXI"
    | "SUBWAY"
    | "TRAM"
    | "TROLLEYBUS";
}

export interface DirectionsViaWaypoint {
  /** The location of the waypoint. */
  location?: LatLngLiteral;

  /** The index of the step containing the waypoint. */
  step_index?: number;

  /** The position of the waypoint along the step's polyline, expressed as a ratio from 0 to 1. */
  step_interpolation?: number;
}

export interface ElevationResult {
  /** The elevation of the location in meters. */
  elevation: number;

  /** The value indicating the maximum distance between data points from which the elevation was interpolated, in meters. This property will be missing if the resolution is not known. Note that elevation data becomes more coarse (larger resolution values) when multiple points are passed. To obtain the most accurate elevation value for a point, it should be queried independently. */
  resolution?: number;

  /** A location element of the position for which elevation data is being computed. Note that for path requests, the set of location elements will contain the sampled points along the path. */
  location: LatLngLiteral;
}

export interface ElevationResponse {
  /**
   * When the service returns a status code other than `OK`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change.
   *
   * @example Invalid request. Invalid 'locations' parameter.
   */
  error_message?: string;

  /**
   * Status codes returned by service.
   * - `OK` indicating the API request was successful.
   * - `DATA_NOT_AVAILABLE` indicating that there's no available data for the input locations.
   * - `INVALID_REQUEST` indicating the API request was malformed.
   * - `OVER_DAILY_LIMIT` indicating any of the following:
   *   - The API key is missing or invalid.
   *   - Billing has not been enabled on your account.
   *   - A self-imposed usage cap has been exceeded.
   *   - The provided method of payment is no longer valid (for example, a credit card has expired).
   * - `OVER_QUERY_LIMIT` indicating the requestor has exceeded quota.
   * - `REQUEST_DENIED` indicating the API did not complete the request.
   * - `UNKNOWN_ERROR` indicating an unknown error.
   *
   */
  status: ElevationStatus;
  results: ElevationResult[];
}

/**
* Status codes returned by service.
- `OK` indicating the API request was successful.
- `DATA_NOT_AVAILABLE` indicating that there's no available data for the input locations. 
- `INVALID_REQUEST` indicating the API request was malformed.
- `OVER_DAILY_LIMIT` indicating any of the following:
  - The API key is missing or invalid.
  - Billing has not been enabled on your account.
  - A self-imposed usage cap has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).
- `OVER_QUERY_LIMIT` indicating the requestor has exceeded quota.
- `REQUEST_DENIED` indicating the API did not complete the request.
- `UNKNOWN_ERROR` indicating an unknown error.
*/
export enum ElevationStatus {
  OK = "OK",
  DATA_NOT_AVAILABLE = "DATA_NOT_AVAILABLE",
  INVALID_REQUEST = "INVALID_REQUEST",
  OVER_DAILY_LIMIT = "OVER_DAILY_LIMIT",
  OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
  REQUEST_DENIED = "REQUEST_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export interface GeocodingResult {
  /** An array containing the separate components applicable to this address. */
  address_components: AddressComponent[];

  /** The human-readable address of this location. */
  formatted_address: string;

  /** An object describing the location. */
  geometry: GeocodingGeometry;

  /** A unique identifier that can be used with other Google APIs. For example, you can use the `place_id` in a Places API request to get details of a local business, such as phone number, opening hours, user reviews, and more. See the [place ID overview](https://developers.google.com/places/place-id). */
  place_id: string;

  /** An encoded location reference, derived from latitude and longitude coordinates, that represents an area, 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named). */
  plus_code?: PlusCode;

  /** The `types[]` array indicates the type of the returned result. This array contains a set of zero or more tags identifying the type of feature returned in the result. For example, a geocode of "Chicago" returns "locality" which indicates that "Chicago" is a city, and also returns "political" which indicates it is a political entity. */
  types: string[];

  /** An array denoting all the localities contained in a postal code. This is only present when the result is a postal code that contains multiple localities. */
  postcode_localities?: string[];

  /**
   * Indicates that the geocoder did not return an exact match for the original request, though it was able to match part of the requested address. You may wish to examine the original request for misspellings and/or an incomplete address.
   *
   * Partial matches most often occur for street addresses that do not exist within the locality you pass in the request. Partial matches may also be returned when a request matches two or more locations in the same locality.
   */
  partial_match?: boolean;
}

export interface GeocodingResponse {
  /**
   * An encoded location reference, derived from latitude and longitude coordinates, that represents an area: 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named). See [Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) and [plus codes](https://plus.codes/).
   *
   */
  plus_code?: PlusCode;
  results: GeocodingResult[];

  /**
   * The `status` field within the Geocoding response object contains the status of the request, and may contain debugging information to help you track down why geocoding is not working. The "status" field may contain the following values:
   *
   * - `OK` indicates that no errors occurred; the address was successfully parsed and at least one geocode was returned.
   * - `ZERO_RESULTS` indicates that the geocode was successful but returned no results. This may occur if the geocoder was passed a non-existent address or a `latlng` in a remote location.
   * - `OVER_DAILY_LIMIT` indicates any of the following:
   *   - The API key is missing or invalid.
   *   - Billing has not been enabled on your account.
   *   - A self-imposed usage cap has been exceeded.
   *   - The provided method of payment is no longer valid (for example, a credit card has expired).
   * - `OVER_QUERY_LIMIT` indicates that you are over your quota.
   * - `REQUEST_DENIED` indicates that your request was denied.
   * - `INVALID_REQUEST` generally indicates that the query (address, components, or latlng) is missing.
   * - `UNKNOWN_ERROR` indicates that the request could not be processed due to a server error. The request may succeed if you try again.
   */
  status: GeocodingStatus;

  /**
   * A short description of the error.
   * @example Invalid request. Missing the `address`, `components`, `latlng` or `place_id` parameter.
   */
  error_message?: string;
}

/**
* The `status` field within the Geocoding response object contains the status of the request, and may contain debugging information to help you track down why geocoding is not working. The "status" field may contain the following values:

- `OK` indicates that no errors occurred; the address was successfully parsed and at least one geocode was returned.
- `ZERO_RESULTS` indicates that the geocode was successful but returned no results. This may occur if the geocoder was passed a non-existent address or a `latlng` in a remote location.
- `OVER_DAILY_LIMIT` indicates any of the following:
  - The API key is missing or invalid.
  - Billing has not been enabled on your account.
  - A self-imposed usage cap has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).
- `OVER_QUERY_LIMIT` indicates that you are over your quota.
- `REQUEST_DENIED` indicates that your request was denied.
- `INVALID_REQUEST` generally indicates that the query (address, components, or latlng) is missing.
- `UNKNOWN_ERROR` indicates that the request could not be processed due to a server error. The request may succeed if you try again.
*/
export enum GeocodingStatus {
  OK = "OK",
  INVALID_REQUEST = "INVALID_REQUEST",
  OVER_DAILY_LIMIT = "OVER_DAILY_LIMIT",
  OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
  REQUEST_DENIED = "REQUEST_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
  ZERO_RESULTS = "ZERO_RESULTS",
}

/**
 * An object describing the location.
 */
export interface GeocodingGeometry {
  /** An object describing a specific location with Latitude and Longitude in decimal degrees. */
  location: LatLngLiteral;

  /**
   * Stores additional data about the specified location. The following values are currently supported:
   *
   * - "ROOFTOP" indicates that the returned result is a precise geocode for which we have location information accurate down to street address precision.
   * - "RANGE_INTERPOLATED" indicates that the returned result reflects an approximation (usually on a road) interpolated between two precise points (such as intersections). Interpolated results are generally returned when rooftop geocodes are unavailable for a street address.
   * - "GEOMETRIC_CENTER" indicates that the returned result is the geometric center of a result such as a polyline (for example, a street) or polygon (region).
   * - "APPROXIMATE" indicates that the returned result is approximate.
   */
  location_type: "ROOFTOP" | "RANGE_INTERPOLATED" | "GEOMETRIC_CENTER" | "APPROXIMATE";

  /** A rectangle in geographical coordinates from points at the southwest and northeast corners. */
  bounds?: Bounds;

  /** A rectangle in geographical coordinates from points at the southwest and northeast corners. */
  viewport: Bounds;
}

/**
 * The request body must be formatted as JSON. The following fields are supported, and all fields are optional.
 */
export interface GeolocationRequest {
  /** The cell tower's Mobile Country Code (MCC). */
  homeMobileCountryCode?: number;

  /** The cell tower's Mobile Network Code. This is the MNC for GSM and WCDMA; CDMA uses the System ID (SID). */
  homeMobileNetworkCode?: number;

  /** The mobile radio type. Supported values are lte, gsm, cdma, and wcdma. While this field is optional, it should be included if a value is available, for more accurate results. */
  radioType?: string;

  /** The carrier name. */
  carrier?: string;

  /** Specifies whether to fall back to IP geolocation if wifi and cell tower signals are not available. Defaults to true. Set considerIp to false to disable fall back. */
  considerIp?: string;

  /** The request body's cellTowers array contains zero or more cell tower objects. */
  cellTowers?: CellTower[];

  /** An array of two or more WiFi access point objects. */
  wifiAccessPoints?: WiFiAccessPoint[];
}

/**
 * A successful geolocation request will return a JSON-formatted response defining a location and radius.
 * @example {"location":{"lat":37.421925,"lng":-122.0841293},"accuracy":30}
 */
export interface GeolocationResponse {
  /** The user’s estimated latitude and longitude, in degrees. */
  location: LatLngLiteral;

  /** The accuracy of the estimated location, in meters. This represents the radius of a circle around the given `location`. If your Geolocation response shows a very high value in the `accuracy` field, the service may be geolocating based on the  request IP, instead of WiFi points or cell towers. This can happen if no cell towers or access points are valid or recognized. To confirm that this is the issue, set `considerIp` to `false` in your request. If the response is a `404`, you've confirmed that your `wifiAccessPoints` and `cellTowers` objects could not be geolocated. */
  accuracy: number;
}

/**
 * Attributes used to describe a cell tower. The following optional fields are not currently used, but may be included if values are available: `age`, `signalStrength`, `timingAdvance`.
 * @example {"cellTowers":[{"cellId":170402199,"locationAreaCode":35632,"mobileCountryCode":310,"mobileNetworkCode":410,"age":0,"signalStrength":-60,"timingAdvance":15}]}
 */
export interface CellTower {
  /** Unique identifier of the cell. On GSM, this is the Cell ID (CID); CDMA networks use the Base Station ID (BID). WCDMA networks use the UTRAN/GERAN Cell Identity (UC-Id), which is a 32-bit value concatenating the Radio Network Controller (RNC) and Cell ID. Specifying only the 16-bit Cell ID value in WCDMA networks may return inaccurate results. */
  cellId: number;

  /** The Location Area Code (LAC) for GSM and WCDMA networks. The Network ID (NID) for CDMA networks. */
  locationAreaCode: number;

  /** The cell tower's Mobile Country Code (MCC). */
  mobileCountryCode: number;

  /** The cell tower's Mobile Network Code. This is the MNC for GSM and WCDMA; CDMA uses the System ID (SID). */
  mobileNetworkCode: number;

  /** The number of milliseconds since this cell was primary. If age is 0, the cellId represents a current measurement. */
  age?: number;

  /** Radio signal strength measured in dBm. */
  signalStrength?: number;

  /** The timing advance value. */
  timingAdvance?: number;
}

/**
 * Attributes used to describe a WiFi access point.
 * @example {"considerIp":"false","wifiAccessPoints":[{"macAddress":"84:d4:7e:09:a5:f1","signalStrength":-43,"signalToNoiseRatio":0},{"macAddress":"44:48:c1:a6:f3:d0","signalStrength":-55,"signalToNoiseRatio":0}]}
 */
export interface WiFiAccessPoint {
  /** The MAC address of the WiFi node. It's typically called a BSS, BSSID or MAC address. Separators must be `:` (colon). */
  macAddress: string;

  /** The current signal strength measured in dBm. */
  signalStrength?: number;

  /** The current signal to noise ratio measured in dB. */
  signalToNoiseRatio?: number;

  /** The number of milliseconds since this access point was detected. */
  age?: number;

  /** The channel over which the client is communication with the access point. */
  channel?: number;
}

export interface NearestRoadsError {
  /** This is the same as the HTTP status of the response. */
  code: number;

  /** A short description of the error. */
  message: string;

  /** An error such as `INVALID_ARGUMENT`. */
  status: string;
}

export interface NearestRoadsErrorResponse {
  error?: NearestRoadsError;
}

export interface NearestRoadsResponse {
  /** An array of snapped points. */
  snappedPoints?: SnappedPoint[];
}

export interface SnappedPoint {
  /** An object describing a specific location with Latitude and Longitude in decimal degrees. */
  location: LatitudeLongitudeLiteral;

  /** An integer that indicates the corresponding value in the original request. Each value in the request should map to a snapped value in the response. However, if you've set interpolate=true, then it's possible that the response will contain more coordinates than the request. Interpolated values will not have an `originalIndex`. These values are indexed from `0`, so a point with an originalIndex of `4` will be the snapped value of the 5th latitude/longitude passed to the path parameter. */
  originalIndex?: number;

  /** A unique identifier for a place. All place IDs returned by the Roads API correspond to road segments. */
  placeId: string;
}

export interface SnapToRoadsResponse {
  /** An array of snapped points. */
  snappedPoints?: SnappedPoint[];

  /** A string containing a user-visible warning. */
  warningMessage?: string;
}

export interface TimeZoneResponse {
  /** The offset for daylight-savings time in seconds. This will be zero if the time zone is not in Daylight Savings Time during the specified `timestamp`. */
  dstOffset?: number;

  /** The offset from UTC (in seconds) for the given location. This does not take into effect daylight savings. */
  rawOffset?: number;

  /** a string containing the ID of the time zone, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR) project](http://cldr.unicode.org/), and currently available in file timezone.xml. When a timezone has several IDs, the canonical one is returned. In xml responses, this is the first alias of each timezone. For example, "Asia/Calcutta" is returned, not "Asia/Kolkata". */
  timeZoneId?: string;

  /** The long form name of the time zone. This field will be localized if the language parameter is set. eg. `Pacific Daylight Time` or `Australian Eastern Daylight Time`. */
  timeZoneName?: string;

  /**
   * The `status` field within the Time Zone response object contains the status of the request. The `status` field may contain the following values:
   *
   * - `OK` indicates that the request was successful.
   * - `INVALID_REQUEST` indicates that the request was malformed.
   * - `OVER_DAILY_LIMIT` indicates any of the following:
   *   - The API key is missing or invalid.
   *   - Billing has not been enabled on your account.
   *   - A self-imposed usage cap has been exceeded.
   *   - The provided method of payment is no longer valid (for example, a credit card has expired).
   * - `OVER_QUERY_LIMIT` indicates the requestor has exceeded quota.
   * - `REQUEST_DENIED` indicates that the API did not complete the request. Confirm that the request was sent over HTTPS instead of HTTP.
   * - `UNKNOWN_ERROR` indicates an unknown error.
   * - `ZERO_RESULTS` indicates that no time zone data could be found for the specified position or time. Confirm that the request is for a location on land, and not over water.
   */
  status: TimeZoneStatus;

  /** Detailed information about the reasons behind the given status code. Included if status other than `Ok`. */
  errorMessage?: string;
}

/**
* The `status` field within the Time Zone response object contains the status of the request. The `status` field may contain the following values:

- `OK` indicates that the request was successful.
- `INVALID_REQUEST` indicates that the request was malformed.
- `OVER_DAILY_LIMIT` indicates any of the following:
  - The API key is missing or invalid.
  - Billing has not been enabled on your account.
  - A self-imposed usage cap has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).

- `OVER_QUERY_LIMIT` indicates the requestor has exceeded quota.
- `REQUEST_DENIED` indicates that the API did not complete the request. Confirm that the request was sent over HTTPS instead of HTTP.
- `UNKNOWN_ERROR` indicates an unknown error.
- `ZERO_RESULTS` indicates that no time zone data could be found for the specified position or time. Confirm that the request is for a location on land, and not over water.
*/
export enum TimeZoneStatus {
  OK = "OK",
  INVALID_REQUEST = "INVALID_REQUEST",
  OVER_DAILY_LIMIT = "OVER_DAILY_LIMIT",
  OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
  REQUEST_DENIED = "REQUEST_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
  ZERO_RESULTS = "ZERO_RESULTS",
}

/**
 * In the case of an error, a standard format error response body will be returned and the HTTP status code will be set to an error status. The response contains an object with a single error object.
 * @example {"error":{"code":400,"message":"API key not valid. Please pass a valid API key.","errors":[{"message":"API key not valid. Please pass a valid API key.","domain":"global","reason":"badRequest"}],"status":"INVALID_ARGUMENT","details":[{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"geolocation.googleapis.com"}}]}}
 */
export interface ErrorResponse {
  /** An error return by the server. */
  error: ErrorObject;
}

export interface ErrorObject {
  /** This is the same as the HTTP status of the response. */
  code: number;

  /** A short description of the error. */
  message: string;

  /** A list of errors which occurred. Each error contains an identifier for the type of error and a short description. */
  errors: ErrorDetail[];

  /** A status code that indicates the error type. */
  status?: string;

  /** Additional details about the error. */
  details?: ErrorDetail[];
}

/**
 * @example {"message":"API key not valid. Please pass a valid API key.","domain":"global","reason":"badRequest"}
 */
export interface ErrorDetail {
  /**
   * The type of error.
   * @example type.googleapis.com/google.rpc.ErrorInfo
   */
  "@type"?: string;

  /** A short description of the error. */
  message?: string;

  /** A reason for the error. */
  reason?: string;

  /** The domain in which the error occurred. */
  domain?: string;

  /** Additional metadata about the error. */
  metadata?: object;

  /** A list of field violations. */
  fieldViolations?: FieldViolation[];
}

export interface FieldViolation {
  /** The name of the invalid field. */
  field: string;

  /** A short description of the error. */
  description: string;
}

/**
 * Attributes describing a place. Not all attributes will be available for all place types.
 */
export interface Place {
  /** An array containing the separate components applicable to this address. */
  address_components?: AddressComponent[];

  /**
   * A representation of the place's address in the [adr microformat](http://microformats.org/wiki/adr).
   * @example <span class="street-address">48 Pirrama Rd</span>, <span class="locality">Pyrmont</span> <span class="region">NSW</span> <span class="postal-code">2009</span>, <span class="country-name">Australia</span>
   */
  adr_address?: string;

  /**
   * Indicates the operational status of the place, if it is a business. If no data exists, `business_status` is not returned.
   *
   */
  business_status?: "OPERATIONAL" | "CLOSED_TEMPORARILY" | "CLOSED_PERMANENTLY";

  /**
   * A string containing the human-readable address of this place.
   *
   * Often this address is equivalent to the postal address. Note that some countries, such as the United Kingdom, do not allow distribution of true postal addresses due to licensing restrictions.
   * The formatted address is logically composed of one or more address components. For example, the address "111 8th Avenue, New York, NY" consists of the following components: "111" (the street number), "8th Avenue" (the route), "New York" (the city) and "NY" (the US state).
   * Do not parse the formatted address programmatically. Instead you should use the individual address components, which the API response includes in addition to the formatted address field.
   * @example 48 Pirrama Rd, Pyrmont NSW 2009, Australia
   */
  formatted_address?: string;

  /**
   * Contains the place's phone number in its [local format](http://en.wikipedia.org/wiki/Local_conventions_for_writing_telephone_numbers).
   * @example (02) 9374 4000
   */
  formatted_phone_number?: string;

  /** Contains the location and viewport for the location. */
  geometry?: Geometry;

  /**
   * Contains the URL of a suggested icon which may be displayed to the user when indicating this result on a map.
   * @example https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png
   */
  icon?: string;

  /** Contains the default HEX color code for the place's category. */
  icon_background_color?: string;

  /** Contains the URL of a recommended icon, minus the `.svg` or `.png` file type extension. */
  icon_mask_base_uri?: string;

  /**
   * Contains the place's phone number in international format. International format includes the country code, and is prefixed with the plus, +, sign. For example, the international_phone_number for Google's Sydney, Australia office is `+61 2 9374 4000`.
   * @example +61 2 9374 4000
   */
  international_phone_number?: string;

  /**
   * Contains the human-readable name for the returned result. For `establishment` results, this is usually the canonicalized business name.
   * @example Google Workplace 6
   */
  name?: string;

  /** Contains hours of operation. */
  opening_hours?: PlaceOpeningHours;

  /** Use `business_status` to get the operational status of businesses. */
  permanently_closed?: boolean;

  /** An array of photo objects, each containing a reference to an image. A request may return up to ten photos. More information about place photos and how you can use the images in your application can be found in the [Place Photos](https://developers.google.com/maps/documentation/places/web-service/photos) documentation. */
  photos?: PlacePhoto[];

  /**
   * A textual identifier that uniquely identifies a place. To retrieve information about the place, pass this identifier in the `place_id` field of a Places API request. For more information about place IDs, see the [place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id).
   * @example ChIJN1t_tDeuEmsRUsoyG83frY4
   */
  place_id?: string;

  /**
   * An encoded location reference, derived from latitude and longitude coordinates, that represents an area: 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named). See [Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) and [plus codes](https://plus.codes/).
   *
   */
  plus_code?: PlusCode;

  /**
   * The price level of the place, on a scale of 0 to 4. The exact amount indicated by a specific value will vary from region to region. Price levels are interpreted as follows:
   * - 0 Free
   * - 1 Inexpensive
   * - 2 Moderate
   * - 3 Expensive
   * - 4 Very Expensive
   *
   */
  price_level?: number;

  /**
   * Contains the place's rating, from 1.0 to 5.0, based on aggregated user reviews.
   * @example 4.1
   */
  rating?: number;
  reference?: string;

  /** A JSON array of up to five reviews. If a language parameter was specified in the request, the service will bias the results to prefer reviews written in that language. */
  reviews?: PlaceReview[];
  scope?: string;

  /**
   * Contains an array of feature types describing the given result. See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2).
   * @example ["point_of_interest","establishment"]
   */
  types?: string[];

  /**
   * Contains the URL of the official Google page for this place. This will be the Google-owned page that contains the best available information about the place. Applications must link to or embed this page on any screen that shows detailed results about the place to the user.
   * @example https://maps.google.com/?cid=10281119596374313554
   */
  url?: string;

  /**
   * The total number of reviews, with or without text, for this place.
   * @example 931
   */
  user_ratings_total?: number;

  /**
   * Contains the number of minutes this place’s current timezone is offset from UTC. For example, for places in Sydney, Australia during daylight saving time this would be 660 (+11 hours from UTC), and for places in California outside of daylight saving time this would be -480 (-8 hours from UTC).
   * @example 600
   */
  utc_offset?: number;

  /**
   * For establishment (`types:["establishment", ...])` results only, the `vicinity` field contains a simplified address for the place, including the street name, street number, and locality, but not the province/state, postal code, or country.
   *
   * For all other results, the `vicinity` field contains the name of the narrowest political (`types:["political", ...]`) feature that is present in the address of the result.
   * This content is meant to be read as-is. Do not programmatically parse the formatted address.
   * @example 48 Pirrama Road, Pyrmont
   */
  vicinity?: string;

  /**
   * The authoritative website for this place, such as a business' homepage.
   * @example http://google.com
   */
  website?: string;
}

export interface PlaceAutocompleteMatchedSubstring {
  /** Length of the matched substring in the prediction result text. */
  length: number;

  /** Start location of the matched substring in the prediction result text. */
  offset: number;
}

export interface PlaceAutocompletePrediction {
  /**
   * Contains the human-readable name for the returned result. For `establishment` results, this is usually the business name. This content is meant to be read as-is. Do not programmatically parse the formatted address.
   * @example Paris, France
   */
  description: string;

  /** A list of substrings that describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired. */
  matched_substrings: PlaceAutocompleteMatchedSubstring[];

  /** A textual identifier that uniquely identifies a place. To retrieve information about the place, pass this identifier in the placeId field of a Places API request. For more information about place IDs, see the [Place IDs](https://developers.google.com/maps/documentation/places/web-service/place-id) overview. */
  place_id?: string;

  /** See place_id. */
  reference?: string;

  /** Provides pre-formatted text that can be shown in your autocomplete results. This content is meant to be read as-is. Do not programmatically parse the formatted address. */
  structured_formatting: PlaceAutocompleteStructuredFormat;

  /** Contains an array of terms identifying each section of the returned description (a section of the description is generally terminated with a comma). Each entry in the array has a `value` field, containing the text of the term, and an `offset` field, defining the start position of this term in the description, measured in Unicode characters. */
  terms: PlaceAutocompleteTerm[];

  /**
   * Contains an array of types that apply to this place. For example: `[ "political", "locality" ]` or `[ "establishment", "geocode", "beauty_salon" ]`. The array can contain multiple values. Learn more about [Place types](https://developers.google.com/maps/documentation/places/web-service/supported_types).
   *
   */
  types?: string[];

  /** The straight-line distance in meters from the origin. This field is only returned for requests made with an `origin`. */
  distance_meters?: number;
}

export interface PlaceAutocompleteStructuredFormat {
  /** Contains the main text of a prediction, usually the name of the place. */
  main_text: string;

  /** Contains an array with `offset` value and `length`. These describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired. */
  main_text_matched_substrings: PlaceAutocompleteMatchedSubstring[];

  /** Contains the secondary text of a prediction, usually the location of the place. */
  secondary_text: string;

  /** Contains an array with `offset` value and `length`. These describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired. */
  secondary_text_matched_substrings?: PlaceAutocompleteMatchedSubstring[];
}

export interface PlaceAutocompleteTerm {
  /** The text of the term. */
  value: string;

  /** Defines the start position of this term in the description, measured in Unicode characters */
  offset: number;
}

/**
* A photo of a Place. The photo can be accesed via the [Place Photo](https://developers.google.com/places/web-service/photos) API using an url in the following pattern:

```
https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=photo_reference&key=YOUR_API_KEY
```

See [Place Photos](https://developers.google.com/places/web-service/photos) for more information.
*/
export interface PlacePhoto {
  /** The height of the photo. */
  height: number;

  /** The width of the photo. */
  width: number;

  /** The HTML attributions for the photo. */
  html_attributions: string[];

  /**
   * A string used to identify the photo when you perform a Photo request.
   * @example Aap_uEDY1GahdnFHaMArH3g6W4bELCIn9yaZ0XGqh1-G2lX3OwzTExM6g-_0U8qedk5o3R1SmtMK-NMt34dDMcCNnc4DWREX0vQEH9DjvfF70ZPHo3IFbT-TU_oCNCCB3kxe36EsdXeoKEtRH74NueUIeslebZuVeteDpKvpwVqxRpZFVSjS
   */
  photo_reference: string;
}

/**
 * An object describing the opening hours of a place.
 */
export interface PlaceOpeningHours {
  /** A boolean value indicating if the place is open at the current time. */
  open_now?: boolean;

  /**
   * An array of opening periods covering seven days, starting from Sunday, in chronological order.
   *
   */
  periods?: PlaceOpeningHoursPeriod[];

  /**
   * An array of strings describing in human-readable text the hours of the place.
   * @example ["Monday: 9:00 AM – 5:00 PM","Tuesday: 9:00 AM – 5:00 PM","Wednesday: 9:00 AM – 5:00 PM","Thursday: 9:00 AM – 5:00 PM","Friday: 9:00 AM – 5:00 PM","Saturday: Closed","Sunday: Closed"]
   */
  weekday_text?: string[];
}

export interface PlaceOpeningHoursPeriod {
  /** Contains a pair of day and time objects describing when the place opens. */
  open: PlaceOpeningHoursPeriodDetail;

  /**
   * May contain a pair of day and time objects describing when the place closes. If a place is always open, the close section will be missing from the response. Clients can rely on always-open being represented as an open period containing day with value `0` and time with value `0000`, and no `close`.
   *
   */
  close?: PlaceOpeningHoursPeriodDetail;
}

export interface PlaceOpeningHoursPeriodDetail {
  /** A number from 0–6, corresponding to the days of the week, starting on Sunday. For example, 2 means Tuesday. */
  day: number;

  /**
   * May contain a time of day in 24-hour hhmm format. Values are in the range 0000–2359. The time will be reported in the place’s time zone.
   * @example 1700
   */
  time: string;
}

/**
 * A review of the place submitted by a user.
 */
export interface PlaceReview {
  /**
   * The name of the user who submitted the review. Anonymous reviews are attributed to "A Google user".
   * @example A Google User
   */
  author_name: string;

  /** The URL to the user's Google Maps Local Guides profile, if available. */
  author_url?: string;

  /** The URL to the user's profile photo, if available. */
  profile_photo_url?: string;

  /** An IETF language code indicating the language used in the user's review. This field contains the main language tag only, and not the secondary tag indicating country or region. For example, all the English reviews are tagged as 'en', and not 'en-AU' or 'en-UK' and so on. */
  language?: string;

  /** The user's overall rating for this place. This is a whole number, ranging from 1 to 5. */
  rating: number;

  /** The time that the review was submitted in text, relative to the current time. */
  relative_time_description: string;

  /** The user's review. When reviewing a location with Google Places, text reviews are considered optional. Therefore, this field may be empty. Note that this field may include simple HTML markup. For example, the entity reference `&amp;` may represent an ampersand character. */
  text?: string;

  /** The time that the review was submitted, measured in the number of seconds since since midnight, January 1, 1970 UTC. */
  time: number;
}

export interface PlacesAutocompleteResponse {
  /**
   * Contains an array of predictions.
   *
   */
  predictions: PlaceAutocompletePrediction[];

  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesAutocompleteStatus;

  /**
   * When the service returns a status code other than `OK<`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change.
   *
   */
  error_message?: string;

  /**
   * When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change.
   *
   */
  info_messages?: string[];
}

/**
* Status codes returned by service.
- `OK` indicating the API request was successful.
- `ZERO_RESULTS` indicating that the search was successful but returned no results. This may occur if the search was passed a bounds in a remote location.
- `INVALID_REQUEST` indicating the API request was malformed, generally due to the missing `input` parameter.
- `OVER_QUERY_LIMIT` indicating any of the following:
  - You have exceeded the QPS limits.
  - Billing has not been enabled on your account.
  - The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).
  See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) for more information about how to resolve this error.
- `REQUEST_DENIED` indicating that your request was denied, generally because:
  - The request is missing an API key.
  - The `key` parameter is invalid.
- `UNKNOWN_ERROR` indicating an unknown error.
*/
export enum PlacesAutocompleteStatus {
  OK = "OK",
  ZERO_RESULTS = "ZERO_RESULTS",
  INVALID_REQUEST = "INVALID_REQUEST",
  OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
  REQUEST_DENIED = "REQUEST_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export interface PlacesDetailsResponse {
  /** May contain a set of attributions about this listing which must be displayed to the user (some listings may not have attribution). */
  html_attributions: string[];

  /** Contains the detailed information about the place requested. */
  result: Place;

  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesDetailsStatus;

  /**
   * When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change.
   *
   */
  info_messages?: string[];
}

/**
* Status codes returned by service.
- `OK` indicating the API request was successful.
- `ZERO_RESULTS` indicating that the referenced location, `place_id`, was valid but no longer refers to a valid result. This may occur if the establishment is no longer in business. 
- `NOT_FOUND` indicating that that the referenced location, `place_id`, was not found in the Places database. 
- `INVALID_REQUEST` indicating the API request was malformed.
- `OVER_QUERY_LIMIT` indicating any of the following:
  - You have exceeded the QPS limits.
  - Billing has not been enabled on your account.
  - The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).
  See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) for more information about how to resolve this error.
- `REQUEST_DENIED` indicating that your request was denied, generally because:
  - The request is missing an API key.
  - The `key` parameter is invalid.
- `UNKNOWN_ERROR` indicating an unknown error.
*/
export enum PlacesDetailsStatus {
  OK = "OK",
  ZERO_RESULTS = "ZERO_RESULTS",
  INVALID_REQUEST = "INVALID_REQUEST",
  NOT_FOUND = "NOT_FOUND",
  OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
  REQUEST_DENIED = "REQUEST_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export interface PlacesFindPlaceFromTextResponse {
  /**
   * Contains an array of Place candidates.
   * <div class="caution">Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a place_id, then use that Place ID to make a Place Details request.</div>
   *
   */
  candidates: Place[];

  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesSearchStatus;

  /**
   * When the service returns a status code other than `OK<`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change.
   *
   * @example Error while parsing 'fields' parameter: Unsupported field name 'invalid'.
   */
  error_message?: string;

  /**
   * When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change.
   *
   */
  info_messages?: string[];
}

export interface PlacesNearbySearchResponse {
  /** May contain a set of attributions about this listing which must be displayed to the user (some listings may not have attribution). */
  html_attributions: string[];

  /**
   * Contains an array of places.
   * <div class="caution">Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a `place_id`, then use that Place ID to make a Place Details request.</div>
   *
   */
  results: Place[];

  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesSearchStatus;

  /**
   * When the service returns a status code other than `OK<`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change.
   *
   */
  error_message?: string;

  /**
   * When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change.
   *
   */
  info_messages?: string[];

  /**
   * Contains a token that can be used to return up to 20 additional results. A next_page_token will not be returned if there are no additional results to display. The maximum number of results that can be returned is 60. There is a short delay between when a next_page_token is issued, and when it will become valid.
   *
   */
  next_page_token?: string;
}

export interface PlacesQueryAutocompleteResponse {
  /**
   * Contains an array of predictions.
   *
   */
  predictions: PlaceAutocompletePrediction[];

  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesAutocompleteStatus;

  /**
   * When the service returns a status code other than `OK`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change.
   *
   */
  error_message?: string;

  /**
   * When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change.
   *
   */
  info_messages?: string[];
}

/**
* Status codes returned by service.
- `OK` indicating the API request was successful.
- `ZERO_RESULTS` indicating that the search was successful but returned no results. This may occur if the search was passed a `latlng` in a remote location.
- `INVALID_REQUEST` indicating the API request was malformed, generally due to missing required query parameter (`location` or `radius`).
- `OVER_QUERY_LIMIT` indicating any of the following:
  - You have exceeded the QPS limits.
  - Billing has not been enabled on your account.
  - The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
  - The provided method of payment is no longer valid (for example, a credit card has expired).
  See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) for more information about how to resolve this error.
- `REQUEST_DENIED` indicating that your request was denied, generally because:
  - The request is missing an API key.
  - The `key` parameter is invalid.
- `UNKNOWN_ERROR` indicating an unknown error.
*/
export enum PlacesSearchStatus {
  OK = "OK",
  ZERO_RESULTS = "ZERO_RESULTS",
  INVALID_REQUEST = "INVALID_REQUEST",
  OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
  REQUEST_DENIED = "REQUEST_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export interface PlacesTextSearchResponse {
  /** May contain a set of attributions about this listing which must be displayed to the user (some listings may not have attribution). */
  html_attributions: string[];

  /**
   * Contains an array of places.
   * <div class="caution">Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a `place_id`, then use that Place ID to make a Place Details request.</div>
   *
   */
  results: Place[];

  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesSearchStatus;

  /**
   * When the service returns a status code other than `OK<`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change.
   *
   */
  error_message?: string;

  /**
   * When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change.
   *
   */
  info_messages?: string[];

  /**
   * Contains a token that can be used to return up to 20 additional results. A next_page_token will not be returned if there are no additional results to display. The maximum number of results that can be returned is 60. There is a short delay between when a next_page_token is issued, and when it will become valid.
   *
   */
  next_page_token?: string;
}

/**
* The `status` field within the Streetview Metadata response object contains the status of the request. The `status` field may contain the following values:

- `OK` indicates that no errors occurred; a panorama is found and metadata is returned.
- `INVALID_REQUEST` indicates that the request was malformed.
- `NOT_FOUND` indicates that the address string provided in the `location` parameter could not be found. This may occur if a non-existent address is given.
- `ZERO_RESULTS` indicates that no panorama could be found near the provided location. This may occur if a non-existent or invalid `pano` id is given.
- `OVER_QUERY_LIMIT` indicates the requestor has exceeded quota.
- `REQUEST_DENIED` indicates that your request was denied. This may occur if you did not [authorize](https://developers.google.com/maps/documentation/streetview/get-api-key) your request, or if the Street View Static API is not activated in the Google Cloud Console project containing your API key.
- `UNKNOWN_ERROR` indicates that the request could not be processed due to a server error. This is often a temporary status. The request may succeed if you try again
*/
export enum StreetViewStatus {
  OK = "OK",
  INVALID_REQUEST = "INVALID_REQUEST",
  NOT_FOUND = "NOT_FOUND",
  ZERO_RESULTS = "ZERO_RESULTS",
  OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
  REQUEST_DENIED = "REQUEST_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

export interface StreetViewResponse {
  /** An array of snapped points. */
  copyright?: string;

  /** A string indicating year and month that the panorama was captured. */
  date?: string;

  /** The location of the panorama. */
  location?: LatLngLiteral;

  /**
   * A specific panorama ID. These are generally stable, though panoramas may change ID over time as imagery is refreshed.
   * @example tu510ie_z4ptBZYo2BGEJg
   */
  pano_id?: string;

  /** The status of the request. */
  status: StreetViewStatus;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://www.googleapis.com" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Google Maps Platform
 * @version 1.17.16
 * @baseUrl https://www.googleapis.com
 *
 * API Specification for Google Maps Platform
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  geolocation = {
    /**
     * @description Geolocation API returns a location and accuracy radius based on information about cell towers and WiFi nodes that the mobile client can detect. This document describes the protocol used to send this data to the server and to return a response to the client. Communication is done over HTTPS using POST. Both request and response are formatted as JSON, and the content type of both is `application/json`. You must specify a key in your request, included as the value of a`key` parameter. A `key` is your application's  API key. This key identifies your application for purposes of quota management. Learn how to [get a key](https://developers.google.com/maps/documentation/geolocation/get-api-key).
     *
     * @tags Geolocation API
     * @name Geolocate
     * @request POST:/geolocation/v1/geolocate
     * @secure
     */
    geolocate: (data?: GeolocationRequest, params: RequestParams = {}) =>
      this.request<GeolocationResponse, ErrorResponse>({
        path: `/geolocation/v1/geolocate`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  maps = {
    /**
     * @description The Directions API is a web service that uses an HTTP request to return JSON or XML-formatted directions between locations. You can receive directions for several modes of transportation, such as transit, driving, walking, or cycling.
     *
     * @tags Directions API
     * @name Directions
     * @request GET:/maps/api/directions/json
     * @secure
     */
    directions: (
      query: {
        arrival_time?: number;
        departure_time?: number;
        alternatives?: boolean;
        avoid?: string;
        destination: string;
        origin: string;
        units?: "imperial" | "metric";
        waypoints?: string;
        language?:
          | "ar"
          | "bg"
          | "bn"
          | "ca"
          | "cs"
          | "da"
          | "de"
          | "el"
          | "en"
          | "en-AU"
          | "en-GB"
          | "es"
          | "eu"
          | "fa"
          | "fi"
          | "fil"
          | "fr"
          | "gl"
          | "gu"
          | "hi"
          | "hr"
          | "hu"
          | "id"
          | "it"
          | "iw"
          | "ja"
          | "kn"
          | "ko"
          | "lt"
          | "lv"
          | "ml"
          | "mr"
          | "nl"
          | "no"
          | "pl"
          | "pt"
          | "pt-BR"
          | "pt-PT"
          | "ro"
          | "ru"
          | "sk"
          | "sl"
          | "sr"
          | "sv"
          | "ta"
          | "te"
          | "th"
          | "tl"
          | "tr"
          | "uk"
          | "vi"
          | "zh-CN"
          | "zh-TW";
        mode?: "driving" | "bicycling" | "transit" | "walking";
        region?:
          | "ac"
          | "ad"
          | "ae"
          | "af"
          | "ag"
          | "ai"
          | "al"
          | "am"
          | "an"
          | "ao"
          | "aq"
          | "ar"
          | "as"
          | "at"
          | "au"
          | "aw"
          | "ax"
          | "az"
          | "ba"
          | "bb"
          | "bd"
          | "be"
          | "bf"
          | "bg"
          | "bh"
          | "bi"
          | "bj"
          | "bl"
          | "bm"
          | "bn"
          | "bo"
          | "bq"
          | "br"
          | "bs"
          | "bt"
          | "bv"
          | "bw"
          | "by"
          | "bz"
          | "ca"
          | "cc"
          | "cd"
          | "cf"
          | "cg"
          | "ch"
          | "ci"
          | "ck"
          | "cl"
          | "cm"
          | "cn"
          | "co"
          | "cr"
          | "cu"
          | "cv"
          | "cw"
          | "cx"
          | "cy"
          | "cz"
          | "de"
          | "dj"
          | "dk"
          | "dm"
          | "do"
          | "dz"
          | "ec"
          | "ee"
          | "eg"
          | "eh"
          | "en"
          | "er"
          | "es"
          | "et"
          | "eu"
          | "fi"
          | "fj"
          | "fk"
          | "fm"
          | "fo"
          | "fr"
          | "ga"
          | "gb"
          | "gd"
          | "ge"
          | "gf"
          | "gg"
          | "gh"
          | "gi"
          | "gl"
          | "gm"
          | "gn"
          | "gp"
          | "gq"
          | "gr"
          | "gs"
          | "gt"
          | "gu"
          | "gw"
          | "gy"
          | "hk"
          | "hm"
          | "hn"
          | "hr"
          | "ht"
          | "hu"
          | "id"
          | "ie"
          | "il"
          | "im"
          | "in"
          | "io"
          | "iq"
          | "ir"
          | "is"
          | "it"
          | "je"
          | "jm"
          | "jo"
          | "jp"
          | "ke"
          | "kg"
          | "kh"
          | "ki"
          | "km"
          | "kn"
          | "kp"
          | "kr"
          | "kw"
          | "ky"
          | "kz"
          | "la"
          | "lb"
          | "lc"
          | "li"
          | "lk"
          | "lr"
          | "ls"
          | "lt"
          | "lu"
          | "lv"
          | "ly"
          | "ma"
          | "mc"
          | "md"
          | "me"
          | "mf"
          | "mg"
          | "mh"
          | "mk"
          | "ml"
          | "mm"
          | "mn"
          | "mo"
          | "mp"
          | "mq"
          | "mr"
          | "ms"
          | "mt"
          | "mu"
          | "mv"
          | "mw"
          | "mx"
          | "my"
          | "mz"
          | "na"
          | "nc"
          | "ne"
          | "nf"
          | "ng"
          | "ni"
          | "nl"
          | "no"
          | "np"
          | "nr"
          | "nu"
          | "nz"
          | "om"
          | "pa"
          | "pe"
          | "pf"
          | "pg"
          | "ph"
          | "pk"
          | "pl"
          | "pm"
          | "pn"
          | "pr"
          | "ps"
          | "pt"
          | "pw"
          | "py"
          | "qa"
          | "re"
          | "ro"
          | "rs"
          | "ru"
          | "rw"
          | "sa"
          | "sb"
          | "sc"
          | "sd"
          | "se"
          | "sg"
          | "sh"
          | "si"
          | "sj"
          | "sk"
          | "sl"
          | "sm"
          | "sn"
          | "so"
          | "sr"
          | "ss"
          | "st"
          | "su"
          | "sv"
          | "sx"
          | "sy"
          | "sz"
          | "tc"
          | "td"
          | "tf"
          | "tg"
          | "th"
          | "tj"
          | "tk"
          | "tl"
          | "tm"
          | "tn"
          | "to"
          | "tp"
          | "tr"
          | "tt"
          | "tv"
          | "tw"
          | "tz"
          | "ua"
          | "ug"
          | "uk"
          | "um"
          | "us"
          | "uy"
          | "uz"
          | "va"
          | "vc"
          | "ve"
          | "vg"
          | "vi"
          | "vn"
          | "vu"
          | "wf"
          | "ws"
          | "ye"
          | "yt"
          | "za"
          | "zm"
          | "zw";
        traffic_model?: "best_guess" | "pessimistic" | "optimistic";
        transit_mode?: string;
        transit_routing_preference?: "less_walking" | "fewer_transfers";
      },
      params: RequestParams = {},
    ) =>
      this.request<DirectionsResponse, any>({
        path: `/maps/api/directions/json`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The Elevation API provides a simple interface to query locations on the earth for elevation data. Additionally, you may request sampled elevation data along paths, allowing you to calculate elevation changes along routes. With the Elevation API, you can develop hiking and biking applications, positioning applications, or low resolution surveying applications. Elevation data is available for all locations on the surface of the earth, including depth locations on the ocean floor (which return negative values). In those cases where Google does not possess exact elevation measurements at the precise location you request, the service interpolates and returns an averaged value using the four nearest locations. Elevation values are expressed relative to local mean sea level (LMSL). Requests to the Elevation API utilize different parameters based on whether the request is for discrete locations or for an ordered path. For discrete locations, requests for elevation return data on the specific locations passed in the request; for paths, elevation requests are instead sampled along the given path.
     *
     * @tags Elevation API
     * @name Elevation
     * @request GET:/maps/api/elevation/json
     * @secure
     */
    elevation: (
      query?: { locations?: LatLngArrayString; path?: LatLngArrayString; samples?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          error_message?: string;
          status: ElevationStatus;
          results: { elevation?: number; resolution?: number; location?: LatLngLiteral }[];
        },
        any
      >({
        path: `/maps/api/elevation/json`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The Geocoding API is a service that provides geocoding and reverse geocoding of addresses. **Geocoding** is the process of converting addresses (like a street address) into geographic coordinates (like latitude and longitude), which you can use to place markers on a map, or position the map. **Reverse geocoding** is the process of converting geographic coordinates into a human-readable address. You can also use the Geocoding API to find the address for a given place ID. To see countries currently supported by the Google Maps Platform Geocoding API, please consult the [Google Maps coverage data](https://developers.google.com/maps/coverage). The accuracy of geocoded locations may vary per country, so you should consider using the returned `location_type` field to determine if a good enough match has been found for the purposes of your application. Please note that the availability of geocoding data depends on our contracts with data providers, so it is subject to change.
     *
     * @tags Geocoding API
     * @name Geocode
     * @request GET:/maps/api/geocode/json
     * @secure
     */
    geocode: (
      query?: {
        address?: string;
        bounds?: LatLngArrayString;
        components?: string[];
        latlng?: string;
        location_type?: ("APPROXIMATE" | "GEOMETRIC_CENTER" | "RANGE_INTERPOLATED" | "ROOFTOP")[];
        place_id?: string;
        result_type?: (
          | "administrative_area_level_1"
          | "administrative_area_level_2"
          | "administrative_area_level_3"
          | "administrative_area_level_4"
          | "administrative_area_level_5"
          | "airport"
          | "colloquial_area"
          | "country"
          | "intersection"
          | "locality"
          | "natural_feature"
          | "neighborhood"
          | "park"
          | "plus_code"
          | "political"
          | "postal_code"
          | "premise"
          | "route"
          | "street_address"
          | "sublocality"
          | "subpremise"
        )[];
        language?:
          | "ar"
          | "bg"
          | "bn"
          | "ca"
          | "cs"
          | "da"
          | "de"
          | "el"
          | "en"
          | "en-AU"
          | "en-GB"
          | "es"
          | "eu"
          | "fa"
          | "fi"
          | "fil"
          | "fr"
          | "gl"
          | "gu"
          | "hi"
          | "hr"
          | "hu"
          | "id"
          | "it"
          | "iw"
          | "ja"
          | "kn"
          | "ko"
          | "lt"
          | "lv"
          | "ml"
          | "mr"
          | "nl"
          | "no"
          | "pl"
          | "pt"
          | "pt-BR"
          | "pt-PT"
          | "ro"
          | "ru"
          | "sk"
          | "sl"
          | "sr"
          | "sv"
          | "ta"
          | "te"
          | "th"
          | "tl"
          | "tr"
          | "uk"
          | "vi"
          | "zh-CN"
          | "zh-TW";
        region?:
          | "ac"
          | "ad"
          | "ae"
          | "af"
          | "ag"
          | "ai"
          | "al"
          | "am"
          | "an"
          | "ao"
          | "aq"
          | "ar"
          | "as"
          | "at"
          | "au"
          | "aw"
          | "ax"
          | "az"
          | "ba"
          | "bb"
          | "bd"
          | "be"
          | "bf"
          | "bg"
          | "bh"
          | "bi"
          | "bj"
          | "bl"
          | "bm"
          | "bn"
          | "bo"
          | "bq"
          | "br"
          | "bs"
          | "bt"
          | "bv"
          | "bw"
          | "by"
          | "bz"
          | "ca"
          | "cc"
          | "cd"
          | "cf"
          | "cg"
          | "ch"
          | "ci"
          | "ck"
          | "cl"
          | "cm"
          | "cn"
          | "co"
          | "cr"
          | "cu"
          | "cv"
          | "cw"
          | "cx"
          | "cy"
          | "cz"
          | "de"
          | "dj"
          | "dk"
          | "dm"
          | "do"
          | "dz"
          | "ec"
          | "ee"
          | "eg"
          | "eh"
          | "en"
          | "er"
          | "es"
          | "et"
          | "eu"
          | "fi"
          | "fj"
          | "fk"
          | "fm"
          | "fo"
          | "fr"
          | "ga"
          | "gb"
          | "gd"
          | "ge"
          | "gf"
          | "gg"
          | "gh"
          | "gi"
          | "gl"
          | "gm"
          | "gn"
          | "gp"
          | "gq"
          | "gr"
          | "gs"
          | "gt"
          | "gu"
          | "gw"
          | "gy"
          | "hk"
          | "hm"
          | "hn"
          | "hr"
          | "ht"
          | "hu"
          | "id"
          | "ie"
          | "il"
          | "im"
          | "in"
          | "io"
          | "iq"
          | "ir"
          | "is"
          | "it"
          | "je"
          | "jm"
          | "jo"
          | "jp"
          | "ke"
          | "kg"
          | "kh"
          | "ki"
          | "km"
          | "kn"
          | "kp"
          | "kr"
          | "kw"
          | "ky"
          | "kz"
          | "la"
          | "lb"
          | "lc"
          | "li"
          | "lk"
          | "lr"
          | "ls"
          | "lt"
          | "lu"
          | "lv"
          | "ly"
          | "ma"
          | "mc"
          | "md"
          | "me"
          | "mf"
          | "mg"
          | "mh"
          | "mk"
          | "ml"
          | "mm"
          | "mn"
          | "mo"
          | "mp"
          | "mq"
          | "mr"
          | "ms"
          | "mt"
          | "mu"
          | "mv"
          | "mw"
          | "mx"
          | "my"
          | "mz"
          | "na"
          | "nc"
          | "ne"
          | "nf"
          | "ng"
          | "ni"
          | "nl"
          | "no"
          | "np"
          | "nr"
          | "nu"
          | "nz"
          | "om"
          | "pa"
          | "pe"
          | "pf"
          | "pg"
          | "ph"
          | "pk"
          | "pl"
          | "pm"
          | "pn"
          | "pr"
          | "ps"
          | "pt"
          | "pw"
          | "py"
          | "qa"
          | "re"
          | "ro"
          | "rs"
          | "ru"
          | "rw"
          | "sa"
          | "sb"
          | "sc"
          | "sd"
          | "se"
          | "sg"
          | "sh"
          | "si"
          | "sj"
          | "sk"
          | "sl"
          | "sm"
          | "sn"
          | "so"
          | "sr"
          | "ss"
          | "st"
          | "su"
          | "sv"
          | "sx"
          | "sy"
          | "sz"
          | "tc"
          | "td"
          | "tf"
          | "tg"
          | "th"
          | "tj"
          | "tk"
          | "tl"
          | "tm"
          | "tn"
          | "to"
          | "tp"
          | "tr"
          | "tt"
          | "tv"
          | "tw"
          | "tz"
          | "ua"
          | "ug"
          | "uk"
          | "um"
          | "us"
          | "uy"
          | "uz"
          | "va"
          | "vc"
          | "ve"
          | "vg"
          | "vi"
          | "vn"
          | "vu"
          | "wf"
          | "ws"
          | "ye"
          | "yt"
          | "za"
          | "zm"
          | "zw";
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocodingResponse, any>({
        path: `/maps/api/geocode/json`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The Time Zone API provides a simple interface to request the time zone for locations on the surface of the earth, as well as the time offset from UTC for each of those locations. You request the time zone information for a specific latitude/longitude pair and date. The API returns the name of that time zone, the time offset from UTC, and the daylight savings offset.
     *
     * @tags Time Zone API
     * @name Timezone
     * @request GET:/maps/api/timezone/json
     * @secure
     */
    timezone: (
      query: {
        language?:
          | "ar"
          | "bg"
          | "bn"
          | "ca"
          | "cs"
          | "da"
          | "de"
          | "el"
          | "en"
          | "en-AU"
          | "en-GB"
          | "es"
          | "eu"
          | "fa"
          | "fi"
          | "fil"
          | "fr"
          | "gl"
          | "gu"
          | "hi"
          | "hr"
          | "hu"
          | "id"
          | "it"
          | "iw"
          | "ja"
          | "kn"
          | "ko"
          | "lt"
          | "lv"
          | "ml"
          | "mr"
          | "nl"
          | "no"
          | "pl"
          | "pt"
          | "pt-BR"
          | "pt-PT"
          | "ro"
          | "ru"
          | "sk"
          | "sl"
          | "sr"
          | "sv"
          | "ta"
          | "te"
          | "th"
          | "tl"
          | "tr"
          | "uk"
          | "vi"
          | "zh-CN"
          | "zh-TW";
        location: string;
        timestamp: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TimeZoneResponse, any>({
        path: `/maps/api/timezone/json`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The Distance Matrix API is a service that provides travel distance and time for a matrix of origins and destinations. The API returns information based on the recommended route between start and end points, as calculated by the Google Maps API, and consists of rows containing duration and distance values for each pair.
     *
     * @tags Distance Matrix API
     * @name DistanceMatrix
     * @request GET:/maps/api/distancematrix/json
     * @secure
     */
    distanceMatrix: (
      query: {
        arrival_time?: number;
        departure_time?: number;
        avoid?: string;
        destinations: string[];
        origins: string[];
        units?: "imperial" | "metric";
        language?:
          | "ar"
          | "bg"
          | "bn"
          | "ca"
          | "cs"
          | "da"
          | "de"
          | "el"
          | "en"
          | "en-AU"
          | "en-GB"
          | "es"
          | "eu"
          | "fa"
          | "fi"
          | "fil"
          | "fr"
          | "gl"
          | "gu"
          | "hi"
          | "hr"
          | "hu"
          | "id"
          | "it"
          | "iw"
          | "ja"
          | "kn"
          | "ko"
          | "lt"
          | "lv"
          | "ml"
          | "mr"
          | "nl"
          | "no"
          | "pl"
          | "pt"
          | "pt-BR"
          | "pt-PT"
          | "ro"
          | "ru"
          | "sk"
          | "sl"
          | "sr"
          | "sv"
          | "ta"
          | "te"
          | "th"
          | "tl"
          | "tr"
          | "uk"
          | "vi"
          | "zh-CN"
          | "zh-TW";
        mode?: "driving" | "bicycling" | "transit" | "walking";
        region?:
          | "ac"
          | "ad"
          | "ae"
          | "af"
          | "ag"
          | "ai"
          | "al"
          | "am"
          | "an"
          | "ao"
          | "aq"
          | "ar"
          | "as"
          | "at"
          | "au"
          | "aw"
          | "ax"
          | "az"
          | "ba"
          | "bb"
          | "bd"
          | "be"
          | "bf"
          | "bg"
          | "bh"
          | "bi"
          | "bj"
          | "bl"
          | "bm"
          | "bn"
          | "bo"
          | "bq"
          | "br"
          | "bs"
          | "bt"
          | "bv"
          | "bw"
          | "by"
          | "bz"
          | "ca"
          | "cc"
          | "cd"
          | "cf"
          | "cg"
          | "ch"
          | "ci"
          | "ck"
          | "cl"
          | "cm"
          | "cn"
          | "co"
          | "cr"
          | "cu"
          | "cv"
          | "cw"
          | "cx"
          | "cy"
          | "cz"
          | "de"
          | "dj"
          | "dk"
          | "dm"
          | "do"
          | "dz"
          | "ec"
          | "ee"
          | "eg"
          | "eh"
          | "en"
          | "er"
          | "es"
          | "et"
          | "eu"
          | "fi"
          | "fj"
          | "fk"
          | "fm"
          | "fo"
          | "fr"
          | "ga"
          | "gb"
          | "gd"
          | "ge"
          | "gf"
          | "gg"
          | "gh"
          | "gi"
          | "gl"
          | "gm"
          | "gn"
          | "gp"
          | "gq"
          | "gr"
          | "gs"
          | "gt"
          | "gu"
          | "gw"
          | "gy"
          | "hk"
          | "hm"
          | "hn"
          | "hr"
          | "ht"
          | "hu"
          | "id"
          | "ie"
          | "il"
          | "im"
          | "in"
          | "io"
          | "iq"
          | "ir"
          | "is"
          | "it"
          | "je"
          | "jm"
          | "jo"
          | "jp"
          | "ke"
          | "kg"
          | "kh"
          | "ki"
          | "km"
          | "kn"
          | "kp"
          | "kr"
          | "kw"
          | "ky"
          | "kz"
          | "la"
          | "lb"
          | "lc"
          | "li"
          | "lk"
          | "lr"
          | "ls"
          | "lt"
          | "lu"
          | "lv"
          | "ly"
          | "ma"
          | "mc"
          | "md"
          | "me"
          | "mf"
          | "mg"
          | "mh"
          | "mk"
          | "ml"
          | "mm"
          | "mn"
          | "mo"
          | "mp"
          | "mq"
          | "mr"
          | "ms"
          | "mt"
          | "mu"
          | "mv"
          | "mw"
          | "mx"
          | "my"
          | "mz"
          | "na"
          | "nc"
          | "ne"
          | "nf"
          | "ng"
          | "ni"
          | "nl"
          | "no"
          | "np"
          | "nr"
          | "nu"
          | "nz"
          | "om"
          | "pa"
          | "pe"
          | "pf"
          | "pg"
          | "ph"
          | "pk"
          | "pl"
          | "pm"
          | "pn"
          | "pr"
          | "ps"
          | "pt"
          | "pw"
          | "py"
          | "qa"
          | "re"
          | "ro"
          | "rs"
          | "ru"
          | "rw"
          | "sa"
          | "sb"
          | "sc"
          | "sd"
          | "se"
          | "sg"
          | "sh"
          | "si"
          | "sj"
          | "sk"
          | "sl"
          | "sm"
          | "sn"
          | "so"
          | "sr"
          | "ss"
          | "st"
          | "su"
          | "sv"
          | "sx"
          | "sy"
          | "sz"
          | "tc"
          | "td"
          | "tf"
          | "tg"
          | "th"
          | "tj"
          | "tk"
          | "tl"
          | "tm"
          | "tn"
          | "to"
          | "tp"
          | "tr"
          | "tt"
          | "tv"
          | "tw"
          | "tz"
          | "ua"
          | "ug"
          | "uk"
          | "um"
          | "us"
          | "uy"
          | "uz"
          | "va"
          | "vc"
          | "ve"
          | "vg"
          | "vi"
          | "vn"
          | "vu"
          | "wf"
          | "ws"
          | "ye"
          | "yt"
          | "za"
          | "zm"
          | "zw";
        traffic_model?: "best_guess" | "pessimistic" | "optimistic";
        transit_mode?: string;
        transit_routing_preference?: "less_walking" | "fewer_transfers";
      },
      params: RequestParams = {},
    ) =>
      this.request<DistanceMatrixResponse, any>({
        path: `/maps/api/distancematrix/json`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The Places API is a service that returns information about places using HTTP requests. Places are defined within this API as establishments, geographic locations, or prominent points of interest.
     *
     * @tags Places API
     * @name PlaceDetails
     * @request GET:/maps/api/place/details/json
     * @secure
     */
    placeDetails: (
      query: {
        place_id: string;
        fields?: string[];
        sessiontoken?: string;
        language?:
          | "ar"
          | "bg"
          | "bn"
          | "ca"
          | "cs"
          | "da"
          | "de"
          | "el"
          | "en"
          | "en-AU"
          | "en-GB"
          | "es"
          | "eu"
          | "fa"
          | "fi"
          | "fil"
          | "fr"
          | "gl"
          | "gu"
          | "hi"
          | "hr"
          | "hu"
          | "id"
          | "it"
          | "iw"
          | "ja"
          | "kn"
          | "ko"
          | "lt"
          | "lv"
          | "ml"
          | "mr"
          | "nl"
          | "no"
          | "pl"
          | "pt"
          | "pt-BR"
          | "pt-PT"
          | "ro"
          | "ru"
          | "sk"
          | "sl"
          | "sr"
          | "sv"
          | "ta"
          | "te"
          | "th"
          | "tl"
          | "tr"
          | "uk"
          | "vi"
          | "zh-CN"
          | "zh-TW";
        region?:
          | "ac"
          | "ad"
          | "ae"
          | "af"
          | "ag"
          | "ai"
          | "al"
          | "am"
          | "an"
          | "ao"
          | "aq"
          | "ar"
          | "as"
          | "at"
          | "au"
          | "aw"
          | "ax"
          | "az"
          | "ba"
          | "bb"
          | "bd"
          | "be"
          | "bf"
          | "bg"
          | "bh"
          | "bi"
          | "bj"
          | "bl"
          | "bm"
          | "bn"
          | "bo"
          | "bq"
          | "br"
          | "bs"
          | "bt"
          | "bv"
          | "bw"
          | "by"
          | "bz"
          | "ca"
          | "cc"
          | "cd"
          | "cf"
          | "cg"
          | "ch"
          | "ci"
          | "ck"
          | "cl"
          | "cm"
          | "cn"
          | "co"
          | "cr"
          | "cu"
          | "cv"
          | "cw"
          | "cx"
          | "cy"
          | "cz"
          | "de"
          | "dj"
          | "dk"
          | "dm"
          | "do"
          | "dz"
          | "ec"
          | "ee"
          | "eg"
          | "eh"
          | "en"
          | "er"
          | "es"
          | "et"
          | "eu"
          | "fi"
          | "fj"
          | "fk"
          | "fm"
          | "fo"
          | "fr"
          | "ga"
          | "gb"
          | "gd"
          | "ge"
          | "gf"
          | "gg"
          | "gh"
          | "gi"
          | "gl"
          | "gm"
          | "gn"
          | "gp"
          | "gq"
          | "gr"
          | "gs"
          | "gt"
          | "gu"
          | "gw"
          | "gy"
          | "hk"
          | "hm"
          | "hn"
          | "hr"
          | "ht"
          | "hu"
          | "id"
          | "ie"
          | "il"
          | "im"
          | "in"
          | "io"
          | "iq"
          | "ir"
          | "is"
          | "it"
          | "je"
          | "jm"
          | "jo"
          | "jp"
          | "ke"
          | "kg"
          | "kh"
          | "ki"
          | "km"
          | "kn"
          | "kp"
          | "kr"
          | "kw"
          | "ky"
          | "kz"
          | "la"
          | "lb"
          | "lc"
          | "li"
          | "lk"
          | "lr"
          | "ls"
          | "lt"
          | "lu"
          | "lv"
          | "ly"
          | "ma"
          | "mc"
          | "md"
          | "me"
          | "mf"
          | "mg"
          | "mh"
          | "mk"
          | "ml"
          | "mm"
          | "mn"
          | "mo"
          | "mp"
          | "mq"
          | "mr"
          | "ms"
          | "mt"
          | "mu"
          | "mv"
          | "mw"
          | "mx"
          | "my"
          | "mz"
          | "na"
          | "nc"
          | "ne"
          | "nf"
          | "ng"
          | "ni"
          | "nl"
          | "no"
          | "np"
          | "nr"
          | "nu"
          | "nz"
          | "om"
          | "pa"
          | "pe"
          | "pf"
          | "pg"
          | "ph"
          | "pk"
          | "pl"
          | "pm"
          | "pn"
          | "pr"
          | "ps"
          | "pt"
          | "pw"
          | "py"
          | "qa"
          | "re"
          | "ro"
          | "rs"
          | "ru"
          | "rw"
          | "sa"
          | "sb"
          | "sc"
          | "sd"
          | "se"
          | "sg"
          | "sh"
          | "si"
          | "sj"
          | "sk"
          | "sl"
          | "sm"
          | "sn"
          | "so"
          | "sr"
          | "ss"
          | "st"
          | "su"
          | "sv"
          | "sx"
          | "sy"
          | "sz"
          | "tc"
          | "td"
          | "tf"
          | "tg"
          | "th"
          | "tj"
          | "tk"
          | "tl"
          | "tm"
          | "tn"
          | "to"
          | "tp"
          | "tr"
          | "tt"
          | "tv"
          | "tw"
          | "tz"
          | "ua"
          | "ug"
          | "uk"
          | "um"
          | "us"
          | "uy"
          | "uz"
          | "va"
          | "vc"
          | "ve"
          | "vg"
          | "vi"
          | "vn"
          | "vu"
          | "wf"
          | "ws"
          | "ye"
          | "yt"
          | "za"
          | "zm"
          | "zw";
      },
      params: RequestParams = {},
    ) =>
      this.request<PlacesDetailsResponse, any>({
        path: `/maps/api/place/details/json`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description A Find Place request takes a text input and returns a place. The input can be any kind of Places text data, such as a name, address, or phone number. The request must be a string. A Find Place request using non-string data such as a lat/lng coordinate or plus code generates an error. <div class="note">Note: If you omit the fields parameter from a Find Place request, only the place_id for the result will be returned.</div>
     *
     * @tags Places API
     * @name FindPlaceFromText
     * @request GET:/maps/api/place/findplacefromtext/json
     * @secure
     */
    findPlaceFromText: (
      query: {
        fields?: string[];
        input: string;
        inputtype: "textquery" | "phonenumber";
        locationbias?: string;
        language?:
          | "ar"
          | "bg"
          | "bn"
          | "ca"
          | "cs"
          | "da"
          | "de"
          | "el"
          | "en"
          | "en-AU"
          | "en-GB"
          | "es"
          | "eu"
          | "fa"
          | "fi"
          | "fil"
          | "fr"
          | "gl"
          | "gu"
          | "hi"
          | "hr"
          | "hu"
          | "id"
          | "it"
          | "iw"
          | "ja"
          | "kn"
          | "ko"
          | "lt"
          | "lv"
          | "ml"
          | "mr"
          | "nl"
          | "no"
          | "pl"
          | "pt"
          | "pt-BR"
          | "pt-PT"
          | "ro"
          | "ru"
          | "sk"
          | "sl"
          | "sr"
          | "sv"
          | "ta"
          | "te"
          | "th"
          | "tl"
          | "tr"
          | "uk"
          | "vi"
          | "zh-CN"
          | "zh-TW";
      },
      params: RequestParams = {},
    ) =>
      this.request<PlacesFindPlaceFromTextResponse, any>({
        path: `/maps/api/place/findplacefromtext/json`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description A Nearby Search lets you search for places within a specified area. You can refine your search request by supplying keywords or specifying the type of place you are searching for.
     *
     * @tags Places API
     * @name NearbySearch
     * @request GET:/maps/api/place/nearbysearch/json
     * @secure
     */
    nearbySearch: (
      query: {
        keyword?: string;
        location: string;
        maxprice?: "0" | "1" | "2" | "3" | "4";
        minprice?: "0" | "1" | "2" | "3" | "4";
        name?: string;
        opennow?: boolean;
        pagetoken?: string;
        rankby?: "prominence" | "distance";
        radius?: number;
        type?: string;
        language?:
          | "ar"
          | "bg"
          | "bn"
          | "ca"
          | "cs"
          | "da"
          | "de"
          | "el"
          | "en"
          | "en-AU"
          | "en-GB"
          | "es"
          | "eu"
          | "fa"
          | "fi"
          | "fil"
          | "fr"
          | "gl"
          | "gu"
          | "hi"
          | "hr"
          | "hu"
          | "id"
          | "it"
          | "iw"
          | "ja"
          | "kn"
          | "ko"
          | "lt"
          | "lv"
          | "ml"
          | "mr"
          | "nl"
          | "no"
          | "pl"
          | "pt"
          | "pt-BR"
          | "pt-PT"
          | "ro"
          | "ru"
          | "sk"
          | "sl"
          | "sr"
          | "sv"
          | "ta"
          | "te"
          | "th"
          | "tl"
          | "tr"
          | "uk"
          | "vi"
          | "zh-CN"
          | "zh-TW";
      },
      params: RequestParams = {},
    ) =>
      this.request<PlacesNearbySearchResponse, any>({
        path: `/maps/api/place/nearbysearch/json`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The Google Places API Text Search Service is a web service that returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street". The service responds with a list of places matching the text string and any location bias that has been set. The service is especially useful for making [ambiguous address](https://developers.google.com/maps/documentation/geocoding/best-practices) queries in an automated system, and non-address components of the string may match businesses as well as addresses. Examples of ambiguous address queries are incomplete addresses, poorly formatted addresses, or a request that includes non-address components such as business names. The search response will include a list of places. You can send a Place Details request for more information about any of the places in the response.
     *
     * @tags Places API
     * @name TextSearch
     * @request GET:/maps/api/place/textsearch/json
     * @secure
     */
    textSearch: (
      query: {
        location?: string;
        maxprice?: "0" | "1" | "2" | "3" | "4";
        minprice?: "0" | "1" | "2" | "3" | "4";
        opennow?: boolean;
        pagetoken?: string;
        query: string;
        radius?: number;
        type?: string;
        language?:
          | "ar"
          | "bg"
          | "bn"
          | "ca"
          | "cs"
          | "da"
          | "de"
          | "el"
          | "en"
          | "en-AU"
          | "en-GB"
          | "es"
          | "eu"
          | "fa"
          | "fi"
          | "fil"
          | "fr"
          | "gl"
          | "gu"
          | "hi"
          | "hr"
          | "hu"
          | "id"
          | "it"
          | "iw"
          | "ja"
          | "kn"
          | "ko"
          | "lt"
          | "lv"
          | "ml"
          | "mr"
          | "nl"
          | "no"
          | "pl"
          | "pt"
          | "pt-BR"
          | "pt-PT"
          | "ro"
          | "ru"
          | "sk"
          | "sl"
          | "sr"
          | "sv"
          | "ta"
          | "te"
          | "th"
          | "tl"
          | "tr"
          | "uk"
          | "vi"
          | "zh-CN"
          | "zh-TW";
        region?:
          | "ac"
          | "ad"
          | "ae"
          | "af"
          | "ag"
          | "ai"
          | "al"
          | "am"
          | "an"
          | "ao"
          | "aq"
          | "ar"
          | "as"
          | "at"
          | "au"
          | "aw"
          | "ax"
          | "az"
          | "ba"
          | "bb"
          | "bd"
          | "be"
          | "bf"
          | "bg"
          | "bh"
          | "bi"
          | "bj"
          | "bl"
          | "bm"
          | "bn"
          | "bo"
          | "bq"
          | "br"
          | "bs"
          | "bt"
          | "bv"
          | "bw"
          | "by"
          | "bz"
          | "ca"
          | "cc"
          | "cd"
          | "cf"
          | "cg"
          | "ch"
          | "ci"
          | "ck"
          | "cl"
          | "cm"
          | "cn"
          | "co"
          | "cr"
          | "cu"
          | "cv"
          | "cw"
          | "cx"
          | "cy"
          | "cz"
          | "de"
          | "dj"
          | "dk"
          | "dm"
          | "do"
          | "dz"
          | "ec"
          | "ee"
          | "eg"
          | "eh"
          | "en"
          | "er"
          | "es"
          | "et"
          | "eu"
          | "fi"
          | "fj"
          | "fk"
          | "fm"
          | "fo"
          | "fr"
          | "ga"
          | "gb"
          | "gd"
          | "ge"
          | "gf"
          | "gg"
          | "gh"
          | "gi"
          | "gl"
          | "gm"
          | "gn"
          | "gp"
          | "gq"
          | "gr"
          | "gs"
          | "gt"
          | "gu"
          | "gw"
          | "gy"
          | "hk"
          | "hm"
          | "hn"
          | "hr"
          | "ht"
          | "hu"
          | "id"
          | "ie"
          | "il"
          | "im"
          | "in"
          | "io"
          | "iq"
          | "ir"
          | "is"
          | "it"
          | "je"
          | "jm"
          | "jo"
          | "jp"
          | "ke"
          | "kg"
          | "kh"
          | "ki"
          | "km"
          | "kn"
          | "kp"
          | "kr"
          | "kw"
          | "ky"
          | "kz"
          | "la"
          | "lb"
          | "lc"
          | "li"
          | "lk"
          | "lr"
          | "ls"
          | "lt"
          | "lu"
          | "lv"
          | "ly"
          | "ma"
          | "mc"
          | "md"
          | "me"
          | "mf"
          | "mg"
          | "mh"
          | "mk"
          | "ml"
          | "mm"
          | "mn"
          | "mo"
          | "mp"
          | "mq"
          | "mr"
          | "ms"
          | "mt"
          | "mu"
          | "mv"
          | "mw"
          | "mx"
          | "my"
          | "mz"
          | "na"
          | "nc"
          | "ne"
          | "nf"
          | "ng"
          | "ni"
          | "nl"
          | "no"
          | "np"
          | "nr"
          | "nu"
          | "nz"
          | "om"
          | "pa"
          | "pe"
          | "pf"
          | "pg"
          | "ph"
          | "pk"
          | "pl"
          | "pm"
          | "pn"
          | "pr"
          | "ps"
          | "pt"
          | "pw"
          | "py"
          | "qa"
          | "re"
          | "ro"
          | "rs"
          | "ru"
          | "rw"
          | "sa"
          | "sb"
          | "sc"
          | "sd"
          | "se"
          | "sg"
          | "sh"
          | "si"
          | "sj"
          | "sk"
          | "sl"
          | "sm"
          | "sn"
          | "so"
          | "sr"
          | "ss"
          | "st"
          | "su"
          | "sv"
          | "sx"
          | "sy"
          | "sz"
          | "tc"
          | "td"
          | "tf"
          | "tg"
          | "th"
          | "tj"
          | "tk"
          | "tl"
          | "tm"
          | "tn"
          | "to"
          | "tp"
          | "tr"
          | "tt"
          | "tv"
          | "tw"
          | "tz"
          | "ua"
          | "ug"
          | "uk"
          | "um"
          | "us"
          | "uy"
          | "uz"
          | "va"
          | "vc"
          | "ve"
          | "vg"
          | "vi"
          | "vn"
          | "vu"
          | "wf"
          | "ws"
          | "ye"
          | "yt"
          | "za"
          | "zm"
          | "zw";
      },
      params: RequestParams = {},
    ) =>
      this.request<PlacesTextSearchResponse, any>({
        path: `/maps/api/place/textsearch/json`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The Place Photo service, part of the Places API, is a read- only API that allows you to add high quality photographic content to your application. The Place Photo service gives you access to the millions of photos stored in the Places database. When you get place information using a Place Details request, photo references will be returned for relevant photographic content. Find Place, Nearby Search, and Text Search requests also return a single photo reference per place, when relevant. Using the Photo service you can then access the referenced photos and resize the image to the optimal size for your application. Photos returned by the Photo service are sourced from a variety of locations, including business owners and user contributed photos. In most cases, these photos can be used without attribution, or will have the required attribution included as a part of the image. However, if the returned photo element includes a value in the html_attributions field, you will have to include the additional attribution in your application wherever you display the image.
     *
     * @tags Places API
     * @name PlacePhoto
     * @request GET:/maps/api/place/photo
     * @secure
     */
    placePhoto: (
      query: { photo_reference: string; maxheight?: number; maxwidth?: number },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/maps/api/place/photo`,
        method: "GET",
        query: query,
        secure: true,
        format: "blob",
        ...params,
      }),

    /**
     * @description The Query Autocomplete service can be used to provide a query prediction for text-based geographic searches, by returning suggested queries as you type. The Query Autocomplete service allows you to add on-the-fly geographic query predictions to your application. Instead of searching for a specific location, a user can type in a categorical search, such as "pizza near New York" and the service responds with a list of suggested queries matching the string. As the Query Autocomplete service can match on both full words and substrings, applications can send queries as the user types to provide on-the-fly predictions.
     *
     * @tags Places API
     * @name QueryAutocomplete
     * @request GET:/maps/api/place/queryautocomplete/json
     * @secure
     */
    queryAutocomplete: (
      query: {
        input: string;
        offset?: number;
        location?: string;
        radius?: number;
        language?:
          | "ar"
          | "bg"
          | "bn"
          | "ca"
          | "cs"
          | "da"
          | "de"
          | "el"
          | "en"
          | "en-AU"
          | "en-GB"
          | "es"
          | "eu"
          | "fa"
          | "fi"
          | "fil"
          | "fr"
          | "gl"
          | "gu"
          | "hi"
          | "hr"
          | "hu"
          | "id"
          | "it"
          | "iw"
          | "ja"
          | "kn"
          | "ko"
          | "lt"
          | "lv"
          | "ml"
          | "mr"
          | "nl"
          | "no"
          | "pl"
          | "pt"
          | "pt-BR"
          | "pt-PT"
          | "ro"
          | "ru"
          | "sk"
          | "sl"
          | "sr"
          | "sv"
          | "ta"
          | "te"
          | "th"
          | "tl"
          | "tr"
          | "uk"
          | "vi"
          | "zh-CN"
          | "zh-TW";
      },
      params: RequestParams = {},
    ) =>
      this.request<PlacesQueryAutocompleteResponse, any>({
        path: `/maps/api/place/queryautocomplete/json`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The Place Autocomplete service is a web service that returns place predictions in response to an HTTP request. The request specifies a textual search string and optional geographic bounds. The service can be used to provide autocomplete functionality for text-based geographic searches, by returning places such as businesses, addresses and points of interest as a user types. <div class="note">Note: You can use Place Autocomplete even without a map. If you do show a map, it must be a Google map. When you display predictions from the Place Autocomplete service without a map, you must include the ['Powered by Google'](https://developers.google.com/maps/documentation/places/web-service/policies#logo_requirementshttps://developers.google.com/maps/documentation/places/web-service/policies#logo_requirements) logo.</div> The Place Autocomplete service can match on full words and substrings, resolving place names, addresses, and plus codes. Applications can therefore send queries as the user types, to provide on-the-fly place predictions. The returned predictions are designed to be presented to the user to aid them in selecting the desired place. You can send a [Place Details](https://developers.google.com/maps/documentation/places/web-service/details#PlaceDetailsRequests) request for more information about any of the places which are returned.
     *
     * @tags Places API
     * @name Autocomplete
     * @request GET:/maps/api/place/autocomplete/json
     * @secure
     */
    autocomplete: (
      query: {
        input: string;
        sessiontoken?: string;
        components?: string;
        strictbounds?: boolean;
        offset?: number;
        origin?: string;
        location?: string;
        radius?: number;
        types?: string;
        language?:
          | "ar"
          | "bg"
          | "bn"
          | "ca"
          | "cs"
          | "da"
          | "de"
          | "el"
          | "en"
          | "en-AU"
          | "en-GB"
          | "es"
          | "eu"
          | "fa"
          | "fi"
          | "fil"
          | "fr"
          | "gl"
          | "gu"
          | "hi"
          | "hr"
          | "hu"
          | "id"
          | "it"
          | "iw"
          | "ja"
          | "kn"
          | "ko"
          | "lt"
          | "lv"
          | "ml"
          | "mr"
          | "nl"
          | "no"
          | "pl"
          | "pt"
          | "pt-BR"
          | "pt-PT"
          | "ro"
          | "ru"
          | "sk"
          | "sl"
          | "sr"
          | "sv"
          | "ta"
          | "te"
          | "th"
          | "tl"
          | "tr"
          | "uk"
          | "vi"
          | "zh-CN"
          | "zh-TW";
        region?:
          | "ac"
          | "ad"
          | "ae"
          | "af"
          | "ag"
          | "ai"
          | "al"
          | "am"
          | "an"
          | "ao"
          | "aq"
          | "ar"
          | "as"
          | "at"
          | "au"
          | "aw"
          | "ax"
          | "az"
          | "ba"
          | "bb"
          | "bd"
          | "be"
          | "bf"
          | "bg"
          | "bh"
          | "bi"
          | "bj"
          | "bl"
          | "bm"
          | "bn"
          | "bo"
          | "bq"
          | "br"
          | "bs"
          | "bt"
          | "bv"
          | "bw"
          | "by"
          | "bz"
          | "ca"
          | "cc"
          | "cd"
          | "cf"
          | "cg"
          | "ch"
          | "ci"
          | "ck"
          | "cl"
          | "cm"
          | "cn"
          | "co"
          | "cr"
          | "cu"
          | "cv"
          | "cw"
          | "cx"
          | "cy"
          | "cz"
          | "de"
          | "dj"
          | "dk"
          | "dm"
          | "do"
          | "dz"
          | "ec"
          | "ee"
          | "eg"
          | "eh"
          | "en"
          | "er"
          | "es"
          | "et"
          | "eu"
          | "fi"
          | "fj"
          | "fk"
          | "fm"
          | "fo"
          | "fr"
          | "ga"
          | "gb"
          | "gd"
          | "ge"
          | "gf"
          | "gg"
          | "gh"
          | "gi"
          | "gl"
          | "gm"
          | "gn"
          | "gp"
          | "gq"
          | "gr"
          | "gs"
          | "gt"
          | "gu"
          | "gw"
          | "gy"
          | "hk"
          | "hm"
          | "hn"
          | "hr"
          | "ht"
          | "hu"
          | "id"
          | "ie"
          | "il"
          | "im"
          | "in"
          | "io"
          | "iq"
          | "ir"
          | "is"
          | "it"
          | "je"
          | "jm"
          | "jo"
          | "jp"
          | "ke"
          | "kg"
          | "kh"
          | "ki"
          | "km"
          | "kn"
          | "kp"
          | "kr"
          | "kw"
          | "ky"
          | "kz"
          | "la"
          | "lb"
          | "lc"
          | "li"
          | "lk"
          | "lr"
          | "ls"
          | "lt"
          | "lu"
          | "lv"
          | "ly"
          | "ma"
          | "mc"
          | "md"
          | "me"
          | "mf"
          | "mg"
          | "mh"
          | "mk"
          | "ml"
          | "mm"
          | "mn"
          | "mo"
          | "mp"
          | "mq"
          | "mr"
          | "ms"
          | "mt"
          | "mu"
          | "mv"
          | "mw"
          | "mx"
          | "my"
          | "mz"
          | "na"
          | "nc"
          | "ne"
          | "nf"
          | "ng"
          | "ni"
          | "nl"
          | "no"
          | "np"
          | "nr"
          | "nu"
          | "nz"
          | "om"
          | "pa"
          | "pe"
          | "pf"
          | "pg"
          | "ph"
          | "pk"
          | "pl"
          | "pm"
          | "pn"
          | "pr"
          | "ps"
          | "pt"
          | "pw"
          | "py"
          | "qa"
          | "re"
          | "ro"
          | "rs"
          | "ru"
          | "rw"
          | "sa"
          | "sb"
          | "sc"
          | "sd"
          | "se"
          | "sg"
          | "sh"
          | "si"
          | "sj"
          | "sk"
          | "sl"
          | "sm"
          | "sn"
          | "so"
          | "sr"
          | "ss"
          | "st"
          | "su"
          | "sv"
          | "sx"
          | "sy"
          | "sz"
          | "tc"
          | "td"
          | "tf"
          | "tg"
          | "th"
          | "tj"
          | "tk"
          | "tl"
          | "tm"
          | "tn"
          | "to"
          | "tp"
          | "tr"
          | "tt"
          | "tv"
          | "tw"
          | "tz"
          | "ua"
          | "ug"
          | "uk"
          | "um"
          | "us"
          | "uy"
          | "uz"
          | "va"
          | "vc"
          | "ve"
          | "vg"
          | "vi"
          | "vn"
          | "vu"
          | "wf"
          | "ws"
          | "ye"
          | "yt"
          | "za"
          | "zm"
          | "zw";
      },
      params: RequestParams = {},
    ) =>
      this.request<PlacesAutocompleteResponse, any>({
        path: `/maps/api/place/autocomplete/json`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description The Street View Static API lets you embed a static (non-interactive) Street View panorama or thumbnail into your web page, without the use of JavaScript. The viewport is defined with URL parameters sent through a standard HTTP request, and is returned as a static image.
     *
     * @tags Street View API
     * @name StreetView
     * @request GET:/maps/api/streetview
     * @secure
     */
    streetView: (
      query: {
        fov?: number;
        heading?: number;
        location?: string;
        pano?: string;
        pitch?: number;
        radius?: number;
        return_error_code?: boolean;
        signature?: string;
        size: string;
        source?: "default" | "outdoor";
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/maps/api/streetview`,
        method: "GET",
        query: query,
        secure: true,
        format: "blob",
        ...params,
      }),

    /**
     * @description The Street View Static API metadata requests provide data about Street View panoramas. Using the metadata, you can find out if a Street View image is available at a given location, as well as getting programmatic access to the latitude and longitude, the panorama ID, the date the photo was taken, and the copyright information for the image. Accessing this metadata allows you to customize error behavior in your application.
     *
     * @tags Street View API
     * @name StreetViewMetadata
     * @request GET:/maps/api/streetview/metadata
     * @secure
     */
    streetViewMetadata: (
      query?: {
        heading?: number;
        location?: string;
        pano?: string;
        pitch?: number;
        radius?: number;
        return_error_code?: boolean;
        signature?: string;
        size?: string;
        source?: "default" | "outdoor";
      },
      params: RequestParams = {},
    ) =>
      this.request<StreetViewResponse, any>({
        path: `/maps/api/streetview/metadata`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  v1 = {
    /**
     * @description This service returns the best-fit road geometry for a given set of GPS coordinates. This service takes up to 100 GPS points collected along a route, and returns a similar set of data with the points snapped to the most likely roads the vehicle was traveling along. Optionally, you can request that the points be interpolated, resulting in a path that smoothly follows the geometry of the road.
     *
     * @tags Roads API
     * @name SnapToRoads
     * @request GET:/v1/snaptoroads
     * @secure
     */
    snapToRoads: (query: { path: LatLngArrayString; interpolate?: boolean }, params: RequestParams = {}) =>
      this.request<SnapToRoadsResponse, any>({
        path: `/v1/snaptoroads`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This service returns individual road segments for a given set of GPS coordinates. This services takes up to 100 GPS points and returns the closest road segment for each point. The points passed do not need to be part of a continuous path.
     *
     * @tags Roads API
     * @name NearestRoads
     * @request GET:/v1/nearestRoads
     * @secure
     */
    nearestRoads: (query: { points: LatLngArrayString }, params: RequestParams = {}) =>
      this.request<NearestRoadsResponse, NearestRoadsErrorResponse>({
        path: `/v1/nearestRoads`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
