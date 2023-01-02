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
    <nav flex="~" justify-center items-center>
      <a
        v-for="(item, index) in theme.nav"
        :key="index"
        px-2.5
        color="black/50 hover:black/70"
        transition-colors
        :href="item.link"
      >
        {{ item.text }}
      </a>
      <a
        v-for="(item, index) in theme.socialLinks"
        :key="index"
        :href="item.link"
        color="black/50 hover:black"
        px-2.5
        transition-colors
      >
        <div text-lg :class="item.icon"></div>
      </a>
      <div b-l px-2.5 text-lg cursor-pointer transition-colors color="black/50 hover:black" @click="toggleDark()">
        <div v-show="!isDark" i-lucide:sun></div>
        <div v-show="isDark" i-lucide:moon></div>
      </div>
    </nav>
  </header>
</template>
