<template>
   <div class="layout-ctain">
       <div class="top">
           <div class="top-left">
               <img class="logo" src="" alt="">
               <!-- <h1 class="name">某某某信息管理系统</h1> -->
           </div>
           <div class="top-right">
              <span @click="logoff">注销</span>
           </div>
       </div>
       <div class="bottom">
           <div class="left-nav">
               <slide-menu />
           </div>
           <div class="right-cont">
                <transition name="fade-slide" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
           </div>
       </div>
   </div>
</template>

<script>
import slideMenu from './components/menu'
export default {
   components:{
       slideMenu
   },
   methods: {
       logoff() {
           this.$store.dispatch('user/logoff').then(() => {
               this.$router.push({path:'/login'})
           })
       }
   }
}
</script>

<style lang="scss" scoped>
$color:#fff;
.layout-ctain{
    width:100%;
    height:100%;
    overflow: hidden;
    .top{
        width:100%;
        height:50px; 
        line-height: 50px;
        background:$color;
        box-shadow:0px 2px 5px 1px rgba(180,180,180);
        background: #1890ff;
    }
    .bottom{
        width:100%;
        height:calc(100% - 50px); 
    }
    .left-nav{
        width:220px;
        height: 100%;
        float: left;
        background: $color;
    }
    .right-cont{
        width:calc(100% - 220px);
        height: 100%;
        float: right;
        background: rgba(240,240,240,0.3);
    }


    .top-left,.top-right{
        width: auto;
        height: 100%;
        display: flex;
    }
    .top-left{
        float: left;
        justify-content: flex-start;
        padding-left: 10px;
    }
    .top-right{
        float: right;
        justify-content: flex-end;
        padding-right: 10px;
    }
    .name{
        font-size: 18px;
        font-weight: bold;
        color:$color;
    }
    .logo{
        display: inline-block;
        height: 50px;
    }

    .fade-slide-enter,.fade-slide-leave-to{
        transform: translateX(100%);
    }
    .fade-slide-enter-active,.fade-sldie-leave-active{
        transition: all .4s ease;
    }
}
</style>