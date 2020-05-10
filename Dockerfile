FROM node:latest as build-stage
WORKDIR /home/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run generate

FROM nginx as production-stage
RUN ls -lash
RUN mkdir /app
COPY --from=build-stage /home/app/dist /app
RUN ls -lash /app
COPY nginx.conf /etc/nginx/nginx.conf
