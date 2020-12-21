<template>
   <div class="homeFoot-container bg-white flex-z-around animate__animated animate__fadeInUp">
      <span>
         Copyright
         <i class="iconC">c</i>
         vue-sysltem-template 2020 by liyan 347147641@qq.com
      </span>
      <span>
         other contributor:zhoulei、liushuai
      </span>
   </div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
.homeFoot-container{
   width:100%; height:70px;
   border-radius:10px;
   padding:10px;

   .iconC{
      display: inline-block;
      width:15px; height:15px;
      line-height:15px;
      border-radius:50%;
      font-size: 12px;
      text-align: center;
      color:#2c3e77;
      border:1px solid #2c3e77;
      vertical-align: middle;
      margin:0 5px;
   }
}
</style>