import { resolve } from 'node:path'
import process from 'node:process'
import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'
import { loadEnv } from 'vite'

const {
  VITE_APP_NAME,
} = loadEnv(process.env.NODE_ENV!, resolve(process.cwd(), 'env'))

export default defineUniPages({
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: VITE_APP_NAME,
    // navigationStyle: 'custom',
  },
  pages: [],
  subPackages: [],
  entryPagePath: 'pages/auth/index',
})
