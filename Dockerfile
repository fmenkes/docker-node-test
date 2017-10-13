FROM node:8.5.0-alpine

WORKDIR /opt/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 8080 8080

CMD ["npm", "run", "start"]
