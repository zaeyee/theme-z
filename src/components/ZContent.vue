<script setup lang="ts">
const { frontmatter } = useData()
</script>

<template>
  <main px-7 py-10>
    <ZContentPosts v-if="frontmatter.posts" />
    <ZContentProjects v-else-if="frontmatter.projects" />
    <ZContentPost v-else />
  </main>
</template>
