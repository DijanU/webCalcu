import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   test: {
    environment: 'jsdom',
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: [...configDefaults.exclude, 'dist/**','**/*.stories.*'],
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
})
