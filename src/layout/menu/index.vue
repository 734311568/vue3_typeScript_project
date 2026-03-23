<template>
  <div class="menu">

    <template v-for="(item, index) in menuList" :key="item.path">
     
     
      <!--没有子路由-->
    <template v-if="!item.children">
        <el-menu-item :index="item.path" v-if="!item.hidden" @click="goRouter">
        <template #title>
          <!---icon 图标-->
          <el-icon><component :is="item.icon"></component></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
      </template>
      <!--有一个子路由-->
      <template v-if="item.children && item.children.length === 1" >
     <el-menu-item :index="item.children[0].path" v-if="!item.children[0].hidden">

        <template #title>
          <el-icon><component :is="item.children[0].icon"></component></el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
      </template>
 
    <template v-if="item.children && item.children.length > 1" >
      <!--有多个子路由-->
        <el-sub-menu :index="item.path"   v-if="!item.hidden">
          <template #title >
             <el-icon><component :is="item.icon"></component></el-icon>
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

//获取用户菜单
defineProps(['menuList'])
//定义菜单点击事件

const goRouter = (vc:any) => {
 console.log(vc)
}

</script>
 <!--递归组件-->
<script lang="ts">
export default {
    name: 'Menu'
}
</script>
<style scoped lang='scss'></style>