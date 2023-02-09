FROM node:18.14.0-alpine as build
RUN apk add g++ make py3-pip

WORKDIR /app

COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:1.9.15-alpine
EXPOSE 80
COPY --from=build /app/public /usr/share/nginx/html