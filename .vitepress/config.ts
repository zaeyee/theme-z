import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: './src',
  title: 'Zaeyee',
  description: 'Zaeyee space',
  lastUpdated: true,
  themeConfig: {
    logo: '/public/logo.png',
    siteTitle: false,
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
