//通过vue-router管理路由
import { createRouter, createWebHashHistory } from "vue-router";

import { route } from "./router";

//创建路由
let router = createRouter({
  history: createWebHashHistory(),
  routes: route,
  //滚动行为
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
