FROM node:14.15.4 as angular
WORKDIR /app

COPY package.json /app
RUN npm install --silent
COPY . .
ARG DOCKER_SCAN_SUGGEST
ENV DOCKER_SCAN_SUGGEST=false
RUN npm run build:lib
RUN npm run build:portal

FROM nginx:alpine
VOLUME "/var/cache/nginx"
COPY --from=angular app/dist/it-monorepo-case /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
