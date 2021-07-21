
/*
 * https://vitejs.dev/config/
 * vite 配置文件
 */

import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import config from './src/config'

const env = process.argv[process.argv.length - 1]
const base = config[env]

export default defineConfig({
  base: base.cdn,
  plugins: [
    // 设置热更新
    reactRefresh(),
    // 按需加载静态资源
    vitePluginImp({
      libList: [
          {
            libName: "antd",
            style: (name) => `antd/lib/${name}/style/index.less`,
          },
        ],
    })
  ],
  css: {
    // css预处理器：preprocessorOptions
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
      scss: {
        // 引入 variables.scss 这样就可以在全局中使用 variables.scss中预定义的变量了
        additionalData: '@import "./src/styles/variables.scss";'
      }
    }
  },
  // 设置路径别名 alias
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src/') // src 路径
    }
  }
})
