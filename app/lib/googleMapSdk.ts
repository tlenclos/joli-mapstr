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
 * Bounds
 * A rectangle in geographical coordinates from points at the southwest and northeast corners.
 */
export interface Bounds {
  /** An object describing a specific location with Latitude and Longitude in decimal degrees. */
  northeast: LatLngLiteral;
  /** An object describing a specific location with Latitude and Longitude in decimal degrees. */
  southwest: LatLngLiteral;
}

/**
 * LatLngArrayString
 * An array of comma separated {latitude,longitude} strings.
 * @example ["35,-100","40,-110"]
 */
export type LatLngArrayString = string[];

/**
 * LatLngLiteral
 * An object describing a specific location with Latitude and Longitude in decimal degrees.
 */
export interface LatLngLiteral {
  /** Latitude in decimal degrees */
  lat: number;
  /** Longitude in decimal degrees */
  lng: number;
}

/**
 * LatitudeLongitudeLiteral
 * An object describing a specific location with Latitude and Longitude in decimal degrees.
 */
export interface LatitudeLongitudeLiteral {
  /** Latitude in decimal degrees */
  latitude: number;
  /** Longitude in decimal degrees */
  longitude: number;
}

/** AddressComponent */
export interface AddressComponent {
  /**
   * The full text description or name of the address component as returned by the Geocoder.
   * @example "Council of the City of Sydney"
   */
  long_name: string;
  /**
   * An abbreviated textual name for the address component, if available. For example, an address component for the state of Alaska may have a long_name of "Alaska" and a short_name of "AK" using the 2-letter postal abbreviation.
   * @example "Sydney"
   */
  short_name: string;
  /**
   * An array indicating the type of the address component. See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types).
   * @example ["administrative_area_level_2","political"]
   */
  types: string[];
}

/**
 * Fare
 * The total fare for the route.
 *
 * ```
 * {
 *   "currency" : "USD",
 *   "value" : 6,
 *   "text" : "$6.00"
 * }
 * ```
 */
export interface Fare {
  /**
   * An [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) indicating the currency that the amount is expressed in.
   * @example "USD"
   */
  currency: string;
  /** The total fare amount, in the currency specified. */
  value: number;
  /**
   * The total fare amount, formatted in the requested language.
   * @example "$6.00"
   */
  text: string;
}

/**
 * Geometry
 * An object describing the location.
 */
export interface Geometry {
  /** An object describing a specific location with Latitude and Longitude in decimal degrees. */
  location: LatLngLiteral;
  /** A rectangle in geographical coordinates from points at the southwest and northeast corners. */
  viewport: Bounds;
}

/**
 * PlusCode
 * An encoded location reference, derived from latitude and longitude coordinates, that represents an area, 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named).
 */
export interface PlusCode {
  /** The `compound_code` is a 6 character or longer local code with an explicit location (`CWC8+R9, Mountain View, CA, USA`). Some APIs may return an empty string if the `compound_code` is not available. */
  compound_code?: string;
  /** The `global_code` is a 4 character area code and 6 character or longer local code (`849VCWC8+R9`). */
  global_code: string;
}

/**
 * TravelMode
 * - `DRIVING` (default) indicates calculation using the road network.
 * - `BICYCLING` requests calculation for bicycling via bicycle paths & preferred streets (where available).
 * - `TRANSIT` requests calculation via public transit routes (where available).
 * - `WALKING` requests calculation for walking via pedestrian paths & sidewalks (where available).
 */
export enum TravelMode {
  DRIVING = "DRIVING",
  BICYCLING = "BICYCLING",
  TRANSIT = "TRANSIT",
  WALKING = "WALKING",
}

/**
 * TextValueObject
 * An object containing a numeric value and its formatted text representation.
 */
export interface TextValueObject {
  /** String value. */
  text: string;
  /** Numeric value. */
  value: number;
}

/**
 * TimeZoneTextValueObject
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
 * DistanceMatrixElementStatus
 * - `OK` indicates the response contains a valid result.
 * - `NOT_FOUND` indicates that the origin and/or destination of this pairing could not be geocoded.
 * - `ZERO_RESULTS` indicates no route could be found between the origin and destination.
 * - `MAX_ROUTE_LENGTH_EXCEEDED` indicates the requested route is too long and cannot be processed.
 */
export enum DistanceMatrixElementStatus {
  OK = "OK",
  NOT_FOUND = "NOT_FOUND",
  ZERO_RESULTS = "ZERO_RESULTS",
  MAX_ROUTE_LENGTH_EXCEEDED = "MAX_ROUTE_LENGTH_EXCEEDED",
}

/** DistanceMatrixResponse */
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
   * @example "You have exceeded your rate-limit for this API."
   */
  error_message?: string;
}

/** DistanceMatrixRow */
export interface DistanceMatrixRow {
  /**
   * When the Distance Matrix API returns results, it places them within a JSON rows array. Even if no results are returned (such as when the origins and/or destinations don't exist), it still returns an empty array.
   *
   * Rows are ordered according to the values in the origin parameter of the request. Each row corresponds to an origin, and each element within that row corresponds to a pairing of the origin with a destination value.
   *
   * Each row array contains one or more element entries, which in turn contain the information about a single origin-destination pairing.
   */
  elements: DistanceMatrixElement[];
}

/** DistanceMatrixElement */
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
 * DistanceMatrixStatus
 * Status codes returned by service.
 * - `OK` indicates the response contains a valid result.
 * - `INVALID_REQUEST` indicates that the provided request was invalid.
 * - `MAX_ELEMENTS_EXCEEDED` indicates that the product of origins and destinations exceeds the per-query limit.
 * - `MAX_DIMENSIONS_EXCEEDED` indicates that the number of origins or destinations exceeds the per-query limit.
 * - `OVER_DAILY_LIMIT` indicates any of the following:
 *   - The API key is missing or invalid.
 *   - Billing has not been enabled on your account.
 *   - A self-imposed usage cap has been exceeded.
 *   - The provided method of payment is no longer valid (for example, a credit card has expired).
 * - `OVER_QUERY_LIMIT` indicates the service has received too many requests from your application within the allowed time period.
 * - `REQUEST_DENIED` indicates that the service denied use of the Distance Matrix service by your application.
 * - `UNKNOWN_ERROR` indicates a Distance Matrix request could not be processed due to a server error. The request may succeed if you try again.
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

/** DirectionsResponse */
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
  /** When the service returns a status code other than `OK`, there may be an additional `error_message` field within the response object. This field contains more detailed information about the reasons behind the given status code. This field is not always returned, and its content is subject to change. */
  error_message?: string;
}

/**
 * DirectionsStep
 * Each element in the steps array defines a single step of the calculated directions. A step is the most atomic unit of a direction's route, containing a single step describing a specific, single instruction on the journey. E.g. "Turn left at W. 4th St." The step not only describes the instruction but also contains distance and duration information relating to how this step relates to the following step. For example, a step denoted as "Merge onto I-80 West" may contain a duration of "37 miles" and "40 minutes," indicating that the next step is 37 miles/40 minutes from this step.
 *
 * When using the Directions API to search for transit directions, the steps array will include additional transit details in the form of a transit_details array. If the directions include multiple modes of transportation, detailed directions will be provided for walking or driving steps in an inner steps array. For example, a walking step will include directions from the start and end locations: "Walk to Innes Ave & Fitch St". That step will include detailed walking directions for that route in the inner steps array, such as: "Head north-west", "Turn left onto Arelious Walker", and "Turn left onto Innes Ave".
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

/** DirectionsLeg */
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
  /**
   * Information about traffic speed along the leg.
   * @deprecated
   */
  traffic_speed_entry: DirectionsTrafficSpeedEntry[];
  /** The locations of via waypoints along this leg. */
  via_waypoint: DirectionsViaWaypoint[];
}

/**
 * DirectionsRoute
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
 * DirectionsStatus
 * The status field within the Directions response object contains the status of the request, and may contain debugging information to help you track down why the Directions service failed. The status field may contain the following values:
 *
 * - `OK` indicates the response contains a valid result.
 * - `NOT_FOUND` indicates at least one of the locations specified in the request's origin, destination, or waypoints could not be geocoded.
 * - `ZERO_RESULTS` indicates no route could be found between the origin and destination.
 * - `MAX_WAYPOINTS_EXCEEDED` indicates that too many waypoints were provided in the request. For applications using the Directions API as a web service, or the directions service in the Maps JavaScript API, the maximum allowed number of waypoints is 25, plus the origin and destination.
 * - `MAX_ROUTE_LENGTH_EXCEEDED` indicates the requested route is too long and cannot be processed. This error occurs when more complex directions are returned. Try reducing the number of waypoints, turns, or instructions.
 * - `INVALID_REQUEST` indicates that the provided request was invalid. Common causes of this status include an invalid parameter or parameter value.
 * - `OVER_DAILY_LIMIT` indicates any of the following:
 *     - The API key is missing or invalid.
 *     - Billing has not been enabled on your account.
 *     - A self-imposed usage cap has been exceeded.
 *     - The provided method of payment is no longer valid (for example, a credit card has expired).
 *     See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) to learn how to fix this.
 * - `OVER_QUERY_LIMIT` indicates the service has received too many requests from your application within the allowed time period.
 * - `REQUEST_DENIED` indicates that the service denied use of the directions service by your application.
 * - `UNKNOWN_ERROR` indicates a directions request could not be processed due to a server error. The request may succeed if you try again.
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

/** DirectionsGeocodedWaypoint */
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
   *
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
 * DirectionsPolyline
 * [Polyline encoding](https://developers.google.com/maps/documentation/utilities/polylinealgorithm) is a lossy compression algorithm that allows you to store a series of coordinates as a single string. Point coordinates are encoded using signed values. If you only have a few static points, you may also wish to use the interactive polyline encoding utility.
 *
 * The encoding process converts a binary value into a series of character codes for ASCII characters using the familiar base64 encoding scheme: to ensure proper display of these characters, encoded values are summed with 63 (the ASCII character '?') before converting them into ASCII. The algorithm also checks for additional character codes for a given point by checking the least significant bit of each byte group; if this bit is set to 1, the point is not yet fully formed and additional data must follow.
 *
 * Additionally, to conserve space, points only include the offset from the previous point (except of course for the first point). All points are encoded in Base64 as signed integers, as latitudes and longitudes are signed values. The encoding format within a polyline needs to represent two coordinates representing latitude and longitude to a reasonable precision. Given a maximum longitude of +/- 180 degrees to a precision of 5 decimal places (180.00000 to -180.00000), this results in the need for a 32 bit signed binary integer value.
 */
export interface DirectionsPolyline {
  /**
   * A single string representation of the polyline.
   * @example "chnwEbderQ?XR@D?@?"
   */
  points: string;
}

/**
 * DirectionsTrafficSpeedEntry
 * @deprecated
 */
export interface DirectionsTrafficSpeedEntry {
  /** The current traffic/speed conditions on this portion of a path. */
  speed_category: string;
  /** The offset along the path (in meters) up to which this speed category is valid. */
  offset_meters: number;
}

/** DirectionsTransitAgency */
export interface DirectionsTransitAgency {
  /** The name of this transit agency. */
  name?: string;
  /** The transit agency's phone number. */
  phone?: string;
  /** The transit agency's URL. */
  url?: string;
}

/**
 * DirectionsTransitDetails
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
   * @example "538"
   */
  trip_short_name?: string;
}

/** DirectionsTransitLine */
export interface DirectionsTransitLine {
  /** The transit agency (or agencies) that operates this transit line. */
  agencies: DirectionsTransitAgency[];
  /**
   * The color commonly used in signage for this line.
   * @example "#ce8e00"
   */
  color?: string;
  /** The full name of this transit line, e.g. "8 Avenue Local". */
  name: string;
  /** The short name of this transit line. This will normally be a line number, such as "M7" or "355". */
  short_name?: string;
  /**
   * The color commonly used in signage for this line.
   * @example "#121212"
   */
  text_color?: string;
  /** Contains the URL for this transit line as provided by the transit agency. */
  url?: string;
  /** Contains the URL for the icon associated with this line. */
  icon?: string;
  /** The type of vehicle that operates on this transit line. */
  vehicle?: DirectionsTransitVehicle;
}

/** DirectionsTransitStop */
export interface DirectionsTransitStop {
  /** The location of the stop. */
  location: LatLngLiteral;
  /** The name of the transit stop. */
  name: string;
}

/** DirectionsTransitVehicle */
export interface DirectionsTransitVehicle {
  /** Contains the URL for an icon associated with this vehicle type. */
  icon?: string;
  /** Contains the URL for the icon associated with this vehicle type, based on the local transport signage. */
  local_icon?: string;
  /**
   * The name of this vehicle, capitalized.
   * @example "Train"
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

/** DirectionsViaWaypoint */
export interface DirectionsViaWaypoint {
  /** The location of the waypoint. */
  location?: LatLngLiteral;
  /** The index of the step containing the waypoint. */
  step_index?: number;
  /** The position of the waypoint along the step's polyline, expressed as a ratio from 0 to 1. */
  step_interpolation?: number;
}

/** ElevationResult */
export interface ElevationResult {
  /** The elevation of the location in meters. */
  elevation: number;
  /** The value indicating the maximum distance between data points from which the elevation was interpolated, in meters. This property will be missing if the resolution is not known. Note that elevation data becomes more coarse (larger resolution values) when multiple points are passed. To obtain the most accurate elevation value for a point, it should be queried independently. */
  resolution?: number;
  /** A location element of the position for which elevation data is being computed. Note that for path requests, the set of location elements will contain the sampled points along the path. */
  location: LatLngLiteral;
}

/** ElevationResponse */
export interface ElevationResponse {
  /**
   * When the service returns a status code other than `OK`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change.
   * @example "Invalid request. Invalid 'locations' parameter."
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
   */
  status: ElevationStatus;
  results: ElevationResult[];
}

/**
 * ElevationStatus
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

/** GeocodingResult */
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

/** GeocodingResponse */
export interface GeocodingResponse {
  /** An encoded location reference, derived from latitude and longitude coordinates, that represents an area: 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named). See [Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) and [plus codes](https://plus.codes/). */
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
   * @example "Invalid request. Missing the `address`, `components`, `latlng` or `place_id` parameter."
   */
  error_message?: string;
}

/**
 * GeocodingStatus
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
 * GeocodingGeometry
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
 * GeolocationRequest
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
 * GeolocationResponse
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
 * CellTower
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
 * WiFiAccessPoint
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

/** NearestRoadsError */
export interface NearestRoadsError {
  /** This is the same as the HTTP status of the response. */
  code: number;
  /** A short description of the error. */
  message: string;
  /** An error such as `INVALID_ARGUMENT`. */
  status: string;
}

/** NearestRoadsErrorResponse */
export interface NearestRoadsErrorResponse {
  error?: NearestRoadsError;
}

/** NearestRoadsResponse */
export interface NearestRoadsResponse {
  /** An array of snapped points. */
  snappedPoints?: SnappedPoint[];
}

/** SnappedPoint */
export interface SnappedPoint {
  /** An object describing a specific location with Latitude and Longitude in decimal degrees. */
  location: LatitudeLongitudeLiteral;
  /** An integer that indicates the corresponding value in the original request. Each value in the request should map to a snapped value in the response. However, if you've set interpolate=true, then it's possible that the response will contain more coordinates than the request. Interpolated values will not have an `originalIndex`. These values are indexed from `0`, so a point with an originalIndex of `4` will be the snapped value of the 5th latitude/longitude passed to the path parameter. */
  originalIndex?: number;
  /** A unique identifier for a place. All place IDs returned by the Roads API correspond to road segments. */
  placeId: string;
}

/** SnapToRoadsResponse */
export interface SnapToRoadsResponse {
  /** An array of snapped points. */
  snappedPoints?: SnappedPoint[];
  /** A string containing a user-visible warning. */
  warningMessage?: string;
}

/** TimeZoneResponse */
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
   *
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
 * TimeZoneStatus
 * The `status` field within the Time Zone response object contains the status of the request. The `status` field may contain the following values:
 *
 * - `OK` indicates that the request was successful.
 * - `INVALID_REQUEST` indicates that the request was malformed.
 * - `OVER_DAILY_LIMIT` indicates any of the following:
 *   - The API key is missing or invalid.
 *   - Billing has not been enabled on your account.
 *   - A self-imposed usage cap has been exceeded.
 *   - The provided method of payment is no longer valid (for example, a credit card has expired).
 *
 * - `OVER_QUERY_LIMIT` indicates the requestor has exceeded quota.
 * - `REQUEST_DENIED` indicates that the API did not complete the request. Confirm that the request was sent over HTTPS instead of HTTP.
 * - `UNKNOWN_ERROR` indicates an unknown error.
 * - `ZERO_RESULTS` indicates that no time zone data could be found for the specified position or time. Confirm that the request is for a location on land, and not over water.
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
 * ErrorResponse
 * In the case of an error, a standard format error response body will be returned and the HTTP status code will be set to an error status. The response contains an object with a single error object.
 * @example {"error":{"code":400,"message":"API key not valid. Please pass a valid API key.","errors":[{"message":"API key not valid. Please pass a valid API key.","domain":"global","reason":"badRequest"}],"status":"INVALID_ARGUMENT","details":[{"@type":"type.googleapis.com/google.rpc.ErrorInfo","reason":"API_KEY_INVALID","domain":"googleapis.com","metadata":{"service":"geolocation.googleapis.com"}}]}}
 */
export interface ErrorResponse {
  /** An error return by the server. */
  error: ErrorObject;
}

/** ErrorObject */
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
 * ErrorDetail
 * @example {"message":"API key not valid. Please pass a valid API key.","domain":"global","reason":"badRequest"}
 */
export interface ErrorDetail {
  /**
   * The type of error.
   * @example "type.googleapis.com/google.rpc.ErrorInfo"
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

/** FieldViolation */
export interface FieldViolation {
  /** The name of the invalid field. */
  field: string;
  /** A short description of the error. */
  description: string;
}

/**
 * Place
 * Attributes describing a place. Not all attributes will be available for all place types.
 */
export interface Place {
  /** An array containing the separate components applicable to this address. */
  address_components?: AddressComponent[];
  /**
   * A representation of the place's address in the [adr microformat](http://microformats.org/wiki/adr).
   * @example "<span class="street-address">48 Pirrama Rd</span>, <span class="locality">Pyrmont</span> <span class="region">NSW</span> <span class="postal-code">2009</span>, <span class="country-name">Australia</span>"
   */
  adr_address?: string;
  /** Indicates the operational status of the place, if it is a business. If no data exists, `business_status` is not returned. */
  business_status?: "OPERATIONAL" | "CLOSED_TEMPORARILY" | "CLOSED_PERMANENTLY";
  /** Specifies if the business supports curbside pickup. */
  curbside_pickup?: boolean;
  /** Contains the hours of operation for the next seven days (including today). The time period starts at midnight on the date of the request and ends at 11:59 pm six days later. This field includes the `special_days` subfield of all hours, set for dates that have exceptional hours. */
  current_opening_hours?: PlaceOpeningHours;
  /** Specifies if the business supports delivery. */
  delivery?: boolean;
  /** Specifies if the business supports indoor or outdoor seating options. */
  dine_in?: boolean;
  /** Contains a summary of the place. A summary is comprised of a textual overview, and also includes the language code for these if applicable. Summary text must be presented as-is and can not be modified or altered. */
  editorial_summary?: PlaceEditorialSummary;
  /**
   * A string containing the human-readable address of this place.
   *
   * Often this address is equivalent to the postal address. Note that some countries, such as the United Kingdom, do not allow distribution of true postal addresses due to licensing restrictions.
   *
   * The formatted address is logically composed of one or more address components. For example, the address "111 8th Avenue, New York, NY" consists of the following components: "111" (the street number), "8th Avenue" (the route), "New York" (the city) and "NY" (the US state).
   *
   * Do not parse the formatted address programmatically. Instead you should use the individual address components, which the API response includes in addition to the formatted address field.
   * @example "48 Pirrama Rd, Pyrmont NSW 2009, Australia"
   */
  formatted_address?: string;
  /**
   * Contains the place's phone number in its [local format](http://en.wikipedia.org/wiki/Local_conventions_for_writing_telephone_numbers).
   * @example "(02) 9374 4000"
   */
  formatted_phone_number?: string;
  /** Contains the location and viewport for the location. */
  geometry?: Geometry;
  /**
   * Contains the URL of a suggested icon which may be displayed to the user when indicating this result on a map.
   * @example "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png"
   */
  icon?: string;
  /** Contains the default HEX color code for the place's category. */
  icon_background_color?: string;
  /** Contains the URL of a recommended icon, minus the `.svg` or `.png` file type extension. */
  icon_mask_base_uri?: string;
  /**
   * Contains the place's phone number in international format. International format includes the country code, and is prefixed with the plus, +, sign. For example, the international_phone_number for Google's Sydney, Australia office is `+61 2 9374 4000`.
   * @example "+61 2 9374 4000"
   */
  international_phone_number?: string;
  /**
   * Contains the human-readable name for the returned result. For `establishment` results, this is usually the canonicalized business name.
   * @example "Google Workplace 6"
   */
  name?: string;
  /** Contains the regular hours of operation. */
  opening_hours?: PlaceOpeningHours;
  /**
   * Use `business_status` to get the operational status of businesses.
   * @deprecated
   */
  permanently_closed?: boolean;
  /** An array of photo objects, each containing a reference to an image. A request may return up to ten photos. More information about place photos and how you can use the images in your application can be found in the [Place Photos](https://developers.google.com/maps/documentation/places/web-service/photos) documentation. */
  photos?: PlacePhoto[];
  /**
   * A textual identifier that uniquely identifies a place. To retrieve information about the place, pass this identifier in the `place_id` field of a Places API request. For more information about place IDs, see the [place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id).
   * @example "ChIJN1t_tDeuEmsRUsoyG83frY4"
   */
  place_id?: string;
  /** An encoded location reference, derived from latitude and longitude coordinates, that represents an area: 1/8000th of a degree by 1/8000th of a degree (about 14m x 14m at the equator) or smaller. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named). See [Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) and [plus codes](https://plus.codes/). */
  plus_code?: PlusCode;
  /**
   * The price level of the place, on a scale of 0 to 4. The exact amount indicated by a specific value will vary from region to region. Price levels are interpreted as follows:
   * - 0 Free
   * - 1 Inexpensive
   * - 2 Moderate
   * - 3 Expensive
   * - 4 Very Expensive
   */
  price_level?: number;
  /**
   * Contains the place's rating, from 1.0 to 5.0, based on aggregated user reviews.
   * @example 4.1
   */
  rating?: number;
  /** @deprecated */
  reference?: string;
  /** Specifies if the place supports reservations. */
  reservable?: boolean;
  /**
   * A JSON array of up to five reviews. By default, the reviews are sorted in order of relevance. Use the `reviews_sort` request parameter to control sorting.
   *
   * - For `most_relevant` (default), reviews are sorted by relevance; the service will bias the results to return reviews originally written in the preferred language.
   * - For `newest`, reviews are sorted in chronological order; the preferred language does not affect the sort order.
   * Google recommends indicating to users whether results are ordered by `most_relevant` or `newest`.
   */
  reviews?: PlaceReview[];
  /** Specifies if the place serves beer. */
  serves_beer?: boolean;
  /** Specifies if the place serves breakfast. */
  serves_breakfast?: boolean;
  /** Specifies if the place serves brunch. */
  serves_brunch?: boolean;
  /** Specifies if the place serves dinner. */
  serves_dinner?: boolean;
  /** Specifies if the place serves lunch. */
  serves_lunch?: boolean;
  /** Specifies if the place serves vegetarian food. */
  serves_vegetarian_food?: boolean;
  /** Specifies if the place serves wine. */
  serves_wine?: boolean;
  /** @deprecated */
  scope?: string;
  /** Contains an array of entries for the next seven days including information about secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the `type` subfield, which draws from a predefined list of opening hours types (such as `DRIVE_THROUGH`, `PICKUP`, or `TAKEOUT`) based on the types of the place. This field includes the `special_days` subfield of all hours, set for dates that have exceptional hours. */
  secondary_opening_hours?: PlaceOpeningHours;
  /** Specifies if the business supports takeout. */
  takeout?: boolean;
  /**
   * Contains an array of feature types describing the given result. See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types#table2).
   * @example ["point_of_interest","establishment"]
   */
  types?: string[];
  /**
   * Contains the URL of the official Google page for this place. This will be the Google-owned page that contains the best available information about the place. Applications must link to or embed this page on any screen that shows detailed results about the place to the user.
   * @example "https://maps.google.com/?cid=10281119596374313554"
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
   *
   * This content is meant to be read as-is. Do not programmatically parse the formatted address.
   * @example "48 Pirrama Road, Pyrmont"
   */
  vicinity?: string;
  /**
   * The authoritative website for this place, such as a business' homepage.
   * @example "http://google.com"
   */
  website?: string;
  /** Specifies if the place has an entrance that is wheelchair-accessible. */
  wheelchair_accessible_entrance?: boolean;
}

/** PlaceAutocompleteMatchedSubstring */
export interface PlaceAutocompleteMatchedSubstring {
  /** Length of the matched substring in the prediction result text. */
  length: number;
  /** Start location of the matched substring in the prediction result text. */
  offset: number;
}

/** PlaceAutocompletePrediction */
export interface PlaceAutocompletePrediction {
  /**
   * Contains the human-readable name for the returned result. For `establishment` results, this is usually the business name. This content is meant to be read as-is. Do not programmatically parse the formatted address.
   * @example "Paris, France"
   */
  description: string;
  /** A list of substrings that describe the location of the entered term in the prediction result text, so that the term can be highlighted if desired. */
  matched_substrings: PlaceAutocompleteMatchedSubstring[];
  /** A textual identifier that uniquely identifies a place. To retrieve information about the place, pass this identifier in the placeId field of a Places API request. For more information about place IDs, see the [Place IDs](https://developers.google.com/maps/documentation/places/web-service/place-id) overview. */
  place_id?: string;
  /**
   * See place_id.
   * @deprecated
   */
  reference?: string;
  /** Provides pre-formatted text that can be shown in your autocomplete results. This content is meant to be read as-is. Do not programmatically parse the formatted address. */
  structured_formatting: PlaceAutocompleteStructuredFormat;
  /** Contains an array of terms identifying each section of the returned description (a section of the description is generally terminated with a comma). Each entry in the array has a `value` field, containing the text of the term, and an `offset` field, defining the start position of this term in the description, measured in Unicode characters. */
  terms: PlaceAutocompleteTerm[];
  /** Contains an array of types that apply to this place. For example: `[ "political", "locality" ]` or `[ "establishment", "geocode", "beauty_salon" ]`. The array can contain multiple values. Learn more about [Place types](https://developers.google.com/maps/documentation/places/web-service/supported_types). */
  types?: string[];
  /** The straight-line distance in meters from the origin. This field is only returned for requests made with an `origin`. */
  distance_meters?: number;
}

/** PlaceAutocompleteStructuredFormat */
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

/** PlaceAutocompleteTerm */
export interface PlaceAutocompleteTerm {
  /** The text of the term. */
  value: string;
  /** Defines the start position of this term in the description, measured in Unicode characters */
  offset: number;
}

/**
 * PlaceEditorialSummary
 * Contains a summary of the place. A summary is comprised of a textual overview, and also includes the language code for these if applicable. Summary text must be presented as-is and can not be modified or altered.
 */
export interface PlaceEditorialSummary {
  /** A medium-length textual summary of the place. */
  overview?: string;
  /** The language of the previous fields. May not always be present. */
  language?: string;
}

/**
 * PlacePhoto
 * A photo of a Place. The photo can be accesed via the [Place Photo](https://developers.google.com/places/web-service/photos) API using an url in the following pattern:
 *
 * ```
 * https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=photo_reference&key=YOUR_API_KEY
 * ```
 *
 * See [Place Photos](https://developers.google.com/places/web-service/photos) for more information.
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
   * @example "Aap_uEDY1GahdnFHaMArH3g6W4bELCIn9yaZ0XGqh1-G2lX3OwzTExM6g-_0U8qedk5o3R1SmtMK-NMt34dDMcCNnc4DWREX0vQEH9DjvfF70ZPHo3IFbT-TU_oCNCCB3kxe36EsdXeoKEtRH74NueUIeslebZuVeteDpKvpwVqxRpZFVSjS"
   */
  photo_reference: string;
}

/**
 * PlaceOpeningHours
 * An object describing the opening hours of a place.
 */
export interface PlaceOpeningHours {
  /** A boolean value indicating if the place is open at the current time. */
  open_now?: boolean;
  /** An array of opening periods covering seven days, starting from Sunday, in chronological order. */
  periods?: PlaceOpeningHoursPeriod[];
  /** An array of up to seven entries corresponding to the next seven days. */
  special_days?: PlaceSpecialDay[];
  /** A type string used to identify the type of secondary hours (for example, `DRIVE_THROUGH`, `HAPPY_HOUR`, `DELIVERY`, `TAKEOUT`, `KITCHEN`, `BREAKFAST`, `LUNCH`, `DINNER`, `BRUNCH`, `PICKUP`, `SENIOR_HOURS`). Set for `secondary_opening_hours` only. */
  type?: string;
  /**
   * An array of strings describing in human-readable text the hours of the place.
   * @example ["Monday: 9:00 AM – 5:00 PM","Tuesday: 9:00 AM – 5:00 PM","Wednesday: 9:00 AM – 5:00 PM","Thursday: 9:00 AM – 5:00 PM","Friday: 9:00 AM – 5:00 PM","Saturday: Closed","Sunday: Closed"]
   */
  weekday_text?: string[];
}

/** PlaceOpeningHoursPeriod */
export interface PlaceOpeningHoursPeriod {
  /** Contains a pair of day and time objects describing when the place opens. */
  open: PlaceOpeningHoursPeriodDetail;
  /** May contain a pair of day and time objects describing when the place closes. If a place is always open, the close section will be missing from the response. Clients can rely on always-open being represented as an open period containing day with value `0` and time with value `0000`, and no `close`. */
  close?: PlaceOpeningHoursPeriodDetail;
}

/** PlaceOpeningHoursPeriodDetail */
export interface PlaceOpeningHoursPeriodDetail {
  /** A date expressed in RFC3339 format in the local timezone for the place, for example 2010-12-31. */
  date?: string;
  /** A number from 0–6, corresponding to the days of the week, starting on Sunday. For example, 2 means Tuesday. */
  day: number;
  /**
   * May contain a time of day in 24-hour hhmm format. Values are in the range 0000–2359. The time will be reported in the place’s time zone.
   * @example 1700
   */
  time: string;
  /** True if a given period was truncated due to a seven-day cutoff, where the period starts before midnight on the date of the request and/or ends at or after  midnight on the last day. This property indicates that the period for open or close can extend past this seven-day cutoff. */
  truncated?: boolean;
}

/**
 * PlaceReview
 * A review of the place submitted by a user.
 */
export interface PlaceReview {
  /**
   * The name of the user who submitted the review. Anonymous reviews are attributed to "A Google user".
   * @example "A Google User"
   */
  author_name: string;
  /** The URL to the user's Google Maps Local Guides profile, if available. */
  author_url?: string;
  /** The URL to the user's profile photo, if available. */
  profile_photo_url?: string;
  /**
   * An IETF language code indicating the language of the returned review.
   * This field contains the main language tag only, and not the secondary tag indicating country or region. For example, all the English reviews are tagged as 'en', and not 'en-AU' or 'en-UK' and so on.
   * This field is empty if there is only a rating with no review text.
   */
  language?: string;
  /**
   * An IETF language code indicating the original language of the review. If the review has been translated, then `original_language` != `language`.
   * This field contains the main language tag only, and not the secondary tag indicating country or region. For example, all the English reviews are tagged as 'en', and not 'en-AU' or 'en-UK' and so on.
   * This field is empty if there is only a rating with no review text.
   */
  original_language?: string;
  /** The user's overall rating for this place. This is a whole number, ranging from 1 to 5. */
  rating: number;
  /** The time that the review was submitted in text, relative to the current time. */
  relative_time_description: string;
  /** The user's review. When reviewing a location with Google Places, text reviews are considered optional. Therefore, this field may be empty. Note that this field may include simple HTML markup. For example, the entity reference `&amp;` may represent an ampersand character. */
  text?: string;
  /** The time that the review was submitted, measured in the number of seconds since since midnight, January 1, 1970 UTC. */
  time: number;
  /**
   * A boolean value indicating if the review was translated from the original language it was written in.
   * If a review has been translated, corresponding to a value of true, Google recommends that you indicate this to your users. For example, you can add the following string, “Translated by Google”, to the review.
   */
  translated?: boolean;
}

/** PlaceSpecialDay */
export interface PlaceSpecialDay {
  /** A date expressed in RFC3339 format in the local timezone for the place, for example 2010-12-31. */
  date?: string;
  /** True if there are exceptional hours for this day. If `true`, this means that there is at least one exception for this day. Exceptions cause different values to occur in the subfields of `current_opening_hours` and `secondary_opening_hours` such as `periods`, `weekday_text`, `open_now`. The exceptions apply to the hours, and the hours are used to generate the other fields. */
  exceptional_hours?: boolean;
}

/** PlacesAutocompleteResponse */
export interface PlacesAutocompleteResponse {
  /** Contains an array of predictions. */
  predictions: PlaceAutocompletePrediction[];
  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesAutocompleteStatus;
  /** When the service returns a status code other than `OK<`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change. */
  error_message?: string;
  /** When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change. */
  info_messages?: string[];
}

/**
 * PlacesAutocompleteStatus
 * Status codes returned by service.
 * - `OK` indicating the API request was successful.
 * - `ZERO_RESULTS` indicating that the search was successful but returned no results. This may occur if the search was passed a bounds in a remote location.
 * - `INVALID_REQUEST` indicating the API request was malformed, generally due to the missing `input` parameter.
 * - `OVER_QUERY_LIMIT` indicating any of the following:
 *   - You have exceeded the QPS limits.
 *   - Billing has not been enabled on your account.
 *   - The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
 *   - The provided method of payment is no longer valid (for example, a credit card has expired).
 *   See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) for more information about how to resolve this error.
 * - `REQUEST_DENIED` indicating that your request was denied, generally because:
 *   - The request is missing an API key.
 *   - The `key` parameter is invalid.
 * - `UNKNOWN_ERROR` indicating an unknown error.
 */
export enum PlacesAutocompleteStatus {
  OK = "OK",
  ZERO_RESULTS = "ZERO_RESULTS",
  INVALID_REQUEST = "INVALID_REQUEST",
  OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
  REQUEST_DENIED = "REQUEST_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

/** PlacesDetailsResponse */
export interface PlacesDetailsResponse {
  /** May contain a set of attributions about this listing which must be displayed to the user (some listings may not have attribution). */
  html_attributions: string[];
  /** Contains the detailed information about the place requested. */
  result: Place;
  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesDetailsStatus;
  /** When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change. */
  info_messages?: string[];
}

/**
 * PlacesDetailsStatus
 * Status codes returned by service.
 * - `OK` indicating the API request was successful.
 * - `ZERO_RESULTS` indicating that the referenced location, `place_id`, was valid but no longer refers to a valid result. This may occur if the establishment is no longer in business.
 * - `NOT_FOUND` indicating that that the referenced location, `place_id`, was not found in the Places database.
 * - `INVALID_REQUEST` indicating the API request was malformed.
 * - `OVER_QUERY_LIMIT` indicating any of the following:
 *   - You have exceeded the QPS limits.
 *   - Billing has not been enabled on your account.
 *   - The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
 *   - The provided method of payment is no longer valid (for example, a credit card has expired).
 *   See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) for more information about how to resolve this error.
 * - `REQUEST_DENIED` indicating that your request was denied, generally because:
 *   - The request is missing an API key.
 *   - The `key` parameter is invalid.
 * - `UNKNOWN_ERROR` indicating an unknown error.
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

/** PlacesFindPlaceFromTextResponse */
export interface PlacesFindPlaceFromTextResponse {
  /**
   * Contains an array of Place candidates.
   * <div class="caution">Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a place_id, then use that Place ID to make a Place Details request.</div>
   */
  candidates: Place[];
  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesSearchStatus;
  /**
   * When the service returns a status code other than `OK<`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change.
   * @example "Error while parsing 'fields' parameter: Unsupported field name 'invalid'. "
   */
  error_message?: string;
  /** When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change. */
  info_messages?: string[];
}

/** PlacesNearbySearchResponse */
export interface PlacesNearbySearchResponse {
  /** May contain a set of attributions about this listing which must be displayed to the user (some listings may not have attribution). */
  html_attributions: string[];
  /**
   * Contains an array of places.
   * <div class="caution">Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a `place_id`, then use that Place ID to make a Place Details request.</div>
   */
  results: Place[];
  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesSearchStatus;
  /** When the service returns a status code other than `OK<`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change. */
  error_message?: string;
  /** When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change. */
  info_messages?: string[];
  /** Contains a token that can be used to return up to 20 additional results. A next_page_token will not be returned if there are no additional results to display. The maximum number of results that can be returned is 60. There is a short delay between when a next_page_token is issued, and when it will become valid. */
  next_page_token?: string;
}

/** PlacesQueryAutocompleteResponse */
export interface PlacesQueryAutocompleteResponse {
  /** Contains an array of predictions. */
  predictions: PlaceAutocompletePrediction[];
  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesAutocompleteStatus;
  /** When the service returns a status code other than `OK`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change. */
  error_message?: string;
  /** When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change. */
  info_messages?: string[];
}

/**
 * PlacesSearchStatus
 * Status codes returned by service.
 * - `OK` indicating the API request was successful.
 * - `ZERO_RESULTS` indicating that the search was successful but returned no results. This may occur if the search was passed a `latlng` in a remote location.
 * - `INVALID_REQUEST` indicating the API request was malformed, generally due to missing required query parameter (`location` or `radius`).
 * - `OVER_QUERY_LIMIT` indicating any of the following:
 *   - You have exceeded the QPS limits.
 *   - Billing has not been enabled on your account.
 *   - The monthly $200 credit, or a self-imposed usage cap, has been exceeded.
 *   - The provided method of payment is no longer valid (for example, a credit card has expired).
 *   See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) for more information about how to resolve this error.
 * - `REQUEST_DENIED` indicating that your request was denied, generally because:
 *   - The request is missing an API key.
 *   - The `key` parameter is invalid.
 * - `UNKNOWN_ERROR` indicating an unknown error.
 */
export enum PlacesSearchStatus {
  OK = "OK",
  ZERO_RESULTS = "ZERO_RESULTS",
  INVALID_REQUEST = "INVALID_REQUEST",
  OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
  REQUEST_DENIED = "REQUEST_DENIED",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

/** PlacesTextSearchResponse */
export interface PlacesTextSearchResponse {
  /** May contain a set of attributions about this listing which must be displayed to the user (some listings may not have attribution). */
  html_attributions: string[];
  /**
   * Contains an array of places.
   * <div class="caution">Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a `place_id`, then use that Place ID to make a Place Details request.</div>
   */
  results: Place[];
  /** Contains the status of the request, and may contain debugging information to help you track down why the request failed. */
  status: PlacesSearchStatus;
  /** When the service returns a status code other than `OK<`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change. */
  error_message?: string;
  /** When the service returns additional information about the request specification, there may be an additional `info_messages` field within the response object. This field is only returned for successful requests. It may not always be returned, and its content is subject to change. */
  info_messages?: string[];
  /** Contains a token that can be used to return up to 20 additional results. A next_page_token will not be returned if there are no additional results to display. The maximum number of results that can be returned is 60. There is a short delay between when a next_page_token is issued, and when it will become valid. */
  next_page_token?: string;
}

/**
 * StreetViewStatus
 * The `status` field within the Streetview Metadata response object contains the status of the request. The `status` field may contain the following values:
 *
 * - `OK` indicates that no errors occurred; a panorama is found and metadata is returned.
 * - `INVALID_REQUEST` indicates that the request was malformed.
 * - `NOT_FOUND` indicates that the address string provided in the `location` parameter could not be found. This may occur if a non-existent address is given.
 * - `ZERO_RESULTS` indicates that no panorama could be found near the provided location. This may occur if a non-existent or invalid `pano` id is given.
 * - `OVER_QUERY_LIMIT` indicates the requestor has exceeded quota.
 * - `REQUEST_DENIED` indicates that your request was denied. This may occur if you did not [authorize](https://developers.google.com/maps/documentation/streetview/get-api-key) your request, or if the Street View Static API is not activated in the Google Cloud Console project containing your API key.
 * - `UNKNOWN_ERROR` indicates that the request could not be processed due to a server error. This is often a temporary status. The request may succeed if you try again
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

/** StreetViewResponse */
export interface StreetViewResponse {
  /** An array of snapped points. */
  copyright?: string;
  /** A string indicating year and month that the panorama was captured. */
  date?: string;
  /** The location of the panorama. */
  location?: LatLngLiteral;
  /**
   * A specific panorama ID. These are generally stable, though panoramas may change ID over time as imagery is refreshed.
   * @example "tu510ie_z4ptBZYo2BGEJg"
   */
  pano_id?: string;
  /** The status of the request. */
  status: StreetViewStatus;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

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
  Text = "text/plain",
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

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

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
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
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
 * @version 1.22.0
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
        /** Specifies the desired time of arrival for transit directions, in seconds since midnight, January 1, 1970 UTC. You can specify either `departure_time` or `arrival_time`, but not both. Note that `arrival_time` must be specified as an integer. */
        arrival_time?: number;
        /**
         * Specifies the desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC. If a `departure_time` later than 9999-12-31T23:59:59.999999999Z is specified, the API will fall back the `departure_time` to 9999-12-31T23:59:59.999999999Z. Alternatively, you can specify a value of now, which sets the departure time to the current time (correct to the nearest second). The departure time may be specified in two cases:
         * * For requests where the travel mode is transit: You can optionally specify one of `departure_time` or `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time).
         * * For requests where the travel mode is driving: You can specify the `departure_time` to receive a route and trip duration (response field: duration_in_traffic) that take traffic conditions into account. The `departure_time` must be set to the current time or some time in the future. It cannot be in the past.
         *
         * <div class="note">Note: If departure time is not specified, choice of route and duration are based on road network and average time-independent traffic conditions. Results for a given request may vary over time due to changes in the road network, updated average traffic conditions, and the distributed nature of the service. Results may also vary between nearly-equivalent routes at any time or frequency.</div>
         * <div class="note">Note: Distance Matrix requests specifying `departure_time` when `mode=driving` are limited to a maximum of 100 elements per request. The number of origins times the number of destinations defines the number of elements.</div>
         */
        departure_time?: number;
        /** If set to `true`, specifies that the Directions service may provide more than one route alternative in the response. Note that providing route alternatives may increase the response time from the server. This is only available for requests without intermediate waypoints. For more information, see the [guide to waypoints](https://developers.google.com/maps/documentation/directions/get-directions#Waypoints). */
        alternatives?: boolean;
        /**
         * Indicates that the calculated route(s) should avoid the indicated features. This parameter supports the following arguments:
         * * `tolls` indicates that the calculated route should avoid toll roads/bridges.
         * * `highways` indicates that the calculated route should avoid highways.
         * * `ferries` indicates that the calculated route should avoid ferries.
         * * `indoor` indicates that the calculated route should avoid indoor steps for walking and transit directions.
         *
         * It's possible to request a route that avoids any combination of tolls, highways and ferries by passing multiple restrictions to the avoid parameter. For example:
         *
         * ```
         * avoid=tolls|highways|ferries.
         * ```
         */
        avoid?: string;
        /**
         * The place ID, address, or textual latitude/longitude value to which you wish to calculate directions. The options for the destination parameter are the same as for the origin parameter.
         * @example "Victoria, BC"
         */
        destination: string;
        /**
         * The place ID, address, or textual latitude/longitude value from which you wish to calculate directions.
         * * Place IDs must be prefixed with `place_id:`. You can retrieve place IDs from the Geocoding API and the Places API (including Place Autocomplete). For an example using place IDs from Place Autocomplete, see [Place Autocomplete and Directions](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-directions). For more about place IDs, see the [Place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id).
         *
         *   ```
         *   origin=place_id:ChIJ3S-JXmauEmsRUcIaWtf4MzE
         *   ```
         *
         * * If you pass an address, the Directions service geocodes the string and converts it to a latitude/longitude coordinate to calculate directions. This coordinate may be different from that returned by the Geocoding API, for example a building entrance rather than its center.
         *
         *   ```
         *   origin=24+Sussex+Drive+Ottawa+ON
         *   ```
         *
         *   Using place IDs is preferred over using addresses or latitude/longitude coordinates. Using coordinates will always result in the point being snapped to the road nearest to those coordinates - which may not be an access point to the property, or even a road that will quickly or safely lead to the destination.
         * * If you pass coordinates, the point will snap to the nearest road. Passing a place ID is preferred. If you do pass coordinates, ensure that no space exists between the latitude and longitude values.
         *
         *   ```
         *   origin=41.43206,-81.38992
         *   ```
         *
         * * Plus codes must be formatted as a global code or a compound code. Format plus codes as shown here (plus signs are url-escaped to `%2B` and spaces are url-escaped to `%20`).
         *
         *   * **Global code** is a 4 character area code and 6 character or longer local code (849VCWC8+R9 is `849VCWC8%2BR9`).
         *   * **Compound code** is a 6 character or longer local code with an explicit location (CWC8+R9 Mountain View, CA, USA is `CWC8%2BR9%20Mountain%20View%20CA%20USA`).
         *
         * <div class="note">Note: For efficiency and accuracy, use place ID's when possible. These ID's are uniquely explicit like a lat/lng value pair and provide geocoding benefits for routing such as access points and traffic variables. Unlike an address, ID's do not require the service to perform a search or an intermediate request for place details; therefore, performance is better.</div>
         */
        origin: string;
        /**
         * Specifies the unit system to use when displaying results.
         *
         * Directions results contain text within distance fields that may be displayed to the user to indicate the distance of a particular "step" of the route. By default, this text uses the unit system of the origin's country or region.
         *
         * For example, a route from "Chicago, IL" to "Toronto, ONT" will display results in miles, while the reverse route will display results in kilometers. You may override this unit system by setting one explicitly within the request's units parameter, passing one of the following values:
         *
         * * `metric` specifies usage of the metric system. Textual distances are returned using kilometers and meters.
         * * `imperial` specifies usage of the Imperial (English) system. Textual distances are returned using miles and feet.
         *
         * <div class="note">Note: this unit system setting only affects the text displayed within distance fields. The distance fields also contain values which are always expressed in meters.</div>
         * @example "metric"
         */
        units?: "imperial" | "metric";
        /**
         * <div class="caution">Caution: Requests using more than 10 waypoints (between 11 and 25), or waypoint optimization, are billed at a higher rate. <a href="https://developers.google.com/maps/billing-and-pricing/pricing#directions-advanced">Learn more about billing</a> for Google Maps Platform products.</div>
         *
         * Specifies an array of intermediate locations to include along the route between the origin and destination points as pass through or stopover locations. Waypoints alter a route by directing it through the specified location(s). The API supports waypoints for these travel modes: driving, walking and bicycling; not transit.   You can supply one or more locations separated by the pipe character (`|` or `%7C`), in the form of a place ID, an address, or latitude/longitude coordinates. By default, the Directions service calculates a route using the waypoints in the order they are given. The precedence for parsing the value of the waypoint is place ID, latitude/longitude coordinates, then address.
         * * If you pass a place ID, you must prefix it with `place_id:`. You can retrieve place IDs from the Geocoding API and the Places API (including Place Autocomplete). For an example using place IDs from Place Autocomplete, see [Place Autocomplete and Directions](/maps/documentation/javascript/examples/places-autocomplete-directions). For more about place IDs, see the [Place ID overview](/maps/documentation/places/web-service/place-id).
         *   <div class="note">For efficiency and accuracy, use place ID's when possible. These ID's are uniquely explicit like a lat/lng value pair and provide geocoding benefits for routing such as access points and traffic variables. Unlike an address, ID's do not require the service to perform a search or an intermediate request for place details; therefore, performance is better.</div>
         * * If you pass latitude/longitude coordinates, the values go directly to the front-end server to calculate directions without geocoding. The points are snapped to roads and might not provide the accuracy your app needs. Use coordinates when you are confident the values truly specify the points your app needs for routing without regard to possible access points or additional geocoding details. Ensure that a comma (`%2C`) and not a space (`%20`) separates the latitude and longitude values.
         * * If you pass an address, the Directions service will geocode the string and convert it into latitude/longitude coordinates to calculate directions. If the address value is ambiguous, the value might evoke a search to disambiguate from similar addresses. For example, "1st Street" could be a complete value or a partial value for "1st street NE" or "1st St SE". This result may be different from that returned by the Geocoding API. You can avoid possible misinterpretations using place IDs.
         * * Alternatively, you can supply an encoded set of points using the [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). You will find an encoded set is useful for a large number of waypoints, because the URL is significantly shorter. All web services have a URL limit of 8192 characters.
         *   * Encoded polylines must be prefixed with `enc:` and followed by a colon (`:`). For example: `waypoints=enc:gfo}EtohhU:`.
         *   * You can also include multiple encoded polylines, separated by the pipe character (`|`). For example, `waypoints=via:enc:wc~oAwquwMdlTxiKtqLyiK:|enc:c~vnAamswMvlTor@tjGi}L:| via:enc:udymA{~bxM:`
         *
         * ##### Influence routes with stopover and pass through points
         *
         * For each waypoint in the request, the directions response appends an entry to the `legs` array to provide the details for stopovers on that leg of the journey.
         *
         * If you'd like to influence the route using waypoints without adding a stopover, add the prefix `via:` to the waypoint. Waypoints prefixed with `via:` will not add an entry to the `legs` array, but will route the journey through the waypoint.
         *
         * The following URL modifies the previous request such that the journey is routed through Lexington without stopping:
         *
         * ```
         * https://maps.googleapis.com/maps/api/directions/json?
         * origin=Boston,MA&destination=Concord,MA
         * &waypoints=Charlestown,MA|via:Lexington,MA
         * ```
         *
         * The `via:` prefix is most effective when creating routes in response to the user dragging the waypoints on the map. Doing so allows the user to see how the final route may look in real-time and helps ensure that waypoints are placed in locations that are accessible to the Directions API.
         *
         * <div class="caution">Caution: Using the `via:` prefix to avoid stopovers results in directions that are strict in their interpretation of the waypoint. This interpretation may result in severe detours on the route or `ZERO_RESULTS` in the response status code if the Directions API is unable to create directions through that point.</div>
         *
         *
         * ##### Optimize your waypoints
         *
         * By default, the Directions service calculates a route through the provided waypoints in their given order. Optionally, you may pass `optimize:true` as the first argument within the waypoints parameter to allow the Directions service to optimize the provided route by rearranging the waypoints in a more efficient order. (This optimization is an application of the traveling salesperson problem.) Travel time is the primary factor which is optimized, but other factors such as distance, number of turns and many more may be taken into account when deciding which route is the most efficient. All waypoints must be stopovers for the Directions service to optimize their route.
         *
         * If you instruct the Directions service to optimize the order of its waypoints, their order will be returned in the `waypoint_order` field within the routes object. The `waypoint_order` field returns values which are zero-based.
         *
         * The following example calculates a road journey from Adelaide, South Australia to each of South Australia's main wine regions using route optimization.
         *
         * ```
         * https://maps.googleapis.com/maps/api/directions/json?
         * origin=Adelaide,SA&destination=Adelaide,SA
         * &waypoints=optimize:true|Barossa+Valley,SA|Clare,SA|Connawarra,SA|McLaren+Vale,SA
         * ```
         *
         * Inspection of the calculated route will indicate that calculation uses waypoints in the following waypoint order:
         *
         * ```
         * "waypoint_order": [ 3, 2, 0, 1 ]
         * ```
         *
         * <div class="caution">Caution: Requests using waypoint optimization are billed at a higher rate. <a href="https://developers.google.com/maps/billing-and-pricing/pricing#directions-advanced">Learn more about how Google Maps Platform products are billed.</a></div>
         */
        waypoints?: string;
        /**
         * The language in which to return results.
         *
         * * See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
         * * If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
         * * The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
         * * If a name is not available in the preferred language, the API uses the closest match.
         * * The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian.
         * @default "en"
         */
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
        /**
         * For the calculation of distances and directions, you may specify the transportation mode to use. By default, `DRIVING` mode is used. By default, directions are calculated as driving directions. The following travel modes are supported:
         *
         * * `driving` (default) indicates standard driving directions or distance using the road network.
         * * `walking` requests walking directions or distance via pedestrian paths & sidewalks (where available).
         * * `bicycling` requests bicycling directions or distance via bicycle paths & preferred streets (where available).
         * * `transit` requests directions or distance via public transit routes (where available). If you set the mode to transit, you can optionally specify either a `departure_time` or an `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time). You can also optionally include a `transit_mode` and/or a `transit_routing_preference`.
         *
         * <div class="note">Note: Both walking and bicycling directions may sometimes not include clear pedestrian or bicycling paths, so these directions will return warnings in the returned result which you must display to the user.</div>
         */
        mode?: "driving" | "bicycling" | "transit" | "walking";
        /**
         * The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").
         * @default "en"
         */
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
        /**
         * Specifies the assumptions to use when calculating time in traffic. This setting affects the value returned in the duration_in_traffic field in the response, which contains the predicted time in traffic based on historical averages. The `traffic_model` parameter may only be specified for driving directions where the request includes a `departure_time`. The available values for this parameter are:
         * * `best_guess` (default) indicates that the returned duration_in_traffic should be the best estimate of travel time given what is known about both historical traffic conditions and live traffic. Live traffic becomes more important the closer the `departure_time` is to now.
         * * `pessimistic` indicates that the returned duration_in_traffic should be longer than the actual travel time on most days, though occasional days with particularly bad traffic conditions may exceed this value.
         * * `optimistic` indicates that the returned duration_in_traffic should be shorter than the actual travel time on most days, though occasional days with particularly good traffic conditions may be faster than this value.
         * The default value of `best_guess` will give the most useful predictions for the vast majority of use cases. It is possible the `best_guess` travel time prediction may be shorter than `optimistic`, or alternatively, longer than `pessimistic`, due to the way the `best_guess` prediction model integrates live traffic information.
         * @default "best_guess"
         * @example "pessimistic"
         */
        traffic_model?: "best_guess" | "pessimistic" | "optimistic";
        /**
         * Specifies one or more preferred modes of transit. This parameter may only be specified for transit directions. The parameter supports the following arguments:
         * * `bus` indicates that the calculated route should prefer travel by bus.
         * * `subway` indicates that the calculated route should prefer travel by subway.
         * * `train` indicates that the calculated route should prefer travel by train.
         * * `tram` indicates that the calculated route should prefer travel by tram and light rail.
         * * `rail` indicates that the calculated route should prefer travel by train, tram, light rail, and subway. This is equivalent to `transit_mode=train|tram|subway`.
         * @example "train|tram|subway"
         */
        transit_mode?: string;
        /**
         * Specifies preferences for transit routes. Using this parameter, you can bias the options returned, rather than accepting the default best route chosen by the API. This parameter may only be specified for transit directions. The parameter supports the following arguments:
         * * `less_walking` indicates that the calculated route should prefer limited amounts of walking.
         * * `fewer_transfers` indicates that the calculated route should prefer a limited number of transfers.
         * @example "less_walking"
         */
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
      query?: {
        /**
         * Positional requests are indicated through use of the locations parameter, indicating elevation requests for the specific locations passed as latitude/longitude values.
         *
         * The locations parameter may take the following arguments:
         *
         * - A single coordinate: `locations=40.714728,-73.998672`
         * - An array of coordinates separated using the pipe ('|') character:
         *   ```
         *   locations=40.714728,-73.998672|-34.397,150.644
         *   ```
         * - A set of encoded coordinates using the [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm):
         *   ```
         *   locations=enc:gfo}EtohhU
         *   ```
         *
         * Latitude and longitude coordinate strings are defined using numerals within a comma-separated text string. For example, "40.714728,-73.998672" is a valid locations value. Latitude and longitude values must correspond to a valid location on the face of the earth. Latitudes can take any value between -90 and 90 while longitude values can take any value between -180 and 180. If you specify an invalid latitude or longitude value, your request will be rejected as a bad request.
         *
         * You may pass any number of multiple coordinates within an array or encoded polyline, while still constructing a valid URL. Note that when passing multiple coordinates, the accuracy of any returned data may be of lower resolution than when requesting data for a single coordinate.
         * @example ["35,-100","40,-110"]
         */
        locations?: LatLngArrayString;
        /**
         * An array of comma separated `latitude,longitude` strings.
         * @example ["35,-110","33,-110","31,-110"]
         */
        path?: LatLngArrayString;
        /**
         * Required if path parameter is set.
         * @example 10
         */
        samples?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * When the service returns a status code other than `OK<`, there may be an additional `error_message` field within the response object. This field contains more detailed information about thereasons behind the given status code. This field is not always returned, and its content is subject to change.
           * @example "Invalid request. Invalid 'locations' parameter."
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
           */
          status: ElevationStatus;
          results: {
            elevation?: number;
            resolution?: number;
            /** An object describing a specific location with Latitude and Longitude in decimal degrees. */
            location?: LatLngLiteral;
          }[];
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
        /**
         * The street address or plus code that you want to geocode. Specify addresses in accordance with the format used by the national postal service of the country concerned. Additional address elements such as business names and unit, suite or floor numbers should be avoided. Street address elements should be delimited by spaces (shown here as url-escaped to `%20`):
         *
         * ```
         * address=24%20Sussex%20Drive%20Ottawa%20ON
         * ```
         *
         * Format plus codes as shown here (plus signs are url-escaped to `%2B` and spaces are url-escaped to `%20`):
         * - global code is a 4 character area code and 6 character or longer local code (`849VCWC8+R9` is `849VCWC8%2BR9`).
         * - compound code is a 6 character or longer local code with an explicit location (`CWC8+R9 Mountain View, CA, USA` is `CWC8%2BR9%20Mountain%20View%20CA%20USA`).
         *
         * <div class="note">Note: At least one of `address` or `components` is required.</div>
         * @example "1600 Amphitheatre+Parkway, Mountain View, CA"
         */
        address?: string;
        /**
         * The bounding box of the viewport within which to bias geocode results more prominently. This parameter will only influence, not fully restrict, results from the geocoder.
         * @example ["35,-100","40,-110"]
         */
        bounds?: LatLngArrayString;
        /**
         * A components filter with elements separated by a pipe (|). The components filter is also accepted as an optional parameter if an address is provided. Each element in the components filter consists of a `component:value` pair, and fully restricts the results from the geocoder.
         *
         * The components that can be filtered include:
         *
         * * `postal_code` matches `postal_code` and `postal_code_prefix`.
         * * `country` matches a country name or a two letter ISO 3166-1 country code. The API follows the ISO standard for defining countries, and the filtering works best when using the corresponding ISO code of the country.
         *   <aside class="note"><strong>Note</strong>: If you receive unexpected results with a country code, verify that you are using a code which includes the countries, dependent territories, and special areas of geographical interest you intend. You can find code information at Wikipedia: List of ISO 3166 country codes or the ISO Online Browsing Platform.</aside>
         *
         * The following components may be used to influence results, but will not be enforced:
         *
         * * `route` matches the long or short name of a route.
         * * `locality` matches against `locality` and `sublocality` types.
         * * `administrative_area` matches all the `administrative_area` levels.
         *
         * Notes about component filtering:
         *
         * * Do not repeat these component filters in requests, or the API will return `INVALID_REQUEST`:
         *   * `country`
         *   * `postal_code`
         *   * `route`
         * * If the request contains repeated component filters, the API evaluates those filters as an AND, not an OR.
         * * Results are consistent with Google Maps, which occasionally yields unexpected `ZERO_RESULTS` responses. Using Place Autocomplete may provide better results in some use cases. To learn more, see [this FAQ](https://developers..google.com/maps/documentation/geocoding/faq#trbl_component_filtering).
         * * For each address component, either specify it in the address parameter or in a components filter, but not both. Specifying the same values in both may result in `ZERO_RESULTS`.
         *
         * <div class="note">Note: At least one of `address` or `components` is required.</div>
         * @example ["street_number:1600","route:Amphitheatre+Parkway","locality:Mountain+View","administrative_area_level_1:CA","country:US"]
         */
        components?: string[];
        /**
         * The street address that you want to geocode, in the format used by the national postal service of the country concerned. Additional address elements such as business names and unit, suite or floor numbers should be avoided.
         * @example "40,-110"
         */
        latlng?: string;
        /**
         * A filter of one or more location types, separated by a pipe (`|`). If the parameter contains multiple location types, the API returns all addresses that match any of the types. A note about processing: The `location_type` parameter does not restrict the search to the specified location type(s). Rather, the `location_type` acts as a post-search filter: the API fetches all results for the specified latlng, then discards those results that do not match the specified location type(s). The following values are supported:
         * * `APPROXIMATE` returns only the addresses that are characterized as approximate.
         * * `GEOMETRIC_CENTER` returns only geometric centers of a location such as a polyline (for example, a street) or polygon (region).
         * * `RANGE_INTERPOLATED` returns only the addresses that reflect an approximation (usually on a road) interpolated between two precise points (such as intersections). An interpolated range generally indicates that rooftop geocodes are unavailable for a street address.
         * * `ROOFTOP` returns only the addresses for which Google has location information accurate down to street address precision.
         */
        location_type?: ("APPROXIMATE" | "GEOMETRIC_CENTER" | "RANGE_INTERPOLATED" | "ROOFTOP")[];
        /**
         * A textual identifier that uniquely identifies a place, returned from a [Place Search](https://developers.google.com/maps/documentation/places/web-service/search).
         * For more information about place IDs, see the [place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id).
         * @example "ChIJN1t_tDeuEmsRUsoyG83frY4"
         */
        place_id?: string;
        /**
         * A filter of one or more address types, separated by a pipe (|). If the parameter contains multiple address types, the API returns all addresses that match any of the types. A note about processing: The `result_type` parameter does not restrict the search to the specified address type(s). Rather, the `result_type` acts as a post-search filter: the API fetches all results for the specified `latlng`, then discards those results that do not match the specified address type(s).The following values are supported:
         * * `administrative_area_level_1` indicates a first-order civil entity below the country level. Within the United States, these administrative levels are states. Not all nations exhibit these administrative levels. In most cases, administrative_area_level_1   * `short` names will closely match ISO 3166-2 subdivisions and other widely circulated lists; however this is not guaranteed as our geocoding results are based on a variety of signals and location data.
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
         * * `plus_code` indicates an encoded location reference, derived from latitude and longitude. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named). See [https://plus.codes/](https://plus.codes/) for details.
         * * `point_of_interest` indicates a named point of interest. Typically, these "POI"s are prominent local entities that don't easily fit in another category, such as "Empire State Building" or "Eiffel Tower".
         * * `political` indicates a political entity. Usually, this type indicates a polygon of some civil administration.
         * * `postal_code` indicates a postal code as used to address postal mail within the country.
         * * `premise` indicates a named location, usually a building or collection of buildings with a common name
         * * `route` indicates a named route (such as "US 101").
         * * `street_address` indicates a precise street address.
         * * `sublocality` indicates a first-order civil entity below a locality. For some locations may receive one of the additional types: `sublocality_level_1` to `sublocality_level_5`. Each sublocality level is a civil entity. Larger numbers indicate a smaller geographic area.
         * * `subpremise` indicates a first-order entity below a named location, usually a singular building within a collection of buildings with a common name
         */
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
        /**
         * The language in which to return results.
         *
         * * See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
         * * If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
         * * The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
         * * If a name is not available in the preferred language, the API uses the closest match.
         * * The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian.
         * @default "en"
         */
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
        /**
         * The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").
         * @default "en"
         */
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
        /**
         * The language in which to return results.
         *
         * * See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
         * * If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
         * * The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
         * * If a name is not available in the preferred language, the API uses the closest match.
         * * The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian.
         * @default "en"
         */
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
        /**
         * A comma-separated latitude,longitude tuple, `location=39.6034810,-119.6822510`, representing the location to look up.
         * @example "39.6034810,-119.6822510"
         */
        location: string;
        /**
         * The desired time as seconds since midnight, January 1, 1970 UTC. The Time Zone API uses the `timestamp` to determine whether or not Daylight Savings should be applied, based on the time zone of the `location`.
         *
         * Note that the API does not take historical time zones into account. That is, if you specify a past timestamp, the API does not take into account the possibility that the location was previously in a different time zone.
         * @example 1331161200
         */
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
        /** Specifies the desired time of arrival for transit directions, in seconds since midnight, January 1, 1970 UTC. You can specify either `departure_time` or `arrival_time`, but not both. Note that `arrival_time` must be specified as an integer. */
        arrival_time?: number;
        /**
         * Specifies the desired time of departure. You can specify the time as an integer in seconds since midnight, January 1, 1970 UTC. If a `departure_time` later than 9999-12-31T23:59:59.999999999Z is specified, the API will fall back the `departure_time` to 9999-12-31T23:59:59.999999999Z. Alternatively, you can specify a value of now, which sets the departure time to the current time (correct to the nearest second). The departure time may be specified in two cases:
         * * For requests where the travel mode is transit: You can optionally specify one of `departure_time` or `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time).
         * * For requests where the travel mode is driving: You can specify the `departure_time` to receive a route and trip duration (response field: duration_in_traffic) that take traffic conditions into account. The `departure_time` must be set to the current time or some time in the future. It cannot be in the past.
         *
         * <div class="note">Note: If departure time is not specified, choice of route and duration are based on road network and average time-independent traffic conditions. Results for a given request may vary over time due to changes in the road network, updated average traffic conditions, and the distributed nature of the service. Results may also vary between nearly-equivalent routes at any time or frequency.</div>
         * <div class="note">Note: Distance Matrix requests specifying `departure_time` when `mode=driving` are limited to a maximum of 100 elements per request. The number of origins times the number of destinations defines the number of elements.</div>
         */
        departure_time?: number;
        /**
         * Distances may be calculated that adhere to certain restrictions. Restrictions are indicated by use of the avoid parameter, and an argument to that parameter indicating the restriction to avoid. The following restrictions are supported:
         *
         * * `tolls` indicates that the calculated route should avoid toll roads/bridges.
         * * `highways` indicates that the calculated route should avoid highways.
         * * `ferries` indicates that the calculated route should avoid ferries.
         * * `indoor` indicates that the calculated route should avoid indoor steps for walking and transit directions.
         *
         * <div class="note">Note: The addition of restrictions does not preclude routes that include the restricted feature; it biases the result to more favorable routes.</div>
         * @example "highways"
         */
        avoid?: string;
        /**
         * One or more locations to use as the finishing point for calculating travel distance and time. The options for the destinations parameter are the same as for the origins parameter.
         * @example ["San Francisco","Victoria BC"]
         */
        destinations: string[];
        /**
         * The starting point for calculating travel distance and time. You can supply one or more locations separated by the pipe character (|), in the form of a place ID, an address, or latitude/longitude coordinates:
         * - **Place ID**: If you supply a place ID, you must prefix it with `place_id:`.
         * - **Address**: If you pass an address, the service geocodes the string and converts it to a latitude/longitude coordinate to calculate distance. This coordinate may be different from that returned by the Geocoding API, for example a building entrance rather than its center.
         *   <div class="note">Note: using place IDs is preferred over using addresses or latitude/longitude coordinates. Using coordinates will always result in the point being snapped to the road nearest to those coordinates - which may not be an access point to the property, or even a road that will quickly or safely lead to the destination. Using the address will provide the distance to the center of the building, as opposed to an entrance to the building.</div>
         * - **Coordinates**: If you pass latitude/longitude coordinates, they they will snap to the nearest road. Passing a place ID is preferred. If you do pass coordinates, ensure that no space exists between the latitude and longitude values.
         * - **Plus codes** must be formatted as a global code or a compound code. Format plus codes as shown here (plus signs are url-escaped to %2B and spaces are url-escaped to %20):
         *   - **global code** is a 4 character area code and 6 character or longer local code (`849VCWC8+R9` is encoded to `849VCWC8%2BR9`).
         *   - **compound code** is a 6 character or longer local code with an explicit location (`CWC8+R9 Mountain View, CA, USA` is encoded to `CWC8%2BR9%20Mountain%20View%20CA%20USA`).
         * - **Encoded Polyline** Alternatively, you can supply an encoded set of coordinates using the [Encoded Polyline Algorithm](https://developers.google.com/maps/documentation/utilities/polylinealgorithm). This is particularly useful if you have a large number of origin points, because the URL is significantly shorter when using an encoded polyline.
         *   - Encoded polylines must be prefixed with `enc:` and followed by a colon `:`. For example: `origins=enc:gfo}EtohhU:`
         *   - You can also include multiple encoded polylines, separated by the pipe character `|`. For example:
         *     ```
         *     origins=enc:wc~oAwquwMdlTxiKtqLyiK:|enc:c~vnAamswMvlTor@tjGi}L:|enc:udymA{~bxM:
         *     ```
         * @example ["Vancouver BC","Seattle"]
         */
        origins: string[];
        /**
         * Specifies the unit system to use when displaying results.
         *
         * <div class="note">Note: this unit system setting only affects the text displayed within distance fields. The distance fields also contain values which are always expressed in meters.</div>
         * @example "metric"
         */
        units?: "imperial" | "metric";
        /**
         * The language in which to return results.
         *
         * * See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
         * * If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
         * * The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
         * * If a name is not available in the preferred language, the API uses the closest match.
         * * The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian.
         * @default "en"
         */
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
        /**
         * For the calculation of distances and directions, you may specify the transportation mode to use. By default, `DRIVING` mode is used. By default, directions are calculated as driving directions. The following travel modes are supported:
         *
         * * `driving` (default) indicates standard driving directions or distance using the road network.
         * * `walking` requests walking directions or distance via pedestrian paths & sidewalks (where available).
         * * `bicycling` requests bicycling directions or distance via bicycle paths & preferred streets (where available).
         * * `transit` requests directions or distance via public transit routes (where available). If you set the mode to transit, you can optionally specify either a `departure_time` or an `arrival_time`. If neither time is specified, the `departure_time` defaults to now (that is, the departure time defaults to the current time). You can also optionally include a `transit_mode` and/or a `transit_routing_preference`.
         *
         * <div class="note">Note: Both walking and bicycling directions may sometimes not include clear pedestrian or bicycling paths, so these directions will return warnings in the returned result which you must display to the user.</div>
         */
        mode?: "driving" | "bicycling" | "transit" | "walking";
        /**
         * The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").
         * @default "en"
         */
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
        /**
         * Specifies the assumptions to use when calculating time in traffic. This setting affects the value returned in the duration_in_traffic field in the response, which contains the predicted time in traffic based on historical averages. The `traffic_model` parameter may only be specified for driving directions where the request includes a `departure_time`. The available values for this parameter are:
         * * `best_guess` (default) indicates that the returned duration_in_traffic should be the best estimate of travel time given what is known about both historical traffic conditions and live traffic. Live traffic becomes more important the closer the `departure_time` is to now.
         * * `pessimistic` indicates that the returned duration_in_traffic should be longer than the actual travel time on most days, though occasional days with particularly bad traffic conditions may exceed this value.
         * * `optimistic` indicates that the returned duration_in_traffic should be shorter than the actual travel time on most days, though occasional days with particularly good traffic conditions may be faster than this value.
         * The default value of `best_guess` will give the most useful predictions for the vast majority of use cases. It is possible the `best_guess` travel time prediction may be shorter than `optimistic`, or alternatively, longer than `pessimistic`, due to the way the `best_guess` prediction model integrates live traffic information.
         * @default "best_guess"
         * @example "pessimistic"
         */
        traffic_model?: "best_guess" | "pessimistic" | "optimistic";
        /**
         * Specifies one or more preferred modes of transit. This parameter may only be specified for transit directions. The parameter supports the following arguments:
         * * `bus` indicates that the calculated route should prefer travel by bus.
         * * `subway` indicates that the calculated route should prefer travel by subway.
         * * `train` indicates that the calculated route should prefer travel by train.
         * * `tram` indicates that the calculated route should prefer travel by tram and light rail.
         * * `rail` indicates that the calculated route should prefer travel by train, tram, light rail, and subway. This is equivalent to `transit_mode=train|tram|subway`.
         * @example "train|tram|subway"
         */
        transit_mode?: string;
        /**
         * Specifies preferences for transit routes. Using this parameter, you can bias the options returned, rather than accepting the default best route chosen by the API. This parameter may only be specified for transit directions. The parameter supports the following arguments:
         * * `less_walking` indicates that the calculated route should prefer limited amounts of walking.
         * * `fewer_transfers` indicates that the calculated route should prefer a limited number of transfers.
         * @example "less_walking"
         */
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
        /**
         * A textual identifier that uniquely identifies a place, returned from a [Place Search](https://developers.google.com/maps/documentation/places/web-service/search).
         * For more information about place IDs, see the [place ID overview](https://developers.google.com/maps/documentation/places/web-service/place-id).
         * @example "ChIJN1t_tDeuEmsRUsoyG83frY4"
         */
        place_id: string;
        /**
         *
         * <div class="caution"> Caution: Place Search requests and Place Details requests do not return the same fields. Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a <code>place_id</code>, then use that Place ID to make a Place Details request. For more information on the fields that are unavailable in a Place Search request, see <a href="https://developers.google.com/maps/documentation/places/web-service/place-data-fields#places-api-fields-support">Places API fields support</a>.</div>
         *
         * Use the fields parameter to specify a comma-separated list of place data types to return. For example: `fields=formatted_address,name,geometry`. Use a forward slash when specifying compound values. For example: `opening_hours/open_now`.
         *
         * Fields are divided into three billing categories: Basic, Contact, and Atmosphere. Basic fields are billed at base rate, and incur no additional charges. Contact and Atmosphere fields are billed at a higher rate. See the [pricing sheet](https://cloud.google.com/maps-platform/pricing/sheet/) for more information. Attributions, `html_attributions`, are always returned with every call, regardless of whether the field has been requested.
         *
         * **Basic**
         *
         * The Basic category includes the following fields: `address_component`, `adr_address`, `business_status`, `formatted_address`, `geometry`, `icon`, `icon_mask_base_uri`, `icon_background_color`, `name`, `permanently_closed` ([deprecated](https://developers.google.com/maps/deprecations)), `photo`, `place_id`, `plus_code`, `type`, `url`, `utc_offset`, `vicinity`, `wheelchair_accessible_entrance`.
         *
         * **Contact**
         *
         * The Contact category includes the following fields: `current_opening_hours`, `formatted_phone_number`, `international_phone_number`, `opening_hours`, `secondary_opening_hours`, `website`
         *
         * **Atmosphere**
         *
         * The Atmosphere category includes the following fields: `curbside_pickup`, `delivery`, `dine_in`, `editorial_summary`, `price_level`, `rating`, `reservable`, `reviews`, `serves_beer`, `serves_breakfast`, `serves_brunch`, `serves_dinner`, `serves_lunch`, `serves_vegetarian_food`, `serves_wine`, `takeout`, `user_ratings_total`.
         * @minItems 1
         */
        fields?: string[];
        /**
         * A random string which identifies an autocomplete [session](https://developers.google.com/maps/documentation/places/web-service/details#session_tokens) for billing purposes.
         *
         * The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details is made. Each session can have multiple queries, followed by one place selection. The API key(s) used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `sessiontoken` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately).
         *
         * We recommend the following guidelines:
         *
         * - Use session tokens for all autocomplete sessions.
         * - Generate a fresh token for each session. Using a version 4 UUID is recommended.
         * - Ensure that the API key(s) used for all Place Autocomplete and Place Details requests within a session belong to the same Cloud Console project.
         * - Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually.
         */
        sessiontoken?: string;
        /**
         * The language in which to return results.
         *
         * * See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
         * * If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
         * * The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
         * * If a name is not available in the preferred language, the API uses the closest match.
         * * The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian.
         * @default "en"
         */
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
        /**
         * The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").
         * @default "en"
         */
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
        /**
         * The sorting method to use when returning reviews. Can be set to `most_relevant` (default) or `newest`.
         *
         * - For `most_relevant` (default), reviews are sorted by relevance; the service will bias the results to return reviews originally written in the preferred language.
         * - For `newest`, reviews are sorted in chronological order; the preferred language does not affect the sort order.
         *
         * Google recommends that you display how the reviews are being sorted to the end user.
         */
        reviews_sort?: string;
        /**
         *
         * Specify `reviews_no_translations=true` to disable translation of reviews; specify `reviews_no_translations=false` to enable translation of reviews. Reviews are returned in their original language.
         *
         * If omitted, or passed with no value, translation of reviews is enabled. If the `language` parameter was specified in the request, use the specified language as the preferred language for translation. If `language` is omitted, the API attempts to use the `Accept-Language` header as the preferred language.
         */
        reviews_no_translations?: boolean;
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
        /**
         *
         * <div class="caution"> Caution: Place Search requests and Place Details requests do not return the same fields. Place Search requests return a subset of the fields that are returned by Place Details requests. If the field you want is not returned by Place Search, you can use Place Search to get a <code>place_id</code>, then use that Place ID to make a Place Details request. For more information on the fields that are unavailable in a Place Search request, see <a href="https://developers.google.com/maps/documentation/places/web-service/place-data-fields#places-api-fields-support">Places API fields support</a>.</div>
         *
         * Use the fields parameter to specify a comma-separated list of place data types to return. For example: `fields=formatted_address,name,geometry`. Use a forward slash when specifying compound values. For example: `opening_hours/open_now`.
         *
         * Fields are divided into three billing categories: Basic, Contact, and Atmosphere. Basic fields are billed at base rate, and incur no additional charges. Contact and Atmosphere fields are billed at a higher rate. See the [pricing sheet](https://cloud.google.com/maps-platform/pricing/sheet/) for more information. Attributions, `html_attributions`, are always returned with every call, regardless of whether the field has been requested.
         *
         * **Basic**
         *
         * The Basic category includes the following fields: `address_component`, `adr_address`, `business_status`, `formatted_address`, `geometry`, `icon`, `icon_mask_base_uri`, `icon_background_color`, `name`, `permanently_closed` ([deprecated](https://developers.google.com/maps/deprecations)), `photo`, `place_id`, `plus_code`, `type`, `url`, `utc_offset`, `vicinity`, `wheelchair_accessible_entrance`.
         *
         * **Contact**
         *
         * The Contact category includes the following fields: `current_opening_hours`, `formatted_phone_number`, `international_phone_number`, `opening_hours`, `secondary_opening_hours`, `website`
         *
         * **Atmosphere**
         *
         * The Atmosphere category includes the following fields: `curbside_pickup`, `delivery`, `dine_in`, `editorial_summary`, `price_level`, `rating`, `reservable`, `reviews`, `serves_beer`, `serves_breakfast`, `serves_brunch`, `serves_dinner`, `serves_lunch`, `serves_vegetarian_food`, `serves_wine`, `takeout`, `user_ratings_total`.
         * @minItems 1
         */
        fields?: string[];
        /**
         * The text string on which to search, for example: "restaurant" or "123 Main Street". This must be a place name, address, or category of establishments. Any other types of input can generate errors
         * and are not guaranteed to return valid results. The Places API will return candidate matches based on this string and order the results based on their perceived relevance.
         * @example "Museum of Contemporary Art Australia"
         */
        input: string;
        /**
         * The type of input. This can be one of either `textquery` or `phonenumber`. Phone numbers must be in international format (prefixed by a plus sign ("+"), followed by the country code, then the phone number itself). See [E.164 ITU recommendation](https://en.wikipedia.org/wiki/E.164) for more information.
         * @example "textquery"
         */
        inputtype: "textquery" | "phonenumber";
        /**
         * Prefer results in a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing the points of a rectangle. If this parameter is not specified, the API uses IP address biasing by default.
         * - IP bias: Instructs the API to use IP address biasing. Pass the string `ipbias` (this option has no additional parameters).
         * - Point: A single lat/lng coordinate. Use the following format: `point:lat,lng`.
         * - Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the following format: `circle:radius@lat,lng`.
         * - Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the south/west and north/east points of a rectangle. Use the following format:`rectangle:south,west|north,east`. Note that east/west values are wrapped to the range -180, 180, and north/south values are clamped to the range -90, 90.
         */
        locationbias?: string;
        /**
         * Restrict results to a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing the points of a rectangle.
         * - Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the following format: `circle:radius@lat,lng`.
         * - Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the south/west and north/east points of a rectangle. Use the following format:`rectangle:south,west|north,east`. Note that east/west values are wrapped to the range -180, 180, and north/south values are clamped to the range -90, 90.
         */
        locationrestriction?: string;
        /**
         * The language in which to return results.
         *
         * * See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
         * * If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
         * * The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
         * * If a name is not available in the preferred language, the API uses the closest match.
         * * The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian.
         * @default "en"
         */
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
        /**
         * The text string on which to search, for example: "restaurant" or "123 Main Street". This must be a place name, address, or category of establishments.
         * Any other types of input can generate errors and are not guaranteed to return valid results. The Google Places service will return candidate matches
         * based on this string and order the results based on their perceived relevance.
         *
         * Explicitly including location information using this parameter may conflict with the location, radius, and rankby parameters, causing unexpected results.
         *
         * If this parameter is omitted, places with a business_status of CLOSED_TEMPORARILY or CLOSED_PERMANENTLY will not be returned.
         */
        keyword?: string;
        /**
         * The point around which to retrieve place information. This must be specified as `latitude,longitude`.
         * @example "40,-110"
         */
        location: string;
        /** Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. */
        maxprice?: "0" | "1" | "2" | "3" | "4";
        /** Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. */
        minprice?: "0" | "1" | "2" | "3" | "4";
        /**
         * Equivalent to `keyword`. Values in this field are combined with values in the `keyword` field and passed as part of the same search string.
         * @deprecated
         */
        name?: string;
        /** Returns only those places that are open for business at the time the query is sent. Places that do not specify opening hours in the Google Places database will not be returned if you include this parameter in your query. */
        opennow?: boolean;
        /** Returns up to 20 results from a previously run search. Setting a `pagetoken` parameter will execute a search with the same parameters used previously — all parameters other than pagetoken will be ignored. */
        pagetoken?: string;
        /**
         * Specifies the order in which results are listed. Possible values are:
         * - `prominence` (default). This option sorts results based on their importance. Ranking will favor prominent places within the set radius over nearby places that match but that are less prominent. Prominence can be affected by a place's ranking in Google's index, global popularity, and other factors. When prominence is specified, the `radius` parameter is required.
         * - `distance`. This option biases search results in ascending order by their distance from the specified location. When `distance` is specified, one or more of `keyword`, `name`, or `type` is required and `radius` is disallowed.
         */
        rankby?: "prominence" | "distance";
        /**
         * Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.
         *
         * The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.
         *
         * * Autocomplete: 50,000 meters
         * * Nearby Search:
         *   * with `keyword` or `name`: 50,000 meters
         *   * without `keyword` or `name`
         *     * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.
         *     * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.
         * * Query Autocomplete: 50,000 meters
         * * Text Search: 50,000 meters
         * @example 1000
         */
        radius?: number;
        /**
         * Restricts the results to places matching the specified type. Only one type may be specified. If more than one type is provided, all types following the first entry are ignored.
         *
         * * `type=hospital|pharmacy|doctor` becomes `type=hospital`
         * * `type=hospital,pharmacy,doctor` is ignored entirely
         *
         * See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types).
         * <div class="note">Note: Adding both `keyword` and `type` with the same value (`keyword=cafe&type=cafe` or `keyword=parking&type=parking`) can yield `ZERO_RESULTS`.</div>
         */
        type?: string;
        /**
         * The language in which to return results.
         *
         * * See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
         * * If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
         * * The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
         * * If a name is not available in the preferred language, the API uses the closest match.
         * * The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian.
         * @default "en"
         */
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
        /**
         * The point around which to retrieve place information. This must be specified as `latitude,longitude`.
         *
         * <div class="note">The <code>location</code> parameter may be overriden if the <code>query</code> contains an explicit location such as <code>Market in Barcelona</code>. Using quotes around the query may also influence the weight given to the <code>location</code> and <code>radius</code>.</div>
         * @example "40,-110"
         */
        location?: string;
        /** Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. */
        maxprice?: "0" | "1" | "2" | "3" | "4";
        /** Restricts results to only those places within the specified range. Valid values range between 0 (most affordable) to 4 (most expensive), inclusive. The exact amount indicated by a specific value will vary from region to region. */
        minprice?: "0" | "1" | "2" | "3" | "4";
        /** Returns only those places that are open for business at the time the query is sent. Places that do not specify opening hours in the Google Places database will not be returned if you include this parameter in your query. */
        opennow?: boolean;
        /** Returns up to 20 results from a previously run search. Setting a `pagetoken` parameter will execute a search with the same parameters used previously — all parameters other than pagetoken will be ignored. */
        pagetoken?: string;
        /**
         * The text string on which to search, for example: "restaurant" or "123 Main Street". This must a place name, address, or category of establishments. Any other types
         * of input can generate errors and are not guaranteed to return valid results. The Google Places service will return candidate matches based on this string and order
         * the results based on their perceived relevance.
         * @example "restaurants in Sydney"
         */
        query: string;
        /**
         * Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.
         *
         * The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.
         *
         * * Autocomplete: 50,000 meters
         * * Nearby Search:
         *   * with `keyword` or `name`: 50,000 meters
         *   * without `keyword` or `name`
         *     * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.
         *     * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.
         * * Query Autocomplete: 50,000 meters
         * * Text Search: 50,000 meters
         * @example 1000
         */
        radius?: number;
        /**
         * Restricts the results to places matching the specified type. Only one type may be specified. If more than one type is provided, all types following the first entry are ignored.
         *
         * * `type=hospital|pharmacy|doctor` becomes `type=hospital`
         * * `type=hospital,pharmacy,doctor` is ignored entirely
         *
         * See the list of [supported types](https://developers.google.com/maps/documentation/places/web-service/supported_types).
         * <div class="note">Note: Adding both `keyword` and `type` with the same value (`keyword=cafe&type=cafe` or `keyword=parking&type=parking`) can yield `ZERO_RESULTS`.</div>
         */
        type?: string;
        /**
         * The language in which to return results.
         *
         * * See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
         * * If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
         * * The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
         * * If a name is not available in the preferred language, the API uses the closest match.
         * * The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian.
         * @default "en"
         */
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
        /**
         * The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").
         * @default "en"
         */
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
      query: {
        /** A string identifier that uniquely identifies a photo. Photo references are returned from either a Place Search or Place Details request. */
        photo_reference: string;
        /** Specifies the maximum desired height, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer between `1` and `1600`. */
        maxheight?: number;
        /** Specifies the maximum desired width, in pixels, of the image. If the image is smaller than the values specified, the original image will be returned. If the image is larger in either dimension, it will be scaled to match the smaller of the two dimensions, restricted to its original aspect ratio. Both the `maxheight` and `maxwidth` properties accept an integer between `1` and `1600`. */
        maxwidth?: number;
      },
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
        /** The text string on which to search. The Place Autocomplete service will return candidate matches based on this string and order results based on their perceived relevance. */
        input: string;
        /**
         * The position, in the input term, of the last character that the service uses to match predictions. For example, if the input is `Google` and the offset is 3, the service will match on `Goo`. The string determined by the offset is matched against the first word in the input term only. For example, if the input term is `Google abc` and the offset is 3, the service will attempt to match against `Goo abc`. If no offset is supplied, the service will use the whole term. The offset should generally be set to the position of the text caret.
         * @example 3
         */
        offset?: number;
        /**
         * The point around which to retrieve place information. This must be specified as `latitude,longitude`.
         *
         * <div class="note">The <code>location</code> parameter may be overriden if the <code>query</code> contains an explicit location such as <code>Market in Barcelona</code>. Using quotes around the query may also influence the weight given to the <code>location</code> and <code>radius</code>.</div>
         * @example "40,-110"
         */
        location?: string;
        /**
         * Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.
         *
         * The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.
         *
         * * Autocomplete: 50,000 meters
         * * Nearby Search:
         *   * with `keyword` or `name`: 50,000 meters
         *   * without `keyword` or `name`
         *     * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.
         *     * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.
         * * Query Autocomplete: 50,000 meters
         * * Text Search: 50,000 meters
         * @example 1000
         */
        radius?: number;
        /**
         * The language in which to return results.
         *
         * * See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
         * * If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
         * * The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
         * * If a name is not available in the preferred language, the API uses the closest match.
         * * The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian.
         * @default "en"
         */
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
        /** The text string on which to search. The Place Autocomplete service will return candidate matches based on this string and order results based on their perceived relevance. */
        input: string;
        /**
         * A random string which identifies an autocomplete [session](https://developers.google.com/maps/documentation/places/web-service/details#session_tokens) for billing purposes.
         *
         * The session begins when the user starts typing a query, and concludes when they select a place and a call to Place Details is made. Each session can have multiple queries, followed by one place selection. The API key(s) used for each request within a session must belong to the same Google Cloud Console project. Once a session has concluded, the token is no longer valid; your app must generate a fresh token for each session. If the `sessiontoken` parameter is omitted, or if you reuse a session token, the session is charged as if no session token was provided (each request is billed separately).
         *
         * We recommend the following guidelines:
         *
         * - Use session tokens for all autocomplete sessions.
         * - Generate a fresh token for each session. Using a version 4 UUID is recommended.
         * - Ensure that the API key(s) used for all Place Autocomplete and Place Details requests within a session belong to the same Cloud Console project.
         * - Be sure to pass a unique session token for each new session. Using the same token for more than one session will result in each request being billed individually.
         */
        sessiontoken?: string;
        /**
         * A grouping of places to which you would like to restrict your results. Currently, you can use components to filter by up to 5 countries. Countries must be passed as a two character, ISO 3166-1 Alpha-2 compatible country code. For example: `components=country:fr` would restrict your results to places within France. Multiple countries must be passed as multiple `country:XX` filters, with the pipe character `|` as a separator. For example: `components=country:us|country:pr|country:vi|country:gu|country:mp` would restrict your results to places within the United States and its unincorporated organized territories.
         * <div class="note"><strong>Note:</strong> If you receive unexpected results with a country code, verify that you are using a code which includes the countries, dependent territories, and special areas of geographical interest you intend.  You can find code information at <a href="https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes" target="blank" class="external">Wikipedia: List of ISO 3166 country codes</a> or the <a href="https://www.iso.org/obp/ui/#search" target="blank" class="external">ISO Online Browsing Platform</a>.</div>
         * @example "country:us|country:pr"
         */
        components?: string;
        /** Returns only those places that are strictly within the region defined by `location` and `radius`. This is a restriction, rather than a bias, meaning that results outside this region will not be returned even if they match the user input. */
        strictbounds?: boolean;
        /**
         * The position, in the input term, of the last character that the service uses to match predictions. For example, if the input is `Google` and the offset is 3, the service will match on `Goo`. The string determined by the offset is matched against the first word in the input term only. For example, if the input term is `Google abc` and the offset is 3, the service will attempt to match against `Goo abc`. If no offset is supplied, the service will use the whole term. The offset should generally be set to the position of the text caret.
         * @example 3
         */
        offset?: number;
        /**
         * The origin point from which to calculate straight-line distance to the destination (returned as `distance_meters`). If this value is omitted, straight-line distance will not be returned. Must be specified as `latitude,longitude`.
         * @example "40,-110"
         */
        origin?: string;
        /**
         * The point around which to retrieve place information. This must be specified as `latitude,longitude`. The `radius` parameter must also be provided when specifying a location. If `radius` is not provided, the `location` parameter is ignored.
         *
         * <div class="note">When using the Text Search API, the `location` parameter may be overriden if the `query` contains an explicit location such as `Market in Barcelona`.</div>
         * @example "40,-110"
         */
        location?: string;
        /**
         * Prefer results in a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing the points of a rectangle. If this parameter is not specified, the API uses IP address biasing by default.
         * - IP bias: Instructs the API to use IP address biasing. Pass the string `ipbias` (this option has no additional parameters).
         * - Point: A single lat/lng coordinate. Use the following format: `point:lat,lng`.
         * - Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the following format: `circle:radius@lat,lng`.
         * - Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the south/west and north/east points of a rectangle. Use the following format:`rectangle:south,west|north,east`. Note that east/west values are wrapped to the range -180, 180, and north/south values are clamped to the range -90, 90.
         */
        locationbias?: string;
        /**
         * Restrict results to a specified area, by specifying either a radius plus lat/lng, or two lat/lng pairs representing the points of a rectangle.
         * - Circular: A string specifying radius in meters, plus lat/lng in decimal degrees. Use the following format: `circle:radius@lat,lng`.
         * - Rectangular: A string specifying two lat/lng pairs in decimal degrees, representing the south/west and north/east points of a rectangle. Use the following format:`rectangle:south,west|north,east`. Note that east/west values are wrapped to the range -180, 180, and north/south values are clamped to the range -90, 90.
         */
        locationrestriction?: string;
        /**
         * Defines the distance (in meters) within which to return place results. You may bias results to a specified circle by passing a `location` and a `radius` parameter. Doing so instructs the Places service to _prefer_ showing results within that circle; results outside of the defined area may still be displayed.
         *
         * The radius will automatically be clamped to a maximum value depending on the type of search and other parameters.
         *
         * * Autocomplete: 50,000 meters
         * * Nearby Search:
         *   * with `keyword` or `name`: 50,000 meters
         *   * without `keyword` or `name`
         *     * Up to 50,000 meters, adjusted dynamically based on area density, independent of `rankby` parameter.
         *     * When using `rankby=distance`, the radius parameter will not be accepted, and will result in an `INVALID_REQUEST`.
         * * Query Autocomplete: 50,000 meters
         * * Text Search: 50,000 meters
         * @example 1000
         */
        radius?: number;
        /**
         * You can restrict results from a Place Autocomplete request to be of a certain type by passing the `types` parameter. This parameter specifies a type or a type collection, as listed in [Place Types](/maps/documentation/places/web-service/supported_types). If nothing is specified, all types are returned.
         *
         * For the value of the `types` parameter you can specify either:
         * * Up to five values from [Table 1](/maps/documentation/places/web-service/supported_types#table1) or [Table 2](/maps/documentation/places/web-service/supported_types#table2). For multiple values, separate each value with a `|` (vertical bar). For example:
         *
         *   `types=book_store|cafe`
         *
         * * Any supported filter in [Table 3](/maps/documentation/places/web-service/supported_types#table3). You can safely mix the `geocode` and `establishment` types. You cannot mix type collections (`address`, `(cities)` or `(regions)`) with any other type, or an error occurs.
         *
         * The request will be rejected with an `INVALID_REQUEST` error if:
         *
         * * More than five types are specified.
         * * Any unrecognized types are present.
         * * Any types from in [Table 1](/maps/documentation/places/web-service/supported_types#table1) or [Table 2](/maps/documentation/places/web-service/supported_types#table2) are mixed with any of the filters in [Table 3](/maps/documentation/places/web-service/supported_types#table3).
         */
        types?: string;
        /**
         * The language in which to return results.
         *
         * * See the [list of supported languages](https://developers.google.com/maps/faq#languagesupport). Google often updates the supported languages, so this list may not be exhaustive.
         * * If `language` is not supplied, the API attempts to use the preferred language as specified in the `Accept-Language` header.
         * * The API does its best to provide a street address that is readable for both the user and locals. To achieve that goal, it returns street addresses in the local language, transliterated to a script readable by the user if necessary, observing the preferred language. All other addresses are returned in the preferred language. Address components are all returned in the same language, which is chosen from the first component.
         * * If a name is not available in the preferred language, the API uses the closest match.
         * * The preferred language has a small influence on the set of results that the API chooses to return, and the order in which they are returned. The geocoder interprets abbreviations differently depending on language, such as the abbreviations for street types, or synonyms that may be valid in one language but not in another. For example, _utca_ and _tér_ are synonyms for street in Hungarian.
         * @default "en"
         */
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
        /**
         * The region code, specified as a [ccTLD ("top-level domain")](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains) two-character value. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, the United Kingdom's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "gb" (technically for the entity of "The United Kingdom of Great Britain and Northern Ireland").
         * @default "en"
         */
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
        /** Determines the horizontal field of view of the image. The field of view is expressed in degrees, with a maximum allowed value of 120. When dealing with a fixed-size viewport, as with a Street View image of a set size, field of view in essence represents zoom, with smaller numbers indicating a higher level of zoom. Default is 90. */
        fov?: number;
        /** Indicates the compass heading of the camera. Accepted values are from 0 to 360 (both values indicating North, with 90 indicating East, and 180 South). If no heading is specified, a value will be calculated that directs the camera towards the specified location, from the point at which the closest photograph was taken. */
        heading?: number;
        /** The point around which to retrieve place information. The Street View Static API will snap to the panorama photographed closest to this location. When an address text string is provided, the API may use a different camera location to better display the specified location. When a lat/lng is provided, the API searches a 50 meter radius for a photograph closest to this location. Because Street View imagery is periodically refreshed, and photographs may be taken from slightly different positions each time, it's possible that your `location` may snap to a different panorama when imagery is updated. */
        location?: string;
        /** A specific panorama ID. These are generally stable, though panoramas may change ID over time as imagery is refreshed. */
        pano?: string;
        /** Specifies the up or down angle of the camera relative to the Street View vehicle. This is often, but not always, flat horizontal. Positive values angle the camera up (with 90 degrees indicating straight up); negative values angle the camera down (with -90 indicating straight down). Default is 0. */
        pitch?: number;
        /** Sets a radius, specified in meters, in which to search for a panorama, centered on the given latitude and longitude. Valid values are non-negative integers. Default is 50 meters. */
        radius?: number;
        /** Indicates whether the API should return a non `200 Ok` HTTP status when no image is found (`404 NOT FOUND`), or in response to an invalid request (400 BAD REQUEST). Valid values are `true` and `false`. If set to `true`, an error message is returned in place of the generic gray image. This eliminates the need to make a separate call to check for image availability. */
        return_error_code?: boolean;
        /** A digital signature used to verify that any site generating requests using your API key is authorized to do so. Requests that do not include a digital signature might fail. For more information, see [Get a Key and Signature](https://developers.google.com/maps/documentation/streetview/get-api-key). */
        signature?: string;
        /** Specifies the output size of the image in pixels. Size is specified as `{width}x{height}` - for example, `size=600x400` returns an image 600 pixels wide, and 400 high. */
        size: string;
        /**
         * Limits Street View searches to selected sources. Valid values are:
         * * `default` uses the default sources for Street View; searches are not limited to specific sources.
         * * `outdoor` limits searches to outdoor collections. Indoor collections are not included in search results. Note that outdoor panoramas may not exist for the specified location. Also note that the search only returns panoramas where it's possible to determine whether they're indoors or outdoors. For example, PhotoSpheres are not returned because it's unknown whether they are indoors or outdoors.
         */
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
        /** Indicates the compass heading of the camera. Accepted values are from 0 to 360 (both values indicating North, with 90 indicating East, and 180 South). If no heading is specified, a value will be calculated that directs the camera towards the specified location, from the point at which the closest photograph was taken. */
        heading?: number;
        /** The point around which to retrieve place information. The Street View Static API will snap to the panorama photographed closest to this location. When an address text string is provided, the API may use a different camera location to better display the specified location. When a lat/lng is provided, the API searches a 50 meter radius for a photograph closest to this location. Because Street View imagery is periodically refreshed, and photographs may be taken from slightly different positions each time, it's possible that your `location` may snap to a different panorama when imagery is updated. */
        location?: string;
        /** A specific panorama ID. These are generally stable, though panoramas may change ID over time as imagery is refreshed. */
        pano?: string;
        /** Specifies the up or down angle of the camera relative to the Street View vehicle. This is often, but not always, flat horizontal. Positive values angle the camera up (with 90 degrees indicating straight up); negative values angle the camera down (with -90 indicating straight down). Default is 0. */
        pitch?: number;
        /** Sets a radius, specified in meters, in which to search for a panorama, centered on the given latitude and longitude. Valid values are non-negative integers. Default is 50 meters. */
        radius?: number;
        /** Indicates whether the API should return a non `200 Ok` HTTP status when no image is found (`404 NOT FOUND`), or in response to an invalid request (400 BAD REQUEST). Valid values are `true` and `false`. If set to `true`, an error message is returned in place of the generic gray image. This eliminates the need to make a separate call to check for image availability. */
        return_error_code?: boolean;
        /** A digital signature used to verify that any site generating requests using your API key is authorized to do so. Requests that do not include a digital signature might fail. For more information, see [Get a Key and Signature](https://developers.google.com/maps/documentation/streetview/get-api-key). */
        signature?: string;
        /** Specifies the output size of the image in pixels. Size is specified as `{width}x{height}` - for example, `size=600x400` returns an image 600 pixels wide, and 400 high. */
        size?: string;
        /**
         * Limits Street View searches to selected sources. Valid values are:
         * * `default` uses the default sources for Street View; searches are not limited to specific sources.
         * * `outdoor` limits searches to outdoor collections. Indoor collections are not included in search results. Note that outdoor panoramas may not exist for the specified location. Also note that the search only returns panoramas where it's possible to determine whether they're indoors or outdoors. For example, PhotoSpheres are not returned because it's unknown whether they are indoors or outdoors.
         */
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
    snapToRoads: (
      query: {
        /**
         * The path to be snapped. The path parameter accepts a list of latitude/longitude pairs. Latitude and longitude values should be separated by commas. Coordinates should be separated by the pipe character: "|". For example: `path=60.170880,24.942795|60.170879,24.942796|60.170877,24.942796`.
         * <div class="note">Note: The snapping algorithm works best for points that are not too far apart. If you observe odd snapping behavior, try creating paths that have points closer together. To ensure the best snap-to-road quality, you should aim to provide paths on which consecutive pairs of points are within 300m of each other. This will also help in handling any isolated, long jumps between consecutive points caused by GPS signal loss, or noise.</div>
         * @example ["60.170880,24.942795","60.170879,24.942796","60.170877,24.942796"]
         */
        path: LatLngArrayString;
        /**
         * Whether to interpolate a path to include all points forming the full road-geometry. When true, additional interpolated points will also be returned, resulting in a path that smoothly follows the geometry of the road, even around corners and through tunnels. Interpolated paths will most likely contain more points than the original path. Defaults to `false`.
         * @example true
         */
        interpolate?: boolean;
      },
      params: RequestParams = {},
    ) =>
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
    nearestRoads: (
      query: {
        /**
         * The path to be snapped. The path parameter accepts a list of latitude/longitude pairs. Latitude and longitude values should be separated by commas. Coordinates should be separated by the pipe character: "|". For example: `path=60.170880,24.942795|60.170879,24.942796|60.170877,24.942796`.
         * <div class="note">Note: The snapping algorithm works best for points that are not too far apart. If you observe odd snapping behavior, try creating paths that have points closer together. To ensure the best snap-to-road quality, you should aim to provide paths on which consecutive pairs of points are within 300m of each other. This will also help in handling any isolated, long jumps between consecutive points caused by GPS signal loss, or noise.</div>
         * @example ["60.170880,24.942795","60.170879,24.942796","60.170877,24.942796"]
         */
        points: LatLngArrayString;
      },
      params: RequestParams = {},
    ) =>
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
