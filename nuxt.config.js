module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Gaëtan LEFEBVRE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://code.createjs.com/1.0.0/preloadjs.min.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#141414',
    background: 'white'
  },
  /*
  ** Plugins
  */
  plugins: [
    { src: "~/plugins/aos", ssr: false }
  ],
  /*
  ** Global CSS
  */
	css: [
    '~/assets/styles/app.scss'
  ],
  build: {
    vendor: ['kute.js'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

