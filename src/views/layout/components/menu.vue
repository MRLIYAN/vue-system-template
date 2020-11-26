<template>
   <div>
       <router-link :to="{path:'/ele'}">aaaa</router-link>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            router>
            <menu-tree></menu-tree>
        </el-menu>
   </div>
</template>

<script>
import menuTree from './menuTree'
export default {
    data() {
        return {
            
        }
    },
    components:{
        menuTree
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>