//对外暴露配置路由（常量路由）
export const route = [
  {
    path: "/",
    //使用懒加载
    component: () => import("@/layout/index.vue"),
    name: "home", //命名路由
  },
  {
    path: "/login",
    //使用懒加载
    component: () => import("@/views/login/index.vue"),
    name: "login", //命名路由
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404", //命名404 路由
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound", //任意路由
    redirect: "/404",
  },
];
