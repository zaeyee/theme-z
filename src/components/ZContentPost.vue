<script setup lang="ts">
const { page } = useData()
</script>

<template>
  <article class="ma prose prose-stone dark:prose-invert">
    <h1>{{ page.title }}</h1>
    <Content />
  </article>
</template>
