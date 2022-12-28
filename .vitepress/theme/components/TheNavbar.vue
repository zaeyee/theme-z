<script setup lang="ts">
const { theme } = useData()
</script>

<template>
  <header>
    {{ theme }}
    <a href="/">
      <VPImage :image="theme.logo" />
    </a>
  </header>
</template>
