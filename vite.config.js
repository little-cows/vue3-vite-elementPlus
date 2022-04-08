import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalGlobals from 'rollup-plugin-external-globals'
export default defineConfig({
    plugins: [vue()],
    build: {
        // 打包时不打包elementPlus
        rollupOptions: {
            external: ['vue', 'element-plus'],
            plugins: [
                externalGlobals({
                    vue: 'Vue',
                    'element-plus': 'ElementPlus',
                })
            ]
        }
    }
})