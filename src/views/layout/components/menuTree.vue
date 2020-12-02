<template>
    <div>
        <div v-if="routeItem.meta.hidden == 'false'">
            <div v-if="routeItem.redirect || !routeItem.redirect && !routeItem.children">
                <el-menu-item :index="routeItem.path">
                    <i :class="routeItem.meta.icon" v-if="routeItem.meta.icon"></i>
                    <span slot="title" :data-path="routeItem.path">{{routeItem.title}}</span>
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