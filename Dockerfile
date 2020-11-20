FROM node:latest AS ui-build
WORKDIR /users/joe/desktop/sertis
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:latest AS server-build
WORKDIR /root/
COPY --from=ui-build /users/joe/desktop/sertis/client/build ./client/build
COPY api/package*.json ./api/
RUN cd api && npm install
COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]