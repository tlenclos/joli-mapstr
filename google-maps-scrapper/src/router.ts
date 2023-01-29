import { Dataset, createPuppeteerRouter } from "crawlee";
import { extractOpeningHours } from "./extractors/openingHours.js";
import { extractImages } from "./extractors/images.js";
import { parseJsonResult } from "./extractors/details.js";

export const router = createPuppeteerRouter();

declare const APP_INITIALIZATION_STATE: any;
router.addDefaultHandler(async ({ request, page, log }) => {
  log.info(request.loadedUrl!);

  const consentButton = await page.$(
    '[action^="https://consent.google"] button'
  );

  if (consentButton) {
    await Promise.all([
      page.waitForNavigation({ timeout: 60000 }),
      consentButton.click(),
    ]);
  }

  await page.waitForSelector("h1.fontHeadlineLarge");

  const jsonData = await page.evaluate(() => {
    try {
      return JSON.parse(APP_INITIALIZATION_STATE[3][6].replace(`)]}'`, ""))[6];
    } catch (e) {
      return null;
    }
  });

  const title = await page.title();
  const openingHours = await extractOpeningHours({ page, jsonData });
  const images = await extractImages({
    page,
    maxImages: 5,
    placeUrl: request.loadedUrl!,
  });
  const detail = parseJsonResult(jsonData);

  await Dataset.pushData({
    url: request.loadedUrl,
    title,
    openingHours,
    images,
    ...detail,
  });
});
