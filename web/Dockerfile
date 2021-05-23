FROM node:14

WORKDIR /app
ENV NODE_ENV=development
ENV CI=true

COPY ./ ./
RUN yarn

CMD [ "yarn", "start" ]
