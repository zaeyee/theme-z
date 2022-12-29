<script setup lang="ts">
const { page } = useData()
</script>

<template>
  <ZNavbar />
  <main px-7 py-10 m-auto max-w-78ch>
    <h1 mb-8 fw-800 color-black text-4xl>{{ page.title }}</h1>
    <Content class="z-article" color="black/65" />
  </main>
</template>
