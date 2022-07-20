FROM node:16.13.1-alpine as build

WORKDIR /app

COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:mainline
EXPOSE 80
COPY --from=build /app/public /usr/share/nginx/html