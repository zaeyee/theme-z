import type { Theme } from 'vitepress'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './style.css'

// import DefaultTheme from 'vitepress/theme'
import Layout from './layouts/Layout.vue'
import NotFound from './layouts/NotFound.vue'

export default {
  // ...DefaultTheme,
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
  },

  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  }
} as Theme

export type { Config } from './types/config'
