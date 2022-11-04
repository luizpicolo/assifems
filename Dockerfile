FROM node:18-alpine3.15

WORKDIR /app
ADD package.json /app/package.json
ADD yarn.lock /app/yarn.lock

RUN apk add --no-cache g++ make py3-pip python3
RUN yarn install

ENV TZ=America/Campo_Grande
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ADD . /app

EXPOSE 3000