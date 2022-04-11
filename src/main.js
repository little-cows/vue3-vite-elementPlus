import "./assets/style/tailwind.css";
import "element-plus/dist/index.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(router).mount("#app");