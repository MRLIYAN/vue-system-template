<template>
   <div class="login">
      <div class="ctaim">
         <div class="input-group input-group1">
            <img src="user" alt="">
            <input type="text" id="username">
         </div>
         <div class="input-group input-group2">
            <img src="user" alt="">
            <input type="text" id="pwd">
         </div>
         <input type="button" id="login-btn" value="登录" @click="login">

         <div class="tip">
            <span>用户名：{{loginmsg.username}}</span>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data(){
      return {
         loginmsg:{
            username:'admin',
            password:'admin'
         }

      }
   },
   methods: {
      login(){

      }
   },
}
</script>

<style lang="scss" scoped>
.login{
   width:100%; 
   height:100%;

}
</style>