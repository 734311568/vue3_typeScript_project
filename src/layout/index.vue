<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <div class="layout_sider" :class="{ fold: settingStore.fold ? true : false  } ">
      <Logo></Logo>
      <!--滚动组件-->
      <el-scrollbar class="scrollbar" >
        <!---菜单组件-->
        <el-menu   :collapse="settingStore.fold ? true : false"  background-color="#001529" text-color="white" :default-active="$route.path">
        <!---根据路由动态生成菜单   父组件给子组件传值-->
          <Mnues :menuList="userStore.menuRoutes"></Mnues>  
        </el-menu>
      </el-scrollbar>
    </div>
    <!--顶部导航-->
    <div class="layout_tabbar" :class="{ fold: settingStore.fold ? true : false  } ">
      <!--laytout_tabbar组件-->
      <Tabbar></Tabbar>
    </div>
    <!-- 右侧内容 -->
    <div class="layout_main" :class="{ fold: settingStore.fold ? true : false  } ">
      <!---路由出口-->
      <layoutMain></layoutMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
//左侧菜单logo的子组件S
import Logo from "@/layout/logo/index.vue";
//引入菜单组件
import Mnues   from "@/layout/menu/index.vue";
//获取用户相关的小仓库
import useUserStore from "@/store/modules/user";  
//引入封装一层路由main 
import layoutMain from "@/layout/main/index.vue"; 
//引入路由
import { useRoute } from "vue-router";
//引入顶部导航组件
import Tabbar from "@/layout/tabbar/index.vue";
import useLayoutSettingStore from "@/store/modules/setting";

let settingStore = useLayoutSettingStore();


let $route = useRoute();
let userStore = useUserStore();
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100vh;

  .layout_sider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    color: white;
    transform: all 0.3s ease-in-out ;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height); //100vh-logo高度

      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: $base-menu-min-width;
;
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    transform: all 0.3s ease-in-out ;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
    top: 0px;
    left: $base-menu-width;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    transform: all 0.3s ease-in-out ;
    overflow: auto;
       &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
