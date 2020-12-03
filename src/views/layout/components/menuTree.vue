<template>
    <div>
        <div v-if="routeItem.meta.hidden == 'false'">
            <div v-if="routeItem.redirect || !routeItem.redirect && !routeItem.children">
                <!-- 有重定向，显示重定向的路径，没有，则显示默认的path，为了能够和$route.path对应，改变激活状态颜色 -->
                <el-menu-item :index="routeItem.redirect ? routeItem.redirect : routeItem.path">
                    <i :class="routeItem.meta.icon" v-if="routeItem.meta.icon"></i>
                    <span slot="title">{{routeItem.title}}</span>
                </el-menu-item>
            </div>
            <el-submenu v-else :index="routeItem.path">
                <template slot="title">
                    <i :class="routeItem.meta.icon"></i>
                    <span :data-path="routeItem.path">{{routeItem.title}}</span>
                </template>
                <menuTree v-for="child in routeItem.children" :routeItem="child" :key="child.path"></menuTree>
            </el-submenu>
        </div>
   </div>
</template>

<script>
export default {
    name:'menuTree',
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