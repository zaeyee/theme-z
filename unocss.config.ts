import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import lucide from '@iconify/json/json/lucide.json'

export default defineConfig({
  rules: [],
  shortcuts: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        width: '1.125em',
        height: '1.125em',
        'vertical-align': 'middle'
      }
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono'
      }
    }),
    presetTypography({
      cssExtend: {
        h1: {
          'font-weight': 800,
          'margin-bottom': '2rem'
        },
        p: {
          margin: '1.25em 0'
        },
        a: {
          'text-decoration': 'none',
          'border-bottom': '1px solid rgba(125, 125, 125, .3)',
          transition: 'border .3s ease-in-out'
        },
        'a:hover': {
          'border-bottom-color': 'var(--un-prose-links)'
        },
        hr: {
          width: '50px',
          margin: '2em auto',
          'border-color': 'rgba(125, 125, 125, .3)',
          'border-bottom': 'none'
        }
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: Object.keys(lucide.icons).map(key => 'i-lucide:' + key)
})
