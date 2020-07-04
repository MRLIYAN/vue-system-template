<template>
   <div class="layout-ctain">
       <div class="top">

       </div>
       <div class="bottom">
           <div class="left-nav">

           </div>
           <div class="right-cont">

           </div>
       </div>
   </div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
.layout-ctain{
    width:100%;
    height:100%;
    overflow: hidden;
    .top{
        width:100%;
        height:60px; 
        line-height: 60px;
        background:#fff;
        box-shadow:0px 1px 3px 0px rgba(240,240,240);
    }
    .bottom{
        width:100%;
        height:calc(100% - 60px);
    }
    .left-nav{
        width:220px;
        height: 100%;
        float: left;
        background: #000;
    }
    .right-cont{
        width:calc(100% - 220px);
        height: 100%;
        float: right;
    }
}
</style>