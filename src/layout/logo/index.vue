<template>
    <div class="loge">
       <img src="../../../public/diss.png" alt="">
       <p>diss运营平台</p>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'


</script>

<style scoped lang='scss'>
.loge{
    width: 100%;
    height: $base-logo-title-fontSize%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 60px;
        height: 60px;
    }
}
</style>