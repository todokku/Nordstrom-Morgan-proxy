FROM node:current-slim
WORKDIR /usr/src/Nordstrom-Morgan-proxy
COPY . .
RUN yarn install
EXPOSE 3000
CMD [ "yarn", "run", "start" ]