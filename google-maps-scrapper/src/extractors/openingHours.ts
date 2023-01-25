// From https://github.com/apify-projects/store-crawler-google-places/blob/6d2dce7b15dede4282675c62c7ceba7cb1fe5251/src/place-extractors/general.ts
import type { Page } from "puppeteer";

type OpeningHours = [
  { day: "Monday"; hours: string },
  { day: "Tuesday"; hours: string },
  { day: "Wednesday"; hours: string },
  { day: "Thursday"; hours: string },
  { day: "Friday"; hours: string },
  { day: "Saturday"; hours: string },
  { day: "Sunday"; hours: string }
];

export const extractOpeningHours = async ({
  page,
  jsonData,
}: {
  page: Page;
  jsonData: any;
}) => {
  let unsortedOpeningHours: ({ day: string; hours: string } | undefined)[] = [];

  if (jsonData?.[34]?.[1]?.[0] && jsonData?.[34]?.[1]?.[1]) {
    unsortedOpeningHours = jsonData[34][1].map((entry: any) => ({
      day: entry[0],
      // replace "–" by " to " to make it consistent to extracting data from the DOM
      hours: entry[1]
        .map((hourInterval: string) => hourInterval.replace("–", " to "))
        .join(", "),
    }));
  } else {
    const openingHoursSel =
      ".section-open-hours-container.section-open-hours-container-hoverable";
    const openingHoursSelAlt =
      ".section-open-hours-container.section-open-hours";
    const openingHoursSelAlt2 = ".section-open-hours-container";
    const openingHoursSelAlt3 = "[jsaction*=openhours]+[class*=open]";
    const openingHoursEl =
      (await page.$(openingHoursSel)) ||
      (await page.$(openingHoursSelAlt)) ||
      (await page.$(openingHoursSelAlt2)) ||
      (await page.$(openingHoursSelAlt3));
    if (openingHoursEl) {
      const openingHoursText = await page.evaluate((openingHoursElem) => {
        return openingHoursElem.getAttribute("aria-label");
      }, openingHoursEl);

      const openingHours = openingHoursText!.split(
        openingHoursText!.includes(";") ? ";" : ","
      );
      if (openingHours.length) {
        unsortedOpeningHours = openingHours.map((line) => {
          const regexpResult = line.trim().match(/(\S+)\s(.*)/);
          if (regexpResult) {
            // eslint-disable-next-line prefer-const
            let [, day, hours] = regexpResult;
            [hours] = hours.split(".");
            return { day: day.replace(",", ""), hours };
          }
          console.debug(`[PLACE]: Not able to parse opening hours: ${line}`);
          return undefined;
        });
      }
    }
  }

  // Order from Monday to Sunday, Google by default starts with current day
  // Unfortunately, we do this only for English language, we would have to translate all other langauges
  const openingHoursSorted: OpeningHours = [] as any;

  const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  for (const day of DAYS) {
    const openingHours = unsortedOpeningHours.find(
      (entry) => entry?.day === day
    );
    if (openingHours) {
      openingHoursSorted.push(openingHours as any);
    }
  }

  if (openingHoursSorted.length === 7) {
    return openingHoursSorted;
  }

  return unsortedOpeningHours;
};
