import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import type { Post } from './types'

export const getPosts = async (postDir: string) =>
  fs
    .readdirSync(postDir)
    .filter(file => file !== 'index.md')
    .map(file => {
      const fullPath = path.join(postDir, file)
      const src = fs.readFileSync(fullPath, 'utf-8')
      const { data, excerpt } = matter(src, { excerpt: true })

      return {
        title: data.title,
        path: `/posts/${file.replace(/\.md$/, '.html')}`,
        date: data.date,
        // excerpt: excerpt && md.render(excerpt),
        excerpt,
        data
      } as Post
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
