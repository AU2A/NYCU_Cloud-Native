FROM docker.io/library/node:20-alpine

EXPOSE 5173

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm", "run", "start"]