<script setup lang="ts">
const { page } = useData()
</script>

<template>
  <ZNavbar />
  <main class="font-mono px-7 py-10">
    <article class="prose prose-stone m-auto max-w-80ch">
      <h1>{{ page.title }}</h1>
      <Content />
    </article>
  </main>
</template>
