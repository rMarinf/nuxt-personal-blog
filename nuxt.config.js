import axios from 'axios'

process.env.NODE_ENV === 'production'
  ? require('dotenv').config({ path: '.env.prod' })
  : require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/layout/TheCustomLoading.vue',
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/Developmint/nuxt-purgecss
    'nuxt-purgecss',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://markdown-it.github.io/
    '@nuxtjs/markdownit',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        cacheProvider: 'memory'
      }
    ]
  ],
  generate: {
    routes() {
      return axios
        .get(
          `https://api.storyblok.com/v1/cdn/stories?version=${
            process.env.STORYBLOK_VERSION
          }&token=${
            process.env.STORYBLOK_TOKEN
          }&starts_with=post&cv=${Math.floor(Date.now() / 1e3)}`
        )
        .then((res) => {
          const blogPosts = res.data.stories.map((bp) => bp.full_slug)
          return ['/', '/about', '/contact', ...blogPosts]
        })
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /**
   * MarkdownIt configuration
   */
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    use: ['markdown-it-highlightjs']
  },
  /**
   * PurgeCSS
   */
  purgeCSS: {
    whitelistPatterns: [/hljs*/]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
