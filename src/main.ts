import globalComponents from "@/components";

import "virtual:svg-icons-register";

import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import '@/styles'
import App from "./App.vue";
const app = createApp(App);
app.use(ElementPlus, { locale: zhCn }); 
//注册项目的全局组件
app.use(globalComponents);
app.mount("#app");