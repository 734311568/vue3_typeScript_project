<template>
  <!--顶部左侧图标静态-->
  <el-icon style="margin-right: 5px">
    <Expand />
  </el-icon>
  <!--面包屑-->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>首页1</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped lang="scss"></style>
