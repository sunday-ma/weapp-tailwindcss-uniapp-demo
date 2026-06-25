import { resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import Uni from '@uni-helper/plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv } from 'vite'
import { WeappTailwindcss } from 'weapp-tailwindcss/vite'

export default defineConfig(async ({ command, mode }) => {
  console.log('当前运行环境：', command)
  console.log('当前运行模式：', mode)
  const env = loadEnv(mode, resolve(process.cwd(), 'env'))
  console.log('当前环境变量：', env)
  console.log('当前运行平台：', process.env.UNI_PLATFORM)

  return {
    envDir: './env', // 自定义env目录
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      UniPages({
        dts: 'src/uni-pages.d.ts',
        exclude: ['src/pages/example', '**/**/example/*.*'],
        subPackages: [],
        homePage: 'pages/auth/index',
      }),
      UniManifest(),
      UniLayouts(),
      Uni(),
      WeappTailwindcss({
        rem2rpx: true,
        cssEntries: [
          resolve(process.cwd(), 'src/app.css'),
        ],
      }),
      AutoImport({
        imports: [
          'vue',
          'uni-app',
        ],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/composables', 'src/stores', 'src/utils'],
        vueTemplate: true,
      }),
    ],
  }
})
