<script setup lang="ts">
const { page } = useData()
</script>

<template>
  <ZNavbar />
  <main prose prose-stone py-10 m-auto>
    <h1>{{ page.title }}</h1>
    <Content />
  </main>
</template>
