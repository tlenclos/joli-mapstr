# Joli Mapstr

## Installation

Create an [API token](https://developers.google.com/maps/documentation/javascript)
and put it in the `GOOGLE_API_KEY` environment variable (`.env` file).

```sh
yarn
```

## Development

```sh
yarn dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

## How to add a place

- Open the file with places data
  https://github.com/tlenclos/joli-mapstr/blob/master/app/data/places.json
- Add the place name and id, you can find the place ID here
  https://developers.google.com/maps/documentation/places/web-service/place-id#find-id
- Then, run the following command to get some pictures:
  ```
  yarn populate-places-photos
  ```
