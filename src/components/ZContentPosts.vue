<script setup lang="ts">
import type { Ref } from 'vue'
import type { Post } from '../types'
import { formatDate } from '../utils'

const { theme } = useData()
const posts: Ref<Post[]> = theme.value.posts

console.log(posts)

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isSameYear = (a: Date | string | number, b: Date | string | number) => a && b && getYear(a) === getYear(b)
</script>

<template>
  <div prose>
    <template v-if="!posts.length">
      <div py-2 op-50>nothing here yet</div>
    </template>

    <template v-for="(post, idx) in posts" :key="post.path">
      <div v-if="!isSameYear(post.date, posts[idx - 1]?.date)" relative h-16 pointer-events-none>
        <span text-32 op10 absolute left--2rem top--1rem font-bold>{{ getYear(post.date) }}</span>
      </div>
      <a block p-4 b-none rounded-lg transition-colors duration-300 hover="bg-gray-50" :href="post.path">
        <div class="">{{ post.title }}</div>
        <div text-sm color-gray-500>{{ formatDate(post.date) }}</div>
      </a>
    </template>
  </div>
</template>
