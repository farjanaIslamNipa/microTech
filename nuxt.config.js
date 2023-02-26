export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',

  buildModules: [
    '@nuxt/image'
  ],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: `%s ${process.env.VUE_APP_NAME}`,
    titleTemplate: `${process.env.VUE_APP_NAME} | Onsite Tech Specialist for all types of Computers, Laptops and more`,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Geekify - The fastest growing Micro-technology service provider in Australia, providing computer and technology services nationally.'
      },
      {name: 'format-detection', content: 'telephone=no'},
      {hid: 'fb:app_id', name: 'fb:app_id', content: '883712276121290'},
      {hid: 'og:site_name', property: 'og:site_name', content: `${process.env.VUE_APP_NAME}`},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Geekify - The fastest growing Micro-technology service provider in Australia, providing computer and technology services nationally.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        contents: 'geekify, geeks crs, geeks, geeks australia, geekify au, best pc fixer, computer services sydney, dial a geek sydney, pc moving slow, computer help sydney, computer repairs surry hills, geeksoncall, imac repairs sydney, computer repairs preston, Geek Mobile, Mac Computer Repair, why is my pc so slow, Mac Expert, Fix Slow Computer, jim\'s computer services, iMac Repair Services, mac repair, home pc repair, get rid of viruses, geek squad, how to fix a slow computer, slow pc fix, data storage recovery, computer learning for seniors, fix lap top, computer fix sydney, computer repairs bondi junction, computer repairs maroubra, why is my desktop so slow, my computer loads slow, Home Networking, Geeks Sydney, computer repair hawthorn, IT Infrastructure Services, Mac Recovery, my computer is slow how to fix, IT Service Contract, why is my pc lagging, Jims Computer Services, Geeks CRS, You point it we fix it, geeks in sydney, laptop rescue sydney, Mobile Geeks, computer loading slowly, dial a geek, computer repairs footscray, computer repairs brunswick, Mac Computer Services, Mac Computer Backup, Mac Computer Troubleshooting, why is my computer loading so slowly, fix my pc, hard disk drive recovery, computer repairs sydney, why is computer so slow, geekmobile, Super Geek, computer repairs randwick, fix my slow computer, Mac Repair Services, computer geeks sydney, Mac Installation, Geeks2u, computer nerds near me, computer repair sydney cbd, Computer Geeks, mac repairs sydney, geeks to you sydney, geeks2u sydney, the geeks computer service, laptop fix sydney, how to fix computer speed, computer repairs bondi, geekify, my pc is lagging, computer repairs glen iris, computer very slow how to fix, geeks services, Mac Computer Upgrade, geeks4me, GCRS Sydney, apple mac repair near me, geek pc repair, computer courses for seniors, computer courses for the elderly, computer training for seniors, hard disk restore, laptop service sydney, computer repairs north sydney, clean up slow computer, pc repair sydney, computer repair coogee, computer repairs marrickville, laptop repair sydney cbd, buzzageek, it support northern beaches, mac pro services, computer very slow to start, hire a geek, fix my mac near me, Mac Keyboard Repair, local computer classes for seniors, Fix Slow Windows, Geeks CRS Sydney'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://image.geekify.au/meta_tag/social_image/geekify-social-image.jpg'
      },
      {hid: 'og:image:alt', property: 'og:image:alt', content: `${process.env.VUE_APP_NAME}`},
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'Geekify - The fastest growing Micro-technology service provider in Australia, providing computer and technology services nationally.'
      }
    ],
    script: [
      // Bootstrap 5
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
        integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
        crossorigin: "anonymous"
      },
      // Google autocomplete api
      // {src: `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLE_MAP_API_KEY}&libraries=places`}
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/favicon-512.png', sizes: '512*512'},
      // fontawesome icon css
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css',
        integrity: 'sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
        crossOrigin: 'anonymous'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~plugins/vue-js-modal.js', ssr: false},
    {src: '~plugins/vue-multi-select.js', ssr: false},
    {src: '~plugins/google-auto-complete.js', ssr: false},
    {src: '~plugins/toastMessage', ssr: false},
    {src: "~plugins/v-date-picker", ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    [
      '@nuxtjs/recaptcha',
      {
        siteKey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,
        version: 3
      }
    ],
    '@nuxt/image'
  ],

  server: {
    port: 8080
  },

  loading: {
    color: "#F76A2A",
    height: '20px'
  },

  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,    // Site key for requests
    version: 3
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      common: {
        'Accept': 'application/json',
        'Client-Secret': process.env.VUE_APP_SECRET
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null
  },
  env: {
    app_name: process.env.VUE_APP_NAME,
    secret: process.env.VUE_APP_SECRET,
    base_url: process.env.VUE_APP_BASE_URL,
    after_pay_js_production_library: process.env.VUE_APP_AFTERPAY_JS_LIBRARY,
    google_api_key: process.env.VUE_APP_GOOGLE_MAP_API_KEY
  },

  router: {
    extendRoutes(nuxtRoutes) {
      nuxtRoutes.map((route) => {
        route.path = route.path.replace('/website', '')
        route.name = route.name.replace('website-', '')
        return route
      })
    }
  },
  image: {
    providers: {
      customProvider: {
        name: 'customLocalImage',
        provider: '~/providers/customLocalImage'
      }
    },
    provider: 'customLocalImage',
    domains: [process.env.VUE_APP_API_DOMAIN],
    dir: 'assets',
    alias: {
      unsplash: process.env.VUE_APP_API_URL
    }
  }
}
