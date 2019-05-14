FROM node:latest

ARG TAG
COPY . /app
RUN sed -i "s/tag/${TAG}/" /app/src/components/header/Header.js
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm start
