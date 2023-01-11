<script setup lang="ts">
const { frontmatter: fm } = useData()
</script>

<template>
  <div class="content">
    <div text-3xl font-800 mb-0>Projects</div>
    <p mt-1 italic c-gray-500>{{ fm.description }}</p>
    <div v-for="key in Object.keys(fm.projects)" :key="key">
      <div mt-8 mb-3>{{ key }}</div>
      <div grid="~ cols-1 sm:cols-2 gap-3">
        <a
          v-for="(item, idx) in fm.projects[key]"
          :key="idx"
          :href="item.link"
          target="_blank"
          flex
          items-center
          p-4
          b-none
          shadow
          rounded-lg
          transition-colors
          duration-300
          dark="bg-gray-900/30"
          hover="bg-gray-100 dark:bg-gray-900"
        >
          <div text-3xl c-gray-500>
            <i :class="item.icon"></i>
          </div>
          <div ml-4>
            <div>{{ item.name }}</div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div text-sm mt-0.5 c-gray-500 v-html="item.desc"></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
