//登录接口需求携带参数ts类型
export interface LoginForm  {
    username: string;
    password: string;
}
interface dataType {
    token: string;
}

//登录接口返回数据ts类型
export interface LoginResponseData {
    code: number;
    data: {
        token: dataType;
    };
}
//用户信息
interface user  {
    userId: number;
    avatar: string;
    username: string;
    password: string;
    desc: string;
    roles: string[];
    buttons: string[];
    routes: string[];
    token: string;
}

//服务器返回的用户信息ts类型
export interface UserResponseData {
    code: number;
    data: user;
}