<script setup lang="ts">
const { theme } = useData()

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isOpen = ref(false)

const route = useRoute()
watch(route, () => {
  isOpen.value = false
})
</script>

<template>
  <header class="header">
    <a href="/" flex-none w-10 h-10>
      <ZImage :image="theme.logo" />
    </a>
    <div class="nav-wrapper" :class="{ show: isOpen }">
      <nav flex flex-col md:flex-row>
        <a v-for="(item, index) in theme.nav" :key="index" :href="item.link" class="nav-item" text-center p-3 md:p-0>
          {{ item.text }}
        </a>
      </nav>
      <nav mt-4 text-center md:mt-0>
        <a v-for="(item, index) in theme.socialLinks" :key="index" :href="item.link" class="nav-item">
          <i :class="item.icon"></i>
        </a>
      </nav>
    </div>
    <div>
      <span class="nav-item" @click="toggleDark()">
        <i v-show="!isDark" i-lucide:sun></i>
        <i v-show="isDark" i-lucide:moon></i>
      </span>
      <span class="nav-item" md:hidden @click="isOpen = !isOpen">
        <i v-show="!isOpen" i-ri:menu-3-fill></i>
        <i v-show="isOpen" i-mingcute:close-line></i>
      </span>
    </div>
  </header>
</template>

<style scoped>
.header {
  @apply bg-$c-bg sticky top-0 p-2 z-999 flex justify-between items-center
    transition-colors duration-500
    md:p-4;
}

.nav-item {
  @apply px-2.5 op-70 cursor-pointer transition-opacity duration-300 hover:op-100;
}

.nav-wrapper {
  @apply flex-1 flex flex-col fixed z--1 top-0 left-0 w-full h-full bg-$c-bg
    pt-56px op-0 invisible translate-y--15px transition-all duration-300
    md:static md:flex-row md:items-center md:justify-end md:bg-transparent md:pt-0 md:op-100 md:visible md:translate-y-0;
}

.nav-wrapper.show {
  @apply op-95 visible translate-y-0;
}
</style>
