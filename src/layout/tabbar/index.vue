<template>
    <div class="tabbar">
        <div class="tabbar_left">
          <tabbarLeft></tabbarLeft>
        </div>
        <div class="tabbar_right">
            <tabbarRight></tabbarRight>
            
        </div>
    </div>
</template>

<script setup lang='ts'>
import { Expand } from '@element-plus/icons-vue';
import { el } from 'element-plus/es/locale/index.mjs';
import { ref } from 'vue'
//引入左侧顶部组件
import tabbarLeft from '@/layout/tabbar/tabbar_left/index.vue'
//引入右侧顶部组件
import tabbarRight from '@/layout/tabbar/tabbar_right/index.vue'
</script>

<style scoped lang='scss'">
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to right ,rgb(241, 233, 233) ,rgb(107, 96, 96),rgb(255, 190, 190));

    .tabbar_left {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .tabbar_right {
        display: flex;
        align-items: center;
        margin-right: 24px;
    }   
}
</style>