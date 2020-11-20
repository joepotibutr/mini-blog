FROM node:latest

WORKDIR /users/joe/desktop/sertis/client

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]