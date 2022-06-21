const findChrome = require("carlo/lib/find_chrome");
import * as pupcore from "puppeteer-core";
const os = require("os");

async function getBrowserConfig() {
  const platform = os.platform();
  if ("linux" === platform) {
    const chormeFilePath = await findChrome({});
    return {
      headless: true,
      chormePath: chormeFilePath.executablePath,
    };
  } else {
    const chormeFilePath = await findChrome({});
    return {
      headless: false,
      chormePath: chormeFilePath.executablePath,
    };
  }
}

export async function createBrowser() {
  const { headless, chormePath } = await getBrowserConfig();
  console.log("无头模式", headless, "谷歌浏览器安装路径", chormePath);
  const browser = await pupcore.launch({
    executablePath: chormePath,
    headless,
    devtools: true, // 自动打开devtool
    ignoreDefaultArgs: ["--enable-automation"],
    args: [
      "--disable-web-security",
      "--allow-http-screen-capture",
      "--allow-running-insecure-content",
      "--disable-features=site-per-process",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-sandbox",
      headless ? "--single-process" : "",
    ],
    ignoreHTTPSErrors: true,
    timeout: 10000 * 100,
  });
  return browser;
}

export { pupcore };
