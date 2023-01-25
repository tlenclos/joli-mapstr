// For more information, see https://crawlee.dev/
import { PuppeteerCrawler } from "crawlee";
import { router } from "./router.js";

import places from "../../data/places.json" assert { type: "json" };

let urls: string[] = [];
places.forEach((category) => {
  urls = urls.concat(category.places);
});

const crawler = new PuppeteerCrawler({
  requestHandler: router,
  launchContext: {
    launchOptions: {
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  },
});

await crawler.run(urls);
