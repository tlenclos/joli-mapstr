// For more information, see https://crawlee.dev/
import { PuppeteerCrawler } from "crawlee";
import { router } from "./router.js";

const startUrls = [
  "https://www.google.com/maps/place/Ch%E1%BB%8B+B%E1%BA%A3o/@48.85946,2.3770094,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66da8812e62a9:0xaafc77b01b0b10d4!8m2!3d48.85946!4d2.3770094",
  "https://www.google.com/maps/place/Chez+Colette/@48.8615364,2.3755287,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66dfa1235be11:0x7ec202661d6e501b!8m2!3d48.8615351!4d2.3777255",
];

const crawler = new PuppeteerCrawler({
  requestHandler: router,
  headless: false,
});

await crawler.run(startUrls);
