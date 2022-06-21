import * as express from "express";
const app = express();
import config from "./config";
import { testScreenshot } from "./test";

app.get("/ok", async (req, res) => {
  res.status(200).end("ok");
});

app.get("/test", async (req, res) => {
  const image = await testScreenshot();
  res.type("png").end(image);
});

app.listen(config.port, () => {
  console.log(`Server Listening on The http://localhost:${config.port}`);
});

process.on("uncaughtException", (error) => {
  console.log("未知的错误", error);
});

process.on("unhandledRejection", (error) => {
  console.log("Promise拒绝错误", error);
});
