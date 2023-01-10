<script setup lang="ts">
const { theme } = useData()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header flex justify-between items-center p-4>
    <a href="/" flex-none w-10 h-10>
      <ZImage :image="theme.logo" />
    </a>
    <div flex items-center>
      <nav>
        <a v-for="(item, index) in theme.nav" :key="index" :href="item.link" class="nav-item">
          {{ item.text }}
        </a>
      </nav>
      <nav b-l>
        <a v-for="(item, index) in theme.socialLinks" :key="index" :href="item.link" class="nav-item">
          <i :class="item.icon"></i>
        </a>
      </nav>
      <span b-l class="nav-item" @click="toggleDark()">
        <i v-show="!isDark" i-lucide:sun></i>
        <i v-show="isDark" i-lucide:moon></i>
      </span>
    </div>
  </header>
</template>

<style scoped>
.nav-item {
  @apply px-2.5 c-black/50 hover:c-black cursor-pointer transition-colors duration-300;
}
</style>
