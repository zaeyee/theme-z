import { defineConfig, presetUno, presetAttributify, presetIcons, transformerDirectives } from 'unocss'
import lucide from '@iconify-json/lucide/icons.json'

export default defineConfig({
  rules: [],
  shortcuts: {},
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()],
  safelist: Object.keys(lucide.icons).map(key => 'i-lucide:' + key)
})
