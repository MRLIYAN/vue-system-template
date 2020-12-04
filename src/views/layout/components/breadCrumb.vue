<template>
   <div class="breadCrumb-container">
        <el-breadcrumb separator=">" >
            <transition-group name="breadcrumb">
                <!-- 如果有breadCrumbClick并且还等于false，不允许点击跳转路由，比如带有折叠的菜单，点击肯定不可以跳转 -->
                <el-breadcrumb-item v-for="item in fullPath" :key="item.path" 
                    :class="item.meta.breadCrumbClick&&item.meta.breadCrumbClick=='false'?'no-redirect-crumb':''"
                    :to="{path:item.meta.breadCrumbClick&&item.meta.breadCrumbClick=='false'?'':item.path}">
                        {{item.meta.title}}
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
   </div>
</template>

<script>
export default {
    data() {
        return {
            fullPath:null,
            home:[{
                path:'/home',
                meta:{
                    title:'首页',
                    breadCrumb:'true'
                }
            }]
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
            console.log(matched);
            //判断第一个是不是首页组件，不是吧第一个首页放前面，保证面包屑第一个永远是固定的首页
            if(!isHome){
                if(matched[0].path != '/' || matched[0].path != '/home'){
                    matched = this.home.concat(matched);
                }
            }
            this.fullPath = matched.filter(item => {
                /*
                    过滤有path路径，没有重定向（因为有重定向的是重定向了子路由，父级路由要忽略），允许显示面包屑的路由
                */
                return item.path && !item.redirect && item.meta.breadCrumb != 'false';
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.breadCrumb-container{

    height: 100%;
    display:flex;
    justify-content: flex-start;
    align-items: center;

    ::v-deep .no-redirect-crumb .el-breadcrumb__inner,.no-redirect-crumb .el-breadcrumb__inner:hover{
        color:#606266;
        cursor:text;
    }
}
</style>