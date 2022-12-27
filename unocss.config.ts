import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  rules: [],
  shortcuts: {},
  presets: [presetUno(), presetAttributify(), presetIcons()]
})
