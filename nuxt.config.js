module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'gaetan-lefebvre_portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
    name: 'circle',
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

