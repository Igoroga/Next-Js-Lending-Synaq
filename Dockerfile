FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
COPY . .

RUN apk update && apk add git bash

RUN npm ci --ignore-scripts --legacy-peer-deps
RUN npm run build

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]
