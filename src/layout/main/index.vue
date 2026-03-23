<template>
  <router-view v-slot="{Component}">
    <transition name="fade" >  
      <component :is="Component"></component>
    </transition>  
  </router-view>
</template>

<script setup lang='ts'>
import { route } from '@/router/router';
import { ref } from 'vue'
import { t } from 'vue-router/dist/index-DFCq6eJK.js';


</script>

<style scoped lang='scss'>

.fade-enter-from{
    opacity: 0;
}


.fade-enter-active{
    transition: all 1s s;
}

.fade-enter-to{
    opacity: 1;
}
</style>