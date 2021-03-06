
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Singlelink - You don\'t need a website, you need a Singlelink 🔗🔥',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Singlelink is the beautiful, easy-to-use, and powerful micro-site that focuses on the content your consumers care about most, and nothing else. Sign up free in seconds, no credit card required!' },
      { name: 'og:image', content: 'https://singlelink.co/og-image.png' },
      { name: 'og:title', content: 'Singlelink - You don\'t need a website, you need a Singlelink 🔗🔥' },
      { name: 'og:description', content: 'Singlelink is the beautiful, easy-to-use, and powerful micro-site that focuses on the content your consumers care about most, and nothing else. Sign up free in seconds, no credit card required!'},
      { name: 'twitter:image', content: 'https://singlelink.co/og-image.png' },
      { name: 'twitter:title', content: 'Singlelink - You don\'t need a website, you need a Singlelink 🔗🔥' },
      { name: 'twitter:description', content: 'Singlelink is the beautiful, easy-to-use, and powerful micro-site that focuses on the content your consumers care about most, and nothing else. Sign up free in seconds, no credit card required!'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { hid: 'robots', name: 'robots', content: 'https://singlelink.co/robots.txt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        hid: 'slpa',
        src: '/slpa.js',
        defer: true,
        'data-domain': 'singlelink.co',
        async: true
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [{ src: "@/plugins/aos", ssr: false }],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  /*
  ** Generate Falback 404 Page
  */
 generate: {
   fallback: true
 }
}
