<script setup lang="ts">
const { frontmatter } = useData()
</script>

<template>
  <main px-7 py-10>
    <ZContentProjects v-if="frontmatter.projects" />
    <ZContentPost v-else />
  </main>
</template>
