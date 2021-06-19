
/*
 * https://vitejs.dev/config/
 * vite 配置文件
 */

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [
    // 设置热更新
    reactRefresh(),
  ],
  // 设置路径别名 alias
  resolve: {
    alias: {
      '@': '/src',
    }
  }
})
