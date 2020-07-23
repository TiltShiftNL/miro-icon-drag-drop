FROM nginx:1.19-alpine
COPY . /usr/share/nginx/html
EXPOSE 80
VOLUME /usr/share/nginx/html/img
