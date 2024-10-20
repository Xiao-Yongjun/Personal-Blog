import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 设置别名路径
      '@': '/src'
    }
  }
})
