<template>
   <div class="layout-container">
       <div class="layout-top">
           <div class="layout-top-left">
               <img class="logo" src="@/assets/logo.png" alt="">
               <h1 class="name">vue-system-template</h1>
               <breadCrumb v-if="settings.breadCrumb" style="margin-left:20px;" />
           </div>
           <div class="layout-top-right">
               <rightPanel></rightPanel>
           </div>
       </div>
       <div class="layout-bottom">
           <div class="layout-left-nav" :class="isCollpase?'layout-left-nav-shrink':''">
               <slideMenu />
           </div>
           <div class="layout-right-cont" :class="isCollpase?'layout-right-cont-expand':''">
               <div class="bread-tags-link">
                    <tagsLink></tagsLink>
                    <tagsMore></tagsMore>
               </div>
               <appMain />
           </div>
       </div>
   </div>
</template>

<script>
import settings from '@/settings.js'
import slideMenu from './components/slideMenu/slideMenu'
import appMain from './appMain'
import breadCrumb from './components/breadCrumb'
import tagsLink from './components/tagsLink/tagsLink'
import tagsMore from './components/tagsMore'
import rightPanel from './components/rightPanel/rightPanel'
export default {
    data() {
        return {
            settings,
        }
    },
    components:{
        slideMenu,
        appMain,
        breadCrumb,
        tagsLink,
        tagsMore,
        rightPanel
    },
    computed: {
        isCollpase() {
            return this.$store.state.app.slideMenu
        }
    }
    
}
</script>

<style lang="scss" scoped>

</style>