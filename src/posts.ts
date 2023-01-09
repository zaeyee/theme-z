import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import { createMarkdownRenderer, MarkdownRenderer } from 'vitepress'

import type { Post } from './types'

// let md: MarkdownRenderer

function getPost(file: string, postDir: string, asFeed = false): Post {
  const fullPath = path.join(postDir, file)
  const src = fs.readFileSync(fullPath, 'utf-8')
  const { data, excerpt } = matter(src, { excerpt: true })

  const post: Post = {
    title: data.title,
    href: `/posts/${file.replace(/\.md$/, '.html')}`,
    date: formatDate(data.date),
    // excerpt: excerpt && md.render(excerpt),
    excerpt: excerpt
  }

  // only attach these when building the RSS feed to avoid bloating the client bundle size
  if (asFeed) {
    post.data = data
  }

  return post
}

function formatDate(date: string | Date): Post['date'] {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}

export async function getPosts(postDir: string, asFeed = false) {
  // md = md || (await createMarkdownRenderer(process.cwd()))
  return fs
    .readdirSync(postDir)
    .map(file => getPost(file, postDir, asFeed))
    .sort((a, b) => b.date.time - a.date.time)
}
