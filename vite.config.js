import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // 配置 @ 为 src 的别名
      { find: '@', replacement: '/src' },
    ],
  },
  plugins: [
    uni(),
  ],
})
