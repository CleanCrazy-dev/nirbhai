# node base image
FROM node:15 as build

# working directory
WORKDIR /app

# copy everything to current working directory 
COPY . ./

# run npm install
RUN npm install &&\
  npm run build:ssr

# nginx base image
FROM nginx:latest AS frontend-browser

COPY default.conf /etc/nginx/conf.d
# copy static contents of project to nginx html 
COPY --from=build /app/dist/angular/browser /usr/share/nginx/html

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM node:15 AS ssr-server
COPY --from=build /app/dist/angular /app/dist/angular/
COPY package.json /app/package.json
WORKDIR /app
EXPOSE 4000

CMD npm run serve:ssr

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]