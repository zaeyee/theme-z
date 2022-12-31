import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'

export default () => ({
  vite: {
    plugins: [
      AutoImport({
        dts: '../auto-imports.d.ts',
        imports: ['vue', 'vitepress', '@vueuse/core']
      }),
      Components({
        dirs: ['../src/components'],
        dts: '../components.d.ts',
        types: [{ from: 'vitepress', names: ['Content'] }]
      }),
      UnoCSS()
    ]
  }
})
