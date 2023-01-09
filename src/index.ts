import type { Theme } from 'vitepress'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import './style.css'

import Layout from './components/ZApp.vue'
import NotFound from './components/ZNotFound.vue'

export default {
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

export type { ThemeConfig } from './types'
