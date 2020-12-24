<template>
   <div class="refresh-container flex-center">
       <span class="icon el-icon-refresh" title="刷新" @click="refreshRouter"></span>
   </div>
</template>

<script>
export default {
    methods:{
        refreshRouter(){
            //给router-view的exclude赋值，赋值当前路由得信息，根据exclude的权限大于include实现当前路由得刷新
            this.getNoAliveRoutes();
            //操作vuex中存储的refresh数据，为了让router-view刷新，此时值为false，
            this.$store.commit("app/toggleRefresh");
            //利用$nextTick函数，实现dom更新完毕后还原数据的设置
            this.$nextTick(() => {
                //再次操作vuex中存储的router-view的数据，此时需要改为true，否则router-view会不显示，因为上方改为了false，实现了刷新router-view的功能。
                this.$store.commit("app/toggleRefresh");
                //此时再把上方刚刚拿出来的之前存储的需要缓存的路由数据重新赋值回原来的位置，实现切换tagsLink路由得再次缓存功能。
                this.$store.commit("user/addNoAliveRoutes",[])
            })
        },
        getNoAliveRoutes(){
            //添加当前刷新路由
            let noAliveRoutes = [];
            if(!noAliveRoutes.includes(this.$route.name)){
                noAliveRoutes.push(this.$route.name);
            }
            //循环遍历当前路由得matched，防止多级路由出现不刷新的情况，把路由得父级路由全都加上，防止keep-alive对多级路由不起作用
            this.$route.matched.forEach(item => {
                if(!noAliveRoutes.includes(item.name)){
                    if(item.name){
                        noAliveRoutes.push(item.name)
                    }
                }
            })
            //把数据添加到vuex中，exclude大于include优先级去进行路由刷新
            this.$store.commit("user/addNoAliveRoutes",noAliveRoutes)
        }
    }
}
</script>

<style lang="scss" scoped>
.refresh-container{
    width:40px;
    height:100%;
    .icon{
        font-size: 26px;
        color:#838588;
        cursor: pointer;
    }
}
</style>