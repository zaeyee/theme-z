<script setup lang="ts">
const { theme } = useData()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header flex="~" justify-between items-center px-5 py-3>
    <a href="/" flex-none w-10 h-10>
      <ZImage :image="theme.logo" />
    </a>
    <div flex="~" items-center>
      <nav>
        <a v-for="(item, index) in theme.nav" :key="index" :href="item.link" class="nav-item">
          {{ item.text }}
        </a>
      </nav>
      <nav flex="~" items-center b-l>
        <a v-for="(item, index) in theme.socialLinks" :key="index" :href="item.link" class="nav-item">
          <div text-lg :class="item.icon"></div>
        </a>
      </nav>
      <div b-l text-lg class="nav-item" @click="toggleDark()">
        <div v-show="!isDark" i-lucide:sun></div>
        <div v-show="isDark" i-lucide:moon></div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-item {
  @apply px-2.5 color-black/50 hover:color-black cursor-pointer transition-colors duration-300;
}
</style>
