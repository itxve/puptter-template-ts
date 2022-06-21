## 一个使用puppeteer 的自动化脚本 模版

|        依赖          |         描述         |   
|----------------------|:-----------------------:| 
| axios | [网络请求](https://github.com/axios/axios)
| carlo | [搜索本地机器的谷歌浏览器](https://github.com/GoogleChromeLabs/carlo)
| cheerio | [像JQ一样操作html](https://github.com/cheeriojs/cheerio)
| express | [ web 框架](https://github.com/expressjs/express)
| puppeteer-core|[node for 谷歌浏览器协议](https://github.com/puppeteer/puppeteer)
 

## 构建镜像
```
docker build -t puptter-ts-tpl .
```   
## 启动镜像

```
./docker_start.sh
```

# 使用docker compose启动镜像
```
docker compose [,-f docker-compose.yml] up -d
```


# docker-entrypoint.sh 需要执行权限
```
chmod +x ./docker-entrypoint.sh
```


### Orther

Docker 还需努力学习😄




## 参考 

#### [Chromium淘宝镜像](https://npm.taobao.org/mirrors/chromium-browser-snapshots/Linux_x64/)
#### [Chromium Downloads](https://chromium.cypress.io/)
##### [Puppeteer](https://developers.google.com/web/tools/puppeteer/get-started)
##### [Puppeteer Docs Api](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)
