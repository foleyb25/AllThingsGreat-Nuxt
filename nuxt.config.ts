// https://nuxt.com/docs/api/configuration/nuxt-config

// NOTE: scss styling overrides tailwind styling

export default defineNuxtConfig({
 
   plugins: [
     { src: '~/plugins/super-matomo-plugin.client.js', ssr: false }
   ],

   ssr:true,

  // You can also import tailwind with modules and @nuxtjs/tailwindcss dev dependency
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-gtag'
    // '@vite-pwa/nuxt'
  ],

  gtag: {
    id: 'G-NQTTSR0EPB',
    config: {
      page_title: "AllThingsGreat"
    }
  },

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
      ],
      script: [
        {
          src: "https://platform.twitter.com/widgets.js",
          body: true
        },
        {
          src: "https://www.instagram.com/embed.js",
          body: true
        }
      ]
    }
  },

  //Pull your .env variables here. to use in application call - {testKey} = useRuntimeConfig()
  //To expose variables to browser put keys inside of public
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_URL
    }
  }
})
