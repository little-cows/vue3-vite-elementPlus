import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import path from "path";
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ["vue", "vue-router", "vuex"],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    build: {
        // 配置别名
        resolve: {
            alias: {
                "~": `${path.resolve(__dirname, "./src")}`,
            },
        },
    },
});