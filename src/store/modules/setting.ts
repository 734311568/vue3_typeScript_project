//引入组件相关的配置
import { Fold } from "@element-plus/icons-vue";

import { defineStore } from "pinia";
let useLayoutSettingStore = defineStore("settingStore", {
    state: () => {
        return {
            fold: false,  //用户控制效果    
                
        };
    },
})  

export default  useLayoutSettingStore;       