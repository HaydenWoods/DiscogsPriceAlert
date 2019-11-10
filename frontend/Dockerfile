FROM node:10-alpine

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000