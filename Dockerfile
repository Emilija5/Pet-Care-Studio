FROM nginx:alpine

COPY index.html services.html team.html blog.html contact.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY en/ /usr/share/nginx/html/en/

EXPOSE 80