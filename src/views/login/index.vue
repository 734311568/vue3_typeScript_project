<template>
  <div class="login_container">
    <!---用element-plus布局 一行两列-->
    <el-row>
      <el-col :span="12" :xs="0">左边 </el-col>
      <el-col :span="12" :xs="24">
        <!--登录表单-->
        <el-form class="login_from">
          <h1>holle</h1>
          <h2>欢迎来到吊毛基地</h2>
          <el-from-item>
            <el-input
              :prefix-icon="User"
              type="text"
              v-model="loginForm.username"
            ></el-input>
          </el-from-item>
          <el-from-item>
            <el-input
              :prefix-icon="Lock"
              label="密码"
              type="password"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-from-item>
          <el-from-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              @click="loginHand"
              >登录</el-button
            >

          </el-from-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
import { reactive } from "vue";
import useUserStore from "@/store/modules/user"; //引入用户仓库
import { useRouter } from "vue-router";
//使用小仓库
const userStore = useUserStore();

//获取路由器
let $router = useRouter();

//收集表单对象
const loginForm = reactive({
  username: "admin",
  password: "111111",
});

//登入事件回调loginHand 方法
const loginHand = async () => {
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
    });
  } catch (error) {
    ElNotification.error((error as Error).message); //断言如果是错误类型的化error 那就错误信息
  }
};

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
    top: 30vh;
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
    .login_btn{
      width: 100%;
    }


  }
}
</style>
