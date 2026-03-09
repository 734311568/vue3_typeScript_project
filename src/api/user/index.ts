//统一管理用户信息的接口
import  request  from "@/utils/request";

import type { LoginForm,LoginResponseData ,UserResponseData} from "./type";
enum API {
    login = "/user/login",

    userInfo = "/user/info",
}

//暴露请求接口
export const reqLogin = (data: LoginForm) => request.post<any, LoginResponseData>(API.login, data);
//获取用户信息
export const reqUserInfo = () => request.get<any,UserResponseData>(API.userInfo);    