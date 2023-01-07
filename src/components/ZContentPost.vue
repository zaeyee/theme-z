<script setup lang="ts">
const isDark = useDark()
const { page } = useData()
</script>

<template>
  <article prose :class="{ 'prose-invert': isDark }">
    <h1>{{ page.title }}</h1>
    <Content />
  </article>
</template>
