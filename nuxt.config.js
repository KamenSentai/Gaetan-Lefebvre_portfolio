module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Gaëtan LEFEBVRE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#141414' },
      { name: 'theme-color', content: '#141414' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#141414' }
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

