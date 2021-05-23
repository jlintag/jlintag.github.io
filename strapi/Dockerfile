FROM strapi/strapi

WORKDIR /app
COPY yarn.lock .
COPY package.json .

RUN yarn
RUN yarn build

CMD ["yarn", "start"]
