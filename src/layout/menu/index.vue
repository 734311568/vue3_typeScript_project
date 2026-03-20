<template>
  <div class="menu">

    <template v-for="(item, index) in menuList" :key="item.path">
     
     
      <!--没有子路由-->
    <template v-if="!item.children">
        <el-menu-item :index="item.path" v-if="!item.hidden">
        <template #title>
          <span>标:&nbsp;</span>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      </template>
      <!--有一个子路由-->
      <template v-if="item.children && item.children.length === 1" >
     <el-menu-item :index="item.children[0].path" v-if="!item.children[0].hidden">

        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
      </template>
 
    <template v-if="item.children && item.children.length > 1" >
      <!--有多个子路由-->
        <el-sub-menu :index="item.path"   v-if="!item.hidden">
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
          <!--递归组件-->
          <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
      
    </template>
    </template>
  </div>
</template>

<script setup lang='ts'>
import { el } from 'element-plus/es/locale/index.mjs';
import { te } from 'element-plus/lib/locale/index.js';
import { ref } from 'vue'
//获取用户菜单
defineProps(['menuList'])


</script>
 <!--递归组件-->
<script lang="ts">
export default {
    name: 'Menu'
}
</script>
<style scoped lang='scss'></style>