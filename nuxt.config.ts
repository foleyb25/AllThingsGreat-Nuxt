// https://nuxt.com/docs/api/configuration/nuxt-config

// NOTE: scss styling overrides tailwind styling

export default defineNuxtConfig({

  // You can also import tailwind with modules and @nuxtjs/tailwindcss dev dependency
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // '@vite-pwa/nuxt'
  ],

  // pwa: {
  //   manifest: {
  //     name: 'All Things Great',
  //     short_name: 'ATG',
  //     description: "All Things Great Application",
  //     lang: 'fa',
  //     useWebmanifestExtension: false,
  //     icons: [
  //       {
  //         src: 'icons/64.png',
  //         sizes: "64x64",
  //         type: 'image/png'
  //       },
  //       {
  //         src: 'icons/144.png',
  //         sizes: "144x144",
  //         type: 'image/png'
  //       },
  //       {
  //         src: 'icons/196.png',
  //         sizes: "196x196",
  //         type: 'image/png'
  //       },
  //       {
  //         src: 'icons/512.png',
  //         sizes: "512x512",
  //         type: 'image/png'
  //       }
  //     ]
  //   },
  //    devOptions: {
  //     enabled: true,
  //     type: 'module'
  //    },

  //    meta: {
  //     charset: 'utf-8',
  //     appleStatusBarStyle: 'black-translucent',
  //     favicon: true,
  //     name: 'All Things Great',
  //     author: 'Author Name',
  //     description: 'Description of the application',
  //     theme_color: '#317EFB',
  //     lang: 'en',
  //     ogType: 'website',
  //     ogSiteName: 'All Things Great',
  //     ogTitle: 'All Things Great - App Title',
  //     ogDescription: 'Description for OpenGraph',
  //     ogHost: 'https://example.com',
  //     ogImage: 'https://example.com/static/image.jpg',
  //     ogUrl: 'https://example.com',
  //     twitterCard: 'summary_large_image',
  //     twitterSite: '@twitterHandle',
  //     twitterCreator: '@twitterHandle',
  //     nativeUI: true
  //   }
  // },


  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      ],
  },

  //configure css files
  css: ['~/assets/styles/main.css',
  '@fortawesome/fontawesome-svg-core/styles.css'
],

  //define meta data for SEO and layout transition for cool animation
  app: {
    // Enable page animations
    pageTransition: { name: 'page', mode: 'out-in' },
    // Enable layout animations
    // layoutTransition: { name: 'layout', mode: 'out-in' },

    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'All Things Great',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'All Things Great' }
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },

  //Pull your .env variables here. to use in application call - {testKey} = useRuntimeConfig()
  //To expose variables to browser put keys inside of public
  runtimeConfig: {
    public: {
      apiBase: (process.env.NUXT_ENV === 'development') ? "http://localhost:8080/api/v2" : "https://allthingsgreatapi.com/api/v2",
    }
  }
})
