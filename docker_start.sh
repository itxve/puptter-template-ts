#!/bin/bash

# 变量设置[容器名，端口，存储卷]
CONTAINER_NAME='puptter-ts-tpl'
CONTAINER_PORT='7120:7120'
CONTAINER_VOLUMES='/Users/apple/Desktop/puptter-ts-template:/app'



# 从正在运行的容器中找到这个名字拿到他的容器ID

CONTAINER_ID=$(docker ps | grep ${CONTAINER_NAME} | awk '{print $1}')

if [ -n "$CONTAINER_ID" ]; then

  docker stop $CONTAINER_ID

  docker rm $CONTAINER_ID

else #如果容器启动时失败了，就需要docker ps -a才能找到那个容器

  CONTAINER_ID=$(docker ps -a | grep ${CONTAINER_NAME} | awk '{print $1}')

  if [ -n "$CONTAINER_ID" ]; then # 如果是第一次在这台机器上拉取运行容器，那么docker ps -a也是找不到这个容器的

    docker rm $CONTAINER_ID

  fi

fi
# 启动构建好的镜像
docker run --name ${CONTAINER_NAME} -p ${CONTAINER_PORT} -v ${CONTAINER_VOLUMES} -d ${CONTAINER_NAME}