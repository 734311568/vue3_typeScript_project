import globalComponents from "@/components";
import "@/styles/index.scss";

import "virtual:svg-icons-register";

import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import App from "./App.vue";
import router from "./router";
import pinia from "./store";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(ElementPlus);
//注册项目的全局组件
app.use(globalComponents);
//注册路由
app.use(router);
//注册仓库
app.use(pinia);
app.mount("#app");
