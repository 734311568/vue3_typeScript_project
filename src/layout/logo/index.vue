<template>
    <div class="loge" v-if="setting.logoHidden">
        <img :src="setting.logo" alt="" />
        <p>{{ setting.title }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import setting from "@/setting";
</script>

<style scoped lang="scss">
.loge {
    width: 100%;
    height: $base-logo-title-fontSize;
    display: flex;
    color: #f8f0f0;
    align-items: center;
    padding: 30px  20px 20px 20px;
    top: 10px;



    img {
        width: 60px;
        height: 60px;

        border-radius: 10px;
    }

    p {
        font-size: $base-logo-title-fontSize;
    }
}
</style>
