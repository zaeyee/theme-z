import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass
} from 'unocss'
import lucide from '@iconify-json/lucide/icons.json'

export default defineConfig({
  rules: [],
  shortcuts: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography({
      cssExtend: {}
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerCompileClass()],
  safelist: Object.keys(lucide.icons).map(key => 'i-lucide:' + key)
})
