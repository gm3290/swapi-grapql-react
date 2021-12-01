FROM node:14.18.0-bullseye AS node

WORKDIR /usr/swapi

FROM node AS dev

ENV NODE_ENV="development"

COPY swapi/package.json swapi/package-lock.json ./

RUN npm install

COPY swapi ./

FROM dev AS prod
ENV NODE_ENV="production"

RUN npm run build:lambda