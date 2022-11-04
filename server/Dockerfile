FROM node:16.17.0

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --loglevel verbose
COPY ./dist .
COPY ./.env ./.env
CMD [ "node", "main.js" ]