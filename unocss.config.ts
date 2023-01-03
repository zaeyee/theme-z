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
      cssExtend: {
        h1: {
          'margin-bottom': '2rem'
        },
        p: {
          margin: '1.25em 0'
        },
        a: {
          'text-decoration': 'none',
          'border-bottom': '1px solid rgba(125,125,125,.3)',
          transition: 'border .3s ease-in-out'
        },
        'a:hover': {
          'border-bottom-color': 'var(--un-prose-links)'
        },
        hr: {
          width: '50px',
          margin: '2em auto',
          'border-bottom': 'none'
        }
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup(), transformerCompileClass()],
  safelist: Object.keys(lucide.icons).map(key => 'i-lucide:' + key)
})
