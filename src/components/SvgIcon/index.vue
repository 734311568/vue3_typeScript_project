<template>
  <div class="">
    <svg :style="{ width, height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: "#icon-",
  },
  //提供使用的图标集合
  name: String,
  //接收父组件传递的颜色
  color: {
    type: String,
    default: "",
  },
  //接收父亲组件传过来的宽度
  width: {
    type: String,
    default: "16px",
  },
  //接收父亲组件传过来的高度
  height: {
    type: String,
    default: "16px",
  },
});
</script>

<style scoped></style>
