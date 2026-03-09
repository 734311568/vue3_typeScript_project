<template>
  <div class="app">
    <h1 class="title">测svg</h1>
    <!---  svg 引用 -->

    <Pagination></Pagination>
    <svg-icon name="home" color="red" width="100px" height="100px"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { reqLogin } from "@/api/user";
onMounted(() => {
  reqLogin({
    username: "admin",
    password: "111111",
  });
});
</script>

<style scoped lang="scss">
.title {
  color: red;
}
</style>
