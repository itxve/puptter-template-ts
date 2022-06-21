import * as axios from "axios";
import { AxiosRequestConfig } from "axios";
import config from "../config";
const { create } = axios.default;

const app = create({
  baseURL: config.noticeServe,
  timeout: 10000,
});
// 自选封装一些有用的

/**
 * 通知自身业务服务器
 * @param config
 */
async function notice(config: AxiosRequestConfig) {
  await app
    .request({
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      ...config,
    })
    .then(function (response) {
      console.log("notice", response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
}
