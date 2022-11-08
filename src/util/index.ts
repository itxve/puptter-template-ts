const findChrome = require("carlo/lib/find_chrome");
import * as pupcore from "puppeteer-core";
const os = require("os");
const axios = require("axios");
const port = "9333";

async function getBrowserConfig() {
  const platform = os.platform();
  const chormeFilePath = await findChrome({});
  return {
    headless: "linux" === platform,
    chormePath: chormeFilePath.executablePath,
  };
}

export async function createBrowser() {
  const { headless, chormePath } = await getBrowserConfig();
  // console.log("无头模式", headless, "谷歌浏览器安装路径", chormePath);
  const browser = await pupcore.launch({
    executablePath: chormePath,
    headless,
    // devtools: true, // 自动打开devtool
    ignoreDefaultArgs: ["--enable-automation"],
    args: [
      "--window-size=1920,1080",
      "--window-position=1921,0",
      "--disable-notifications=true",
      `--remote-debugging-port=${port}`,
      "--disable-web-security",
      "--allow-http-screen-capture",
      "--allow-running-insecure-content",
      "--disable-features=site-per-process",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--no-sandbox",
      headless ? "--single-process" : "",
    ],
    ignoreHTTPSErrors: true,
    timeout: 10000 * 100,
  });
  return browser;
}

function getWebSocketDebuggerUrl() {
  return axios
    .get(`http://localhost:${port}/json/version`)
    .then((res: any) => res.data.webSocketDebuggerUrl);
}

export { pupcore, getWebSocketDebuggerUrl };
