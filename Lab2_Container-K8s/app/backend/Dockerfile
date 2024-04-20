FROM docker.io/library/node:21-alpine3.18

EXPOSE 8888

WORKDIR /app

COPY . .

RUN cp .env.sample .env

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]