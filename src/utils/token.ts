//本地存储token的方法 和读取数据方法
export const setToken = (token: string) => {
  localStorage.setItem("TOKEN", token);
};
export const getToken = () => {
  return localStorage.getItem("TOKEN");
};
