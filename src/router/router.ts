import { hi } from "element-plus/es/locale/index.mjs";

//对外暴露配置路由（常量路由）
export const route = [
  
    {
    path: "/login",
    //使用懒加载
    component: () => import("@/views/login/index.vue"),
    name: "login", 
    meta: { title: "登录" },
    hidden: true //标题在菜单中是否隐藏  true 隐藏  |false 不隐藏
  },
  {
    path: "/",
    //使用懒加载
    component: () => import("@/layout/index.vue"),
    name: "home",
    meta: { title: "layout" },
    hidden: false,
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "首页" },
        hidden: false,
      },
      {
        path: "/about",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "关于" },
        hidden: false,
      },
         {
        path: "/about1",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "关于1" },
        hidden: false,
      },
    ],  
  },

  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404", 
    meta: { title: "404" },
    hidden: true
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound", //任意路由
    redirect: "/404",
    meta: { title: "任意路由" },
    hidden: true
  },
];
