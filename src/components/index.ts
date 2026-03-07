import type { App } from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import Pagination from "@/components/Pagination/index.vue";

let allGloablComponent = { SvgIcon, Pagination };

//对外暴露插件对象
export default {
  // 注册项目的全部全局组件
  install(app: App) {
    //遍历Object的keys
    Object.keys(allGloablComponent).forEach((key) => {
      //注册为全局组件
      app.component(key, allGloablComponent[key]);
    });
  },
};
