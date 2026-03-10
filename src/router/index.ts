//通过vue-router管理路由
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/home/index.vue";
import Login from "../views/login/index.vue";

import { constRouter } from "./router";

//创建路由
createRouter({
  history: createWebHashHistory(),
  routes: [constRouter],
  //滚动行为
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
