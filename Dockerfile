FROM node:14.7-alpine3.10
# COPY default.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html

COPY package*.json ./

RUN npm install

COPY .  .
EXPOSE 80
VOLUME /usr/share/nginx/html/img
CMD ["node", "server.js"]