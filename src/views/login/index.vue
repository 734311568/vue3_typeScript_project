<template>
  <div class="login_container">
    <!---用element-plus布局 一行两列-->
    <el-row>
      <el-col :span="12" :xs="0"> </el-col>
      <el-col :span="12" :xs="24">
        <!--登录表单-->
        <el-form :model="loginForm" :rules="rules" class="login_from" ref="loginFormRef">
          <h1>holle</h1>
          <h2>欢迎来到吊毛基地</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" type="text" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" label="密码" type="password" v-model="loginForm.password"
              show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default"
              @click="loginHand">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
import { reactive, ref } from "vue";
import useUserStore from "@/store/modules/user"; //引入用户仓库
import { useRouter } from "vue-router";
import { lo } from "element-plus/es/locale/index.mjs";
import { getTime } from "@/utils/time"; //引入getTime from "@/utils/time.ts";
//获取el-form组件
const loginFormRef = ref();

//使用小仓库
const userStore = useUserStore();

//获取路由器
let $router = useRouter();
//定义控制登录加载效果 ，已开始为false 登录后改变状态
let loading = ref(false);
//收集表单对象
const loginForm = reactive({
  username: "admin",
  password: "111111",
});
//获取当前时间 返回变量 时间状态的消息
const time = getTime();
//登入事件回调loginHand 方法
const loginHand = async () => {
  //表单校验
  //保证全部表单项校验通过再发请求 
  //console.log(loginFormRef.value);
  await   loginFormRef.value.validate();
 // console.log(result);

  //loding.value = true;
  loading.value = true;
  //点击登入通知仓库需要登入请求
  //登录成功之后干嘛
  //登录失败之后干嘛
  try {
    //可以书写.then 语法
    await userStore.userLogin(loginForm);
    $router.push("/"); //登录成功就跳转到首页
    ElNotification({
      type: "success",
      message: "登录成功",
      title: `hi,${time}`,
    });
    loading.value = false; //登录成功加载效果结束
  } catch (error) {
    ElNotification.error((error as Error).message); //断言如果是错误类型的化error 那就错误信息
    loading.value = false; //登录失败加载效果结束
  }
};
//定义表单校验对象
const rules = reactive({
  username: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
    },
    {
      min: 4,
      max: 10,
      message: "用户名在4到10位之间",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
    {
      min: 6,
      max: 15,
      message: "密码在6到15位之间",
      trigger: "blur",
    },
  ],
}); 
</script>

<style scoped lang="scss">
.login_container {
  width: 100%; //自适应100%
  height: 100vh; //100%视口 vh的作用是保持高度不变
  background: url("@/assets/images/background.jpg") no-repeat; //设置背景 ,不重复
  background-size: cover; //覆盖整个div

  .login_from {
    position: relative;
    width: 80%;
    top: 32vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
