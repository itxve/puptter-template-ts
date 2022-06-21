##  貌似一般只做一个壳，其他使用挂载的方式

# 拉取镜像
FROM buildkite/puppeteer

# 设置镜像作者
LABEL MAINTAINER="Your Name"

# 设置时区
RUN rm -rf /etc/localtime && ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

# 指定RUN、CMD与ENTRYPOINT命令的工作目录
WORKDIR /app

# 暴露端口
EXPOSE 7120

CMD ["./docker-entrypoint.sh"]





