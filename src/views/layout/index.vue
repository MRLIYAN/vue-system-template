<template>
   <div class="layout-ctain">
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
           <div class="layout-left-nav">
               <slideMenu />
           </div>
           <div class="layout-right-cont">
               <appMain />
           </div>
       </div>
   </div>
</template>

<script>
import slideMenu from './components/slideMenu'
import appMain from './appMain'
export default {
   components:{
       slideMenu,
       appMain
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