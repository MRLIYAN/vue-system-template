<template>
   <div class="layout-container">
       <div class="layout-top">
           <div class="layout-top-left">
               <img class="logo" src="@/assets/logo.png" alt="">
               <h1 class="name">vue-system-template</h1>
              
           </div>
           <div class="layout-top-right">
               <span @click="logoff">注销</span>
           </div>
       </div>
       <div class="layout-bottom">
           <div class="layout-left-nav" :class="isCollpase?'layout-left-nav-suo':''">
               <slideMenu />
           </div>
           <div class="layout-right-cont" :class="isCollpase?'layout-right-cont-expand':''">
               <div class="bread-tags-link">
                    <breadCrumb />
               </div>
               <appMain />
           </div>
       </div>
   </div>
</template>

<script>
import slideMenu from './components/slideMenu/slideMenu'
import appMain from './appMain'
import breadCrumb from './components/breadCrumb'
export default {
    components:{
        slideMenu,
        appMain,
        breadCrumb
    },
    computed: {
        isCollpase() {
            return this.$store.state.app.slideMenu
        }
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

</style>