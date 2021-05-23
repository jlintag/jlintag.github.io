FROM strapi/strapi

WORKDIR /app
COPY yarn.lock .
COPY package.json .

RUN yarn --frozen-lockfile

COPY ./ ./

CMD ["strapi", "develop"]
