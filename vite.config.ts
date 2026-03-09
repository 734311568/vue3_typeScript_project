import vue from "@vitejs/plugin-vue";

import { defineConfig } from "vite";

import path from "path";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import { UserConfigExport, ConfigEnv } from "vite";

import { viteMockServe } from "vite-plugin-mock";
// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        localEnabled: command === "serve", // 开发环境启用mock
        prodEnabled: false, // ← 生产环境关闭
        mockPath: "src/mock", // ← 确保指向你的 mock 目录
      }),
      // 配置 SVG 雪碧图插件
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // 指定 symbolId 格式
        symbolId: "icon-[dir]-[name]",
      }),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), //相对路径别名配置
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variable.scss";`,
        },
      },
    },
  };
});
