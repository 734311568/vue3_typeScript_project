<template>
           <!--顶部右侧侧图标-->
            <el-button  size="small" icon="Refresh"></el-button>
            <el-button  size="small" icon="full-screen"></el-button>
            <el-button  size="small" icon="setting"></el-button>
            <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
                style="width: 20px;height: 20px;border-radius: 50%; margin: 0 20px; " alt="">
            <!--下拉菜单-->
                <el-dropdown>
                    <span class="el-dropdown-link">
                       
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
</template>

<script setup lang='ts'>
import { ref } from 'vue'


</script>

<style scoped lang='scss'>

</style>