<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <div class="layout_sider">
      <Logo></Logo>
      <!--滚动组件-->
      <el-scrollbar class="scrollbar">
        <!---菜单组件-->
        <el-menu background-color="#001529" text-color="white">
        <!---根据路由动态生成菜单   父组件给子组件传值-->
          <Mnues :menuList="userStore.menuRoutes"></Mnues>
        </el-menu>
      </el-scrollbar>
    </div>
    <!--顶部导航-->
    <div class="layout_tabbar">底部导航</div>
    <!-- 右侧内容 -->
    <div class="layout_main">
      <p style="height: 100000px; background-color: red">我是一个段落</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
//左侧菜单logo的子组件
import Logo from "@/layout/logo/index.vue";
//引入菜单组件
import Mnues   from "@/layout/menu/index.vue";
//获取用户相关的小仓库
import useUserStore from "@/store/modules/user";  
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

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height); //100vh-logo高度

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: cyan;
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
    overflow: auto;
  }
}
</style>
