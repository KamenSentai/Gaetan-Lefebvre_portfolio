module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Gaëtan LEFEBVRE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#141414' },
      { name: 'theme-color', content: '#141414' },
      { name: 'og:title', content: 'Gaëtan LEFEBVRE | Interactive Designer & Motion Designer' },
      { name: 'og:description', content: 'Hello all! I’m looking for a 6th month internship as an Interactive Designer. Today, I’m a 4th year student at HETIC and I’m passionnante about user experience and user interface.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://gaetanlefebvre.fr/' },
      { name: 'og:image', content: '/graph/facebook.png' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@gaetanlefebvre' },
      { name: 'twitter:title', content: 'Gaëtan LEFEBVRE | Interactive Designer & Motion Designer' },
      { name: 'twitter:description', content: 'Hello all! I’m looking for a 6th month internship as an Interactive Designer. Today, I’m a 4th year student at HETIC and I’m passionnante about user experience and user interface.' },
      { name: 'twitter:image', content: '/graph/twitter.png' },
      { name: 'twitter:image:alt', content: 'Gaëtan LEFEBVRE' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#141414' }
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

