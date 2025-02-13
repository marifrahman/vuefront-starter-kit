require('dotenv').config()
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

export default {
  target: 'static',
  mode: 'universal',
  env: {
    FEATURED_PRODUCT: process.env.FEATURED_PRODUCT
  },
  generate: {
    concurrency: 5,
    subFolders: false
  },
  head: {
    title: 'vuefront',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'VueFront' }
    ],
    link: [{
        rel: 'icon',
        type: 'image/png',
        href: process.env.BASE_URL+'favicon.ico'
      }],
    script: []
  },
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'vuefront-nuxt',
    'cookie-universal-nuxt'
  ],
  pwa: {
    icon: {},
    manifest: {
      name: 'VueFront'
    },
  },
  router: {
    base: process.env.BASE_URL
  },
  build: {
    babel: {
      plugins: ['lodash']
    },
    extractCSS: true,
    plugins: [new LodashModuleReplacementPlugin({
        shorthands: true
      })]
  }
}
