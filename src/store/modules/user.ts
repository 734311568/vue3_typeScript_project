//创建用户相关的仓库

import type { LoginForm, LoginResponseData } from "@/api/user/type";
import { reqLogin } from "@/api/user";
import type { UserState } from "@/store/types/type";
import { setToken, getToken } from "@/utils/token";

import { defineStore } from "pinia";
//创建用户相关的小仓库
const useUserStore = defineStore("user", {
  state: (): UserState => {
    return {
      // token: localStorage.getItem("TOKEN") ?? "",
      token: getToken(),
    };
  },
  //异步|逻辑方法
  actions: {
    //用户登录的方法
    async userLogin(data: LoginForm) {
      console.log(data + "用户登录的方法");
      //登录的逻辑
      const result: LoginResponseData = await reqLogin(data);
      //登录成功
      if (result.code === 200) {
        this.token = result.data.token as string;
        //持久化存储token
        //localStorage.setItem("TOKEN", result.data.token as string);
        setToken(result.data.token as string);
        //跳转能保证当前登入成功的状态
        return "ok";
      } //登录失败
      else {
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  //计算属性
  getters: {},
});
export default useUserStore;
