<template>
    <div class="menuTree-ctain">
        <div v-if="routeItem.meta && routeItem.meta.hidden == 'false'">
            <!-- 有重定向的则为一级菜单需要重定向，则跳过，没子级菜单，
                没有重定向并且也没有children的则也没有子级菜单，直接显示，否则取children循环
             -->
            <div v-if="routeItem.redirect && routeItem.redirect != 'no' || !routeItem.redirect && !routeItem.children">
                <!-- 有重定向，则说明需要调转到重定向的路由，则应该显示重定向的路由的信息 -->
                <el-menu-item v-if="routeItem.redirect && routeItem.reidrect != 'no'" :index="routeItem.children[0].path">
                    <i class="menu-icon" :class="routeItem.children[0].meta.icon||''" ></i>
                    <span class="menu-font" :title="routeItem.children[0].meta.title||''" slot="title">{{routeItem.children[0].meta.title}}</span>
                </el-menu-item>
                <!-- 没有重定向，则是正常要显示的菜单，显示-->
                <el-menu-item v-else :index="routeItem.path">
                    <i class="menu-icon" :class="routeItem.meta.icon||''"></i>
                    <span class="menu-font" :title="routeItem.meta.title||''" slot="title">{{routeItem.meta.title}}</span>
                </el-menu-item>
            </div>

            <!-- 有自己菜单，递归循环自己的组件 -->
            <el-submenu v-else :index="routeItem.path">
                <!-- 这里就是显示的有子级菜单的可折叠的路由，带箭头折叠的路由信息 -->
                <template slot="title">
                    <i class="menu-icon" :class="routeItem.meta.icon||''" ></i>
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
    props: {
        routeItem:{
            type:Object,
            require:true,
        }
    }
}
</script>
