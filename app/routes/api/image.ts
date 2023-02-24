import type { LoaderFunction } from "@remix-run/server-runtime";
import { imageLoader, LoaderConfig, MemoryCache } from "remix-image/server";
import { sharpTransformer } from "remix-image-sharp";

const config: LoaderConfig = {
  selfUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : "https://joli-mapstr.vercel.app/",
  transformer: sharpTransformer,
  cache: new MemoryCache(),
  redirectOnFail: true,
};

export const loader: LoaderFunction = async ({ request }) => {
  const response = await imageLoader(config, request);
  response.headers.set('Cache-control', 'public, max-age=31536000, immutable')
  return response;
};
