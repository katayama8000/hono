import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router"; // 追記

createApp(App).use(router).mount("#app");
