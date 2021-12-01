FROM node:14.18.0-bullseye AS node

WORKDIR /usr/client

FROM node AS dev

ENV NODE_ENV="development"

COPY client/package.json client/package-lock.json ./

RUN npm install

COPY client ./

FROM dev AS prod
ENV NODE_ENV="production"

RUN npm run build