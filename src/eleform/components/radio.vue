<template>
   <div class="radio-container">
      <div class="line">
         <div class="line-title">常用</div>
         <div class="line-cont">
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
         </div>
      </div>

      <div class="line">
         <div class="line-title">禁用</div>
         <div class="line-cont">
            <el-radio disabled v-model="radio2" label="1">备选项</el-radio>
            <el-radio disabled v-model="radio2" label="2">备选项</el-radio>
         </div>
      </div>

      <div class="line">
         <div class="line-title">按钮样式</div>
         <div class="line-cont">
            <el-radio-group v-model="radio3">
               <el-radio-button label="上海"></el-radio-button>
               <el-radio-button label="北京"></el-radio-button>
               <el-radio-button label="广州"></el-radio-button>
               <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
         </div>
      </div>
      
   </div>
</template>

<script>
export default {
   data(){
       return{
            radio: '1',
            radio2:'1',
            radio3:'上海',
       }
   }
}
</script>

<style lang="scss" scoped>
.radio-container{
   .line{
        width:100%;
        padding:20px;
    }
    .line-title{
        font-size: 14px;
        color:rgb(102, 102, 102);
        padding:10px;
    }
    .line-cont{
        width:100%;
        padding:10px;
    }
}
</style>