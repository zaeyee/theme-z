import { defineConfigWithTheme } from 'vitepress'
import { Theme } from './theme/types'

export default defineConfigWithTheme<Theme.Config>({
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
      { icon: 'twitter', link: 'https://twitter.com/zaeyee' },
      { icon: 'github', link: 'https://github.com/zaeyee' }
    ],
    sidebar: []
  }
})
