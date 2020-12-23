<template>
   <div class="main-container">
        <el-scrollbar class="el-scrollbar">
            <div class="main-content-container">
                <transition name="fade-slide" mode="out-in">
                    <keep-alive :exclude="noKeepAliveRoutes">
                        <router-view :key="$route.path"></router-view>
                    </keep-alive>
                </transition>
            </div>
        </el-scrollbar>
   </div>
</template>

<script>
export default {
    data() {
        return {
            noKeepAliveRoutes:this.$store.state.user.noKeepAliveRoutes
        }
    }
}
</script>
<style lang="scss" scoped>
.main-container{
    ::v-deep .el-scrollbar__bar.is-horizontal{
        display: none;
    }
}
</style>
