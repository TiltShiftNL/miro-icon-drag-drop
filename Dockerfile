FROM nginx:1.19-alpine
# COPY default.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html
EXPOSE 80
VOLUME /usr/share/nginx/html/img
