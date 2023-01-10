<script setup lang="ts">
import type { Ref } from 'vue'
import type { Post } from '../types'
import { formatDate } from '../utils'

const { theme } = useData()
const posts: Ref<Post[]> = theme.value.posts

console.log(posts)

type MaybeDate = Date | string | number

const getYear = (a: MaybeDate) => new Date(a).getFullYear()
const isSameYear = (a: MaybeDate, b: MaybeDate) => a && b && getYear(a) === getYear(b)
</script>

<template>
  <div class="content">
    <div v-if="!posts.length" py-2 c-gray-500>nothing here yet</div>

    <template v-for="(post, idx) in posts" :key="post.path">
      <div v-if="!isSameYear(post.date, posts[idx - 1]?.date)" relative h-16 pointer-events-none>
        <span text-32 op10 absolute left--2rem top--1rem font-bold>{{ getYear(post.date) }}</span>
      </div>
      <a block p-4 b-none rounded-lg transition-colors duration-300 hover="bg-gray-50" :href="post.path">
        <div>{{ post.title }}</div>
        <div text-sm c-gray-500>{{ formatDate(post.date) }}</div>
      </a>
    </template>
  </div>
</template>
