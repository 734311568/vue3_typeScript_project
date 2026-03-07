import "virtual:svg-icons-register";
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import App from "./App.vue";
//import 'virtual:svg-icons-register'
const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});
//全局引用svg组件
//import   SvgIcon   from '@/components/SvgIcon/index.vue'
console.log(import.meta.env);
//app.component('SvgIcon',SvgIcon)
//引入自定义插件的对象注册全局组件
import globalComponents from "@/components";
//注册项目的全局组件
app.use(globalComponents);
app.mount("#app");
