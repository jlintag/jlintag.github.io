require('dotenv').config()

module.exports = {
  env: {
    STRAPI_URL: process.env.STRAPI_URL
  },
  images: {
    loader: 'imgix',
    path: ''
  }
}
