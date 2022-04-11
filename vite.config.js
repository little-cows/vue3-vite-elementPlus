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
            resolvers: [ElementPlusResolver({ importStyle: "sass" })],
        }),
    ],
    // 配置别名
    resolve: {
        alias: {
            "~": `${path.resolve(__dirname, "./src")}`,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "~/assets/style/sass/element.scss" as *;`,
            },
        },
    },
    build: {},
});