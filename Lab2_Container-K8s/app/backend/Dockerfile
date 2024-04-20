FROM docker.io/library/node:20-alpine

EXPOSE 5273

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

CMD ["npm", "run", "dev"]