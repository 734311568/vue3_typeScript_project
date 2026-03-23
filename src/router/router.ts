
//对外暴露配置路由（常量路由）
export const route = [
  {
    path: "/login",
    //使用懒加载
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: { title: "登录" },
    hidden: true,//标题在菜单中是否隐藏  true 隐藏  |false 不隐藏
    icon: "Promotion" //菜单图标支持element-plus图标
  },
  {
    path: "/",
    //使用懒加载
    component: () => import("@/layout/index.vue"),
    name: "home",
    meta: { title: "layout" },
    hidden: true,
    redirect: "/home",//直接转发到二级路由
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: { title: "首页" },
        hidden: false,
        icon: "HomeFilled"

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
  {
    path: "/screen",
    component: () => import("@/views/screen/index.vue"),
    
    meta: { title: "数据大屏" },
    hidden: false,
    icon: "Histogram"
    
  },

//权限管理路由
  {
    path: "/acl",
    component: () => import("@/layout/index.vue"),
    name: "acl",
    meta: { title: "权限管理" },
    hidden: false,
    icon: "lock",
    children:[
   //角色管理
  {
    path: "/acl/role",
    component: () => import("@/views/acl/role/index.vue"),
    name: "role",
    meta: { title: "角色管理" },
    hidden: false,
    icon: "Avatar"
  },
  //菜单管理
  {
    path: "/acl/permssion",
    component: () => import("@/views/acl/permssion/index.vue"),
    name: "permssion",
    meta: { title: "菜单管理" },
    hidden: false,
    icon: "Lock"
  }, 
  //用户管理
  {
    path: "/acl/user",
    component: () => import("@/views/acl/user/index.vue"),
    name: "user",
    meta: { title: "用户管理" },
    hidden: false,
    icon: "User"
  },

    ]
  },
  //商品管理
  {
    path: "/product",
    component: () => import("@/layout/index.vue"),
    name: "product",
    meta: { title: "商品管理" },
    hidden: false,
    icon: "GoodsFilled", 
    children:[
      //sku管理
      {
        path: "/product/sku",
        component: () => import("@/views/product/sku/index.vue"),
        name: "sku",
        meta: { title: "sku管理" },
        hidden: false,
        icon: "ShoppingCart"
      },
      //spu管理
      {
        path: "/product/spu",
        component: () => import("@/views/product/spu/index.vue"),
        name: "spu",
        meta: { title: "spu管理" },
        hidden: false,
        icon: "ShoppingCartFull"  
      },
      //品牌管理
      {
        path: "/product/trdemake",
        component: () => import("@/views/product/trdemake/index.vue"),
        name: "trdemake",
        meta: { title: "品牌管理" },
        hidden: false,
        icon: "Handbag"
      },
      //attr管理
      {
        path: "/product/attr",
        component: () => import("@/views/product/attr/index.vue"),
        name: "attr",
        meta: { title: "attr管理" },
        hidden: false,
        icon: "ShoppingTrolley"
      },  
      
    ]   
  }


];
