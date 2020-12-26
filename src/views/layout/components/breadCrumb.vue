<template>
   <div class="breadCrumb-container">
        <el-breadcrumb separator=">" >
            <transition-group name="breadcrumb" appear>
                <!-- 如果有breadCrumbClick并且还等于false，不允许点击跳转路由，比如带有折叠的菜单，点击肯定不可以跳转 -->
                <el-breadcrumb-item v-for="item in fullPath" :key="item.path" 
                    :class="item.meta.breadCrumbClick != 'true'?'no-redirect-crumb':''"
                    :to="{path:dealPath(item)}">
                        {{item.meta.title}}
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
   </div>
</template>

<script>
export default {
    name:"breadCrumb",
    data() {
        return {
            fullPath:null,
            home:[
                {...this.$store.state.user.home}
            ]
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
                return item.path && item.meta.title && item.meta.breadCrumb != 'false';
            })
        },
        dealPath(item) {
            //处理跳转路由的规则
            //只要不让点击跳转，那就返回空路由，点击不会跳转
            if(!item.meta.breadCrumbClick || item.meta.breadCrumbClick == 'true'){
                //如果有redirect属性，那肯定是父级菜单，也就是带折叠的菜单，，默认重定向到第一个子菜单，如果不是折叠菜单，那就跳转到自己的path
                return item.redirect ? item.redirect : item.path
            }else{
                return "";
            }
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