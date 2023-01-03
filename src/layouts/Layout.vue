<script setup lang="ts">
const { page } = useData()
const isDark = useDark()
</script>

<template>
  <ZNavbar />
  <main class="px-7 py-10">
    <article class="prose prose-stone m-auto max-w-80ch" :class="{ 'prose-invert': isDark }">
      <h1>{{ page.title }}</h1>
      <Content />
    </article>
  </main>
</template>
