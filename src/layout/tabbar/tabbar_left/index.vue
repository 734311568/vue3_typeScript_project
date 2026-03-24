<template>
  <!--顶部左侧图标静态-->
  <el-icon style="margin-right: 5px" @click="changenIcon">
    <component :is="settingStore.fold ? 'Fold' : 'Expand'" ></component>
  </el-icon>
  <!--面包屑-->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>首页1</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useLayoutSettingStore from "@/store/modules/setting";

let c = ref("false");
//获取布局配置信息
let settingStore = useLayoutSettingStore();  

//控制图标
let changenIcon = () => {
  settingStore.fold = !settingStore.fold;
};

</script>

<style scoped lang="scss"></style>
