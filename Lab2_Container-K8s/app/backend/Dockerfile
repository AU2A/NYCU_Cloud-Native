FROM docker.io/library/node:20-alpine AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM docker.io/library/node:20-alpine AS production

EXPOSE 5273

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY --from=build /app ./

CMD ["npm", "run", "dev"]