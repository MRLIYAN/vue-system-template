<template>
   <div class="menu-container">
        <el-scrollbar class="el-scrollbar">
            <el-menu :collapse="isCollapse"
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

        <div class="slideMenuBtn" @click="menuSlideChange">
            <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
        </div>
   </div>
</template>

<script>
import slideMenuTree from './slideMenuTree'
import { mapGetters } from 'vuex'
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
    computed: {
        ...mapGetters([
            "slideMenu"
        ]),
        isCollapse() {
            return this.slideMenu
        }
    },
    methods: {
        menuSlideChange() {
            this.$store.dispatch('app/toggleSlideMenu')
        }
    }
}
</script>

