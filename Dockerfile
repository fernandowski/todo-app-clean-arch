FROM node:21-alpine3.18

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "run", "start-express"]
