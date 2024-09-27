FROM node:14

WORKDIR /web-server
COPY package.json .
RUN npm install
COPY . .
CMD npm start
