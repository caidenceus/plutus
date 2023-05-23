FROM node:lts

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci

COPY . /app

EXPOSE 3000

CMD [ "npm", "start" ]