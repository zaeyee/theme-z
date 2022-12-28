<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import type { Theme } from '../'
import { withBase } from 'vitepress'

const props = defineProps<{
  image: Theme.ThemeableImage
  alt?: string
}>()

const getImageObj = (image: Theme.Image) => {
  return typeof image !== 'string' ? image : { src: image }
}

const imageArr = computed(() => {
  if (typeof props.image === 'string' || 'src' in props.image) {
    return [getImageObj(props.image)]
  }
  const lightImage = getImageObj(props.image.light)
  const darkImage = getImageObj(props.image.dark)
  return [lightImage, darkImage]
})
</script>

<template>
  <img
    v-for="(item, index) in imageArr"
    :key="item.src"
    class="VPImage"
    :class="imageArr.length === 2 && (index === 1 ? 'dark' : 'light')"
    :src="withBase(item.src)"
    :alt="item.alt"
  />
</template>

<style scoped>
html:not(.dark) .VPImage.dark {
  display: none;
}
.dark .VPImage.light {
  display: none;
}
</style>
