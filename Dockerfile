# Stage 1: Build Stage
FROM node:21-alpine3.18 AS build

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

# Stage 2: Execute tests
FROM node:21-alpine3.18 as unit-test
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/jest.config.js /app/jest.config.js
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/test /app/test
RUN ls
RUN  yarn test

# Stage 3: Production Stage
FROM node:21-alpine3.18 as production

WORKDIR /app

COPY --from=build /app/dist /app

EXPOSE 3000

CMD ["yarn", "start-express"]
