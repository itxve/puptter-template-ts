import { createBrowser, pupcore } from "../util";

/***
 * 截图百度主页并返回图片
 */
export async function testScreenshot() {
  let browser!: pupcore.Browser;
  try {
    browser = await createBrowser();
    const page = await browser.newPage();
    await page.setViewport({ width: 1450, height: 900 });
    await page.setDefaultNavigationTimeout(1000 * 1000 * 10);
    await page.goto("https://www.baidu.com/");
    const image = await page.screenshot({
      type: "png",
      fullPage: true,
      encoding: "binary",
    });
    return image;
  } catch (error) {
    console.log("error", error);
  } finally {
    await browser.close();
  }
}
