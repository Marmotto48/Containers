FROM node:14-alpine

RUN mkdir /index

WORKDIR /index

COPY ./package.json /index/

RUN npm install

COPY ./ /index/

EXPOSE 3001

CMD ["npm","start"]