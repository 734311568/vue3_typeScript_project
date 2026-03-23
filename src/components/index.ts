import SvgIcon from "@/components/SvgIcon/index.vue";
import Pagination from "@/components/Pagination/index.vue";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import type { App } from "vue";

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
    //注册element-plus的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
