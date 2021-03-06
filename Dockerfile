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

# 第二步：生产 这个nginx是容器里面的，并不是阿里云服务器的
FROM nginx:stable-alpine as production-stage

# 将build-stage产物从app/dist文件夹复制到/usr/local/src/nginx/html 
COPY --from=build-stage /app/dist /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]