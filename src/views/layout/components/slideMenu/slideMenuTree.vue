<template>
    <div class="menuTree-ctain">
        <div v-if="routeItem.meta.hidden == 'false'">
            <!-- 有重定向的则为一级菜单需要重定向，则跳过，没子级菜单，
                没有重定向并且也没有children的则也没有子级菜单，直接显示，否则取children循环
             -->
            <div v-if="routeItem.redirect || !routeItem.redirect && !routeItem.children">
                <!-- 有重定向，显示重定向的路径，没有，则显示默认的path，为了能够和$route.path对应，改变menu菜单组件激活的状态颜色 -->
                <el-menu-item :index="routeItem.redirect ? routeItem.redirect : routeItem.path">
                    <i class="menu-icon" :class="routeItem.meta.icon||''" v-if="routeItem.meta.icon"></i>
                    <span class="menu-font" :title="routeItem.meta.title||''" slot="title">{{routeItem.meta.title}}</span>
                </el-menu-item>
            </div>
            <el-submenu v-else :index="routeItem.path">
                <template slot="title">
                    <i class="menu-icon" :class="routeItem.meta.icon||''" v-if="routeItem.meta.icon"></i>
                    <span class="menu-font" :title="routeItem.meta.title||''" :data-path="routeItem.path">{{routeItem.meta.title}}</span>
                </template>
                <slideMenuTree v-for="child in routeItem.children" :routeItem="child" :key="child.path"></slideMenuTree>
            </el-submenu>
        </div>
   </div>
</template>

<script>
export default {
    name:'slideMenuTree',
    data() {
       return {

       }
    },
    props: {
        routeItem:{
            type:Object,
            require:true,
        }
    },
    mounted() {
                
    },
}
</script>

<style lang="scss" scoped>

</style>