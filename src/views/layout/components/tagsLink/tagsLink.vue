<template>
   <div class="tagsLink-container">
      <el-tabs v-model="$store.state.tagsLink.tagsValue" type="card" closable @tab-remove="closeTab" @tab-click="toRoute">
         <el-tab-pane
            v-for="item in visitedRoutes"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            @click="toRoute(item)"
         >
         <span slot="label">
            <span class="icon" :class="item.icon" style="margin-right:5px; font-size:16px;"></span>
            <span class="font">{{item.title}}</span>
         </span>
         </el-tab-pane>
      </el-tabs>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
   data() {
      return {
         tagsValue:this.tabsValue
      }
   },
   computed: {
      ...mapGetters([
         "tagsVisitedRoute",
      ]),
      visitedRoutes() {return this.tagsVisitedRoute}
   },
   watch: {
      $route() {
         this.addVisitedRoutes();
      }
   },
   mounted() {
      this.addVisitedRoutes();
   },
   methods: {
      toRoute(item) {
         this.$router.push({path:item.name})
      },
      closeTab(item) {
         this.$store.dispatch("tagsLink/closeTagsRoute",item)
      },
      addVisitedRoutes(){
         let route = this.$route;
         let routeObj = {};
         routeObj.title = route.meta.title;
         routeObj.name = route.path;
         routeObj.icon = route.meta?.icon;
         this.$store.dispatch("tagsLink/addVisitedRoute",routeObj);
      }
   },
}
</script>

<style lang="scss">
.tagsLink-container{
   width:100%; height: 100%;
   display: flex;
   align-items: center;

   $tagsBorder:#dcdfe6;
   $tagsActiveBorder:#1890ff;
   $tagsActiveColor:#1890ff;
   $tagsActiveBgColor:rgba(24,144,255,.1);
   $tagsHeight:35px;
   $tagsMargin:2px;

   .el-tabs{
      width:100%;
   }
   
   .el-tabs__header{
      margin:0;
   }
   .el-tabs--card>.el-tabs__header{
      border-bottom:none;
   }
   .el-tabs--card>.el-tabs__header .el-tabs__nav{
      border:none;
      border-radius: none;
   }
   .el-tabs__nav-next, .el-tabs__nav-prev{
      height:100%;
      width:20px;
      display:flex;
      justify-content: center;
      align-items: center;
      line-height: normal;
   }

   .el-tabs__item{
      margin:0 $tagsMargin;
      border:1px solid $tagsBorder !important;
      height:$tagsHeight;
      line-height: $tagsHeight;
      border-radius: 5px;
      cursor: pointer;
   }
   .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
      border-color:$tagsActiveBorder !important;
      background:$tagsActiveBgColor;
   }
   .el-tabs__item:hover,.el-tabs__item:hover span{
      border-color:$tagsActiveBorder !important;
      color:$tagsActiveColor;
   }
    
   .el-tabs__nav .el-tabs__item:first-child .el-icon-close{
      display: none;
   }

   .el-tabs__content{
      display: none;
   }

}
</style>