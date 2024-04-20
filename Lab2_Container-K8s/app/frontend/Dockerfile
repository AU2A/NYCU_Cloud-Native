FROM docker.io/library/node:21-alpine3.18

EXPOSE 5173

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]