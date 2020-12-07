<template>
   <div class="menu-container">
        <el-scrollbar class="el-scrollbar">
            <el-menu :collapse="isCollapse"
                :default-active="$route.path"
                :class="['el-menu-vertical-demo', isCollapse? 'el-menu-suo':'']"
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

        <div class="slideMenuBtn" @click="menuSlideChange">
            <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
        </div>
   </div>
</template>

<script>
import slideMenuTree from './slideMenuTree'
export default {
    data() {
        return {
            menuData:[],
            isCollapse:false,
        }
    },
    components: {
        slideMenuTree
    },
    mounted(){
        this.menuData = this.$store.state.user.routes;
    },
    methods: {
        menuSlideChange() {
            this.isCollapse = !this.isCollapse
        }
    }
}
</script>

