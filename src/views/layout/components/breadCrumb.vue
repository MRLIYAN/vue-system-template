<template>
   <div class="breadCrumb-container">
        <el-breadcrumb separator=">" >
            <!-- <el-breadcrumb-item :to="{path:'/'}">主页</el-breadcrumb-item> -->
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="item in fullPath" :key="item.path" :to="{path:item.path}">{{item.meta.title}}</el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
   </div>
</template>

<script>
export default {
    data() {
        return {
            fullPath:null,
        }
    },
    watch: {
        $route(route) {
            //监听路由，改变就刷新面包卡
           this.isHome(route);
        }
    },
    mounted() {
        //这里是为了防止页面刷新没有显示默认展示的面包卡
        this.isHome(this.$route);
    },
    methods: {
        isHome(route){
            if(route?.path == '/' || route?.path == '/home'){
                this.getBreadCrumb(true);
            }else{
                this.getBreadCrumb(false);
            }
        },
        getBreadCrumb(isHome) {
            let matched = this.$route.matched;
            //通过判断当前是否是首页，是首页就清空，防止出现选项卡两个首页的情况
            if(!isHome){
                if(matched[0].path != '/' || matched[0].path != '/home'){
                    matched  =  [{
                                    path:'/',
                                    meta:{
                                        title:'主页',
                                        breadCreumb:true
                                    }
                                }].concat(matched)
                }
            }
            this.fullPath = matched.filter(item => {
                return item.meta.breadCrumb != 'false';
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.breadCrumb-container{
    display:flex;
    justify-content: flex-start;
    align-items: center;
}
</style>