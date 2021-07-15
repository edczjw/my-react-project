# dockerfile
# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build:prd

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/local/src/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
