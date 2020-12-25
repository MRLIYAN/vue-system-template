<template>
   <div class="main-container">
        <el-scrollbar class="el-scrollbar">
            <div class="main-content-container">
                <transition name="fade-slide" mode="out-in">
                    <keep-alive :include="$store.state.user.keepAliveRoutes" :exclude="$store.state.user.noAliveRoutes">
                        <router-view :key="$route.path" v-if="$store.state.app.refresh"></router-view>
                    </keep-alive>
                </transition>
            </div>
        </el-scrollbar>
   </div>
</template>

<script>
export default {
    watch:{
        '$store.state.tagsLink.tagsVisitedRoute'(){//对打开的tagsLink标签进行监听，只要发生改变，就去循环判断拿取需要缓存的数据
            this.getAliveRoute()
        },
    },
    methods:{
        getAliveRoute(){
            let aliveRoutes = [];
            this.$store.state.tagsLink.tagsVisitedRoute.forEach(item => {
                if(!item?.meta?.keepAlive || item.meta.keepAlive != 'false'){
                    if(!aliveRoutes.includes(item.name)){
                        aliveRoutes.push(item.name);
                    }
                    //下面循环matched，解决多级路由缓存失效问题，把路由所有父级路由也加上，从而实现多级路由可以缓存的效果
                    let route = item.matched;
                    if(!route){
                        return false;
                    }
                    route.forEach(item => {
                        if(item.name && !aliveRoutes.includes(item.name)){
                            aliveRoutes.push(item.name);
                        }
                    })
                }
            }); 
            //把缓存的路由放到vuex中，为了和刷新功能相对应，可以直接操作数据。
            this.$store.commit("user/addkeepAliveRoutes",aliveRoutes)
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
