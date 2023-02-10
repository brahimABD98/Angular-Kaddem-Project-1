FROM node:18-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM httpd:2.4

RUN rm -rf /usr/local/apache2/htdocs/*

COPY --from=0 /app/dist/ /usr/local/apache2/htdocs/


EXPOSE 80

CMD ["httpd", "-D", "FOREGROUND"]
