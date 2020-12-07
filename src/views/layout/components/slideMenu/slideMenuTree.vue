<template>
    <div class="menuTree-container" v-if="routeItem.meta && routeItem.meta.hidden == 'false'">
        <!-- 根据isChild判断是否有子级菜单，有则循环组件
            -->
        <template v-if="routeItem.meta.isChild != 'true'">
            <!-- 有重定向，则说明需要调转到重定向的路由，一般是一级菜单没有子菜单，应该显示重定向的路由的信息 -->
            <el-menu-item v-if="routeItem.redirect" :index="routeItem.children[0].path">
                <i class="menu-icon" :class="routeItem.children[0].meta.icon||''" ></i>
                <span class="menu-font" :title="routeItem.children[0].meta.title||''" slot="title">{{routeItem.children[0].meta.title}}</span>
            </el-menu-item>
            <!-- 没有重定向，则是正常要显示的菜单，显示-->
            <el-menu-item v-else :index="routeItem.path">
                <i class="menu-icon" :class="routeItem.meta.icon||''"></i>
                <span class="menu-font" :title="routeItem.meta.title||''" slot="title">{{routeItem.meta.title}}</span>
            </el-menu-item>
        </template>

        <!-- 有子级菜单，递归循环自己的组件 -->
        <el-submenu v-else :index="routeItem.path">
            <!-- 这里就是显示的有子级菜单的可折叠的路由，带箭头折叠的路由信息 -->
            <template slot="title">
                <i class="menu-icon" :class="routeItem.meta.icon||''" ></i>
                <span class="menu-font" :title="routeItem.meta.title||''" :data-path="routeItem.path">{{routeItem.meta.title}}</span>
            </template>
            <slideMenuTree v-for="child in routeItem.children" :routeItem="child" :key="child.path"></slideMenuTree>
        </el-submenu>
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
