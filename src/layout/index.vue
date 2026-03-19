<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <div class="layout_sider">
      <Logo></Logo>
      <!--滚动组件-->
      <el-scrollbar class="scrollbar">
        <!---菜单组件-->
        <el-menu  background-color="#001529" text-color="white">
          <el-menu-item index="1"  >首页</el-menu-item>
          <el-menu-item index="2"  >数据大屏幕</el-menu-item>
          <!--折叠菜单-->
          <el-sub-menu index="3">
            <template #title>权限管理</template>
            <el-menu-item index="2-1">用户管理</el-menu-item>
            <el-menu-item index="2-2">角色管理</el-menu-item>
            <el-menu-item index="2-3">菜单管理</el-menu-item>
          </el-sub-menu>
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
