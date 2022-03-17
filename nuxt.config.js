import { resolve } from 'path'
import minifyTheme from 'minify-css-string'

export default {
  head: {
    title: 'Rubik',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  buildDir: 'nuxt-build',

  // Use PM2 dor build project
  apps: [
    {
      name: 'Rubik',
      exec_mode: 'cluster',
      instances: 'max', 
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ],

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
  ],

  env: {
    NODE_ENV : process.env.NODE_ENV
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: { minifyTheme },
      dark: false,
      themes: {
        dark: {
          blueLight: "#1A27C9",
          blueDark: "#002592",
          blueLinearDark: 'linear-gradient(155.51deg, #0F1772 5.31%, #0D2EBD 84.03%)',
          yellowDark: '#F7E05F',
          yellowLight: '#F9E67F',
          redLight: '#FC3838',
          redDark: '#E54B42',
          black: '#010416',
          blackBluelight: '#040F4A',
          blackblueDark: '#1A234A',
          grayMaster: '#777E90',
          grayMedium: '#999FAE',
          gramNormal: '#E3E6E9',
          gratLight: '#E3E6E9',
          white: '#FFFFFF',
        }
      }
    },
  },

  build: {
    // Minisize html
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true,
    minimize: true,

    //Split Chunks
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: undefined,
      cacheGroups: {}
    },

    //Use babel
    babel: {
      babelrc: false,
      cacheDirectory: undefined,
      presets: ['@nuxt/babel-preset-app'],
      presets({ envName }) {
        const envTargets = {
          client: { browsers: ["last 2 versions"], ie: 11 },
          server: { node: "current" },
        }
        return [
          [
            "@nuxt/babel-preset-app",
            {
              targets: envTargets[envName]
            }
          ]
        ]
      }
    }
  },
  extend(config, { isDev, isClient }) {
    // ..
    config.module.rules.push({
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader'
    })
    // Sets webpack's mode to development if `isDev` is true.
    if (isDev) {
      config.mode = 'development'
    }
    if (isClient) {
      config.optimization.splitChunks.maxSize = 200000
    }
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  },

  alias: {
    '@assets': resolve(__dirname, './assets/'),
    '@components': resolve(__dirname, './components'),
    '@contants': resolve(__dirname, './contants'),
    '@layouts': resolve(__dirname, './layouts'),
    '@service': resolve(__dirname, './service'),
    '@page': resolve(__dirname, './page'),
    '@static': resolve(__dirname, './static'),
  },

  // When you build this project must change NODE_ENV equal production
  ssr: process.env.NODE_ENV === 'development' ? false : true
}
