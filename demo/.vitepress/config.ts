import { defineConfigWithTheme } from 'vitepress'
import path from 'path'

import type { ThemeConfig } from '../../src/types'
import baseConfig, { getPosts } from '../../src/config'

export default async () =>
  defineConfigWithTheme<ThemeConfig>({
    extends: baseConfig,
    title: 'Zaeyee',
    description: 'Zaeyee space',
    lastUpdated: true,
    cleanUrls: 'with-subfolders',
    themeConfig: {
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg'
      },
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
      sidebar: [],
      posts: await getPosts(path.join(__dirname, '../posts'))
    }
  })
