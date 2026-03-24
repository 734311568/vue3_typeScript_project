import type { RouteRecordRaw } from "vue-router";
//定义小仓库类型的数
export interface UserState {
  token: string | null;
  menuRoutes: RouteRecordRaw[];
}
