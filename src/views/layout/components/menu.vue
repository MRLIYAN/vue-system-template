<template>
   <div class="menu-container">
        <el-scrollbar class="el-scrollbar">
            <!-- <router-link tag="div" :to="{path:'/ele'}">aaaa</router-link> -->
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                mode="vertical"
                router>
                <menu-tree v-for="route in menuData" :key="route.path" :routeItem="route"></menu-tree>
            </el-menu>
        </el-scrollbar>
   </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
import menuTree from './menuTree'
export default {
    data() {
        return {
            menuData:[],
        }
        
    },
    components: {
        menuTree
    },
    computed: {
        ...mapState([
            mapState
        ]),
        ...mapGetters([
            "getRoutes"
        ])
    },
    mounted(){
        this.menuData = this.$store.state.router.routes;
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
.menu-container{
    width:100%; height:100%;
    .el-menu{
        border:none;
    }
    .el-scrollbar{
        width:100%;
        height:100%;
        overflow-y: auto;
    }
    ::v-deep .el-scrollbar__wrap {
        overflow-x: hidden;
    }
    
}
</style>