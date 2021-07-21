# dockerfile  两步
# 第一步：构建
FROM node:lts-alpine as build-stage

# 将工作区设为 /app，和其他系统文件隔离
WORKDIR /app

# 利用镜像缓存，package.json不改变不会从新拉取依赖
COPY package*.json ./
COPY yarn.lock .

RUN yarn cache clean
# 下载依赖包
RUN yarn
COPY . .
# 构建打包
RUN yarn build

# 第二步：生产
FROM nginx:stable-alpine as production-stage

# 将build-stage产物从app/dist文件夹复制到/usr/local/src/nginx/html 
COPY --from=build-stage /app/dist /www/wwwroot/allenboy.cn
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]