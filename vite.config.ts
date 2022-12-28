import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      dts: true,
      imports: ['vue', 'vitepress']
    }),
    Components({
      dirs: ['.vitepress/theme/components'],
      dts: true,
      types: [{ from: 'vitepress', names: ['Content'] }]
    }),
    Unocss()
  ]
})
