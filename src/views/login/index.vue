<template>
  <div class="login_container">
    <!---用element-plus布局 一行两列-->
    <el-row>
      <el-col :span="12" :xs="0">左边 </el-col>
      <el-col :span="12" :xs="24">
        <el-form>
          <h1>holle</h1>
          <h2>欢迎来到吊毛基地</h2>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped lang="scss">
.login_container {
  width: 100%; //自适应100%
  height: 100vh; //100%视口 vh的作用是保持高度不变
  background: url("@/assets/images/background.jpg") no-repeat; //设置背景 ,不重复
  background-size: cover; //覆盖整个div
}
</style>
