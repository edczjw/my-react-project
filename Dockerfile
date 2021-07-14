# Dockerfile 是一个用来构建镜像的文本文件,文本内容包含了一条条构建镜像所需的指令和说明.
FROM nginx:1.15
COPY dist/  /usr/share/nginx/html/

ADD default.conf /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html

RUN chmod -R a+rx *