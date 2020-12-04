<template>
   <div class="menu-container">
        <el-scrollbar class="el-scrollbar">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                mode="vertical"
                :unique-opened="false"
                router
                :background-color="this.$variable.slideMenuBg"
                :text-color="this.$variable.menuTextColor"
                :active-text-color="this.$variable.menuTextActive "
                >
                <slideMenuTree v-for="route in menuData" :key="route.path" :routeItem="route"></slideMenuTree>
            </el-menu>
        </el-scrollbar>
   </div>
</template>

<script>
import slideMenuTree from './slideMenuTree'
export default {
    data() {
        return {
            menuData:[],
        }
    },
    components: {
        slideMenuTree
    },
    mounted(){
        this.menuData = this.$store.state.user.routes;
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
