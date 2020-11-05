<template>
   <div class="form-container">
       <div class="line">
           <div class="line-title">单选按钮</div>
           <div class="line-cont">
               <radio></radio>
           </div>
       </div>
   </div>
</template>

<script>
import radio from './components/radio'
export default {
   components:{
       radio,
   }
}
</script>

<style lang="scss" scoped>
.form-container{
    
    .line{
        width:100%;
        padding:20px;
    }
    .line-title{
        font-size: 16px;
        color:#000;
        font-weight: bold;
    }
    .line-cont{
        width:100%;
    }
}
</style>