//要进行aoxios的配置 的二次封装，封装目的使用请求和响应拦截
import axios from "axios";

import { ElMessage } from "element-plus";

/*第一步 利用axios的create方法创建一个axios实例这样可以其他的配置（基础路径，超时时间）*/
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, // api的base_url
  timeout: 5000, // 请求超时时间
});
//请求拦截器
request.interceptors.request.use(
  //配置里面的请求头headers 属性
  (config) => {
    return config; //返回配置对象
  },
  (error) => {
    return Promise.reject(error);
  },
);
//响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data; //简化数据
  },
  (error) => {
    let message = ""; //错误信息
    let status = error.response.status; //错误码

    console.log(status);
    switch (status) {
      case 401:
        message = "token过期   请重新登录";
        break;
      case 403:
        message = "你无权访问该资源";
        break;
      case 404:
        message = "请求资源不存在";
        break;
      case 500:
        message = "服务器故障";
        break;
      default:
        message = "未知错误";
    }
    //提示错误消息
    ElMessage.error(message);

    //reject(error) //返回错误
    return Promise.reject(error);
  },
);

export default request;
