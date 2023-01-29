// For more information, see https://crawlee.dev/
import { PuppeteerCrawler } from "crawlee";
import { router } from "./router.js";

// @ts-expect-error
import places from "../../data/places.json" assert { type: "json" };

const LANGUAGE = "fr";

let urls: string[] = [];
places.forEach((category) => {
  urls = urls.concat(category.places);
});

const crawler = new PuppeteerCrawler({
  requestHandler: router,
  preNavigationHooks: [
    async ({ request, page }) => {
      const mapUrl = new URL(request.url);

      mapUrl.searchParams.set("hl", LANGUAGE);

      await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, "language", {
          get() {
            return LANGUAGE;
          },
        });
        Object.defineProperty(navigator, "languages", {
          get() {
            return [LANGUAGE];
          },
        });
      });

      request.url = mapUrl.toString();
    },
  ],
  launchContext: {
    launchOptions: {
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        `--lang=${LANGUAGE}`, // force language at browser level
      ],
    },
  },
});

await crawler.run(urls);
