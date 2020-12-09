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
            <span class="tags-icon" :class="item.icon" style="margin-right:5px; font-size:16px;"></span>
            <span class="tags-font">{{item.title}}</span>
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
