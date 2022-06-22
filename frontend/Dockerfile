#stage build
FROM node:14-alpine as builder
RUN mkdir /app
WORKDIR /app
COPY /package*.json /app/
RUN npm install
COPY . .
RUN npm run build
#satge2
FROM nginx:1.20.2-alpine
EXPOSE 3000
COPY --from=builder /app/build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf