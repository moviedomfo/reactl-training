FROM debian
RUN aptFROM willh/ngcli:10.2.0 as build
LABEL authors="Will Huang"
WORKDIR /app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
ARG configuration=production
RUN ng build --output-path=./dist/out --configuration $configuration

FROM nginx:1.15
COPY --from=build /app/dist/out/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

