import { defineConfigWithTheme } from 'vitepress'
import type { Config } from '../../src/types'
import zConfig from '../../src/config'

export default defineConfigWithTheme<Config>({
  extends: zConfig,
  title: 'Zaeyee',
  description: 'Zaeyee space',
  lastUpdated: true,
  themeConfig: {
    // logo: '/public/logo.svg',
    // logo: {
    //   src: '/public/logo.svg',
    //   alt: 'logo'
    // },
    logo: {
      light: '/public/logo.svg',
      dark: '/public/logo-dark.svg',
      alt: ''
    },
    // logo: {
    //   light: { src: '/public/logo.svg' },
    //   dark: { src: '/public/logo-dark.svg' }
    // },
    nav: [
      { text: 'Blog', link: '/posts' },
      { text: 'Projects', link: '/projects' },
      { text: 'Talks', link: '/talks' },
      { text: 'Podcasts', link: '/podcasts' },
      { text: 'Streams', link: '/streams' },
      { text: 'Demos', link: '/demos' }
    ],
    socialLinks: [
      {
        icon: 'i-lucide:heart',
        link: 'https://antfu.me/sponsors-list'
      },
      {
        icon: 'i-lucide:twitter',
        link: 'https://twitter.com/antfu7'
      },
      {
        icon: 'i-lucide:github',
        link: 'https://github.com/antfu'
      }
    ],
    sidebar: []
  }
})
