<template>
   <div class="login">
      <div class="ctain">
         <div class="title">用户登录</div>
         <div class="input-group input-group1">
            <img src="user" alt="">
            <input type="text" placeholder="请输入用户名" id="username">
         </div>
         <div class="input-group input-group2">
            <img src="user" alt="">
            <input type="text" placeholder="请输入密码" id="pwd">
         </div>
         <input type="button" id="login-btn" value="登录" @click="login">

         <div class="tip">
            <span>用户名：{{loginmsg.username}}</span>
         </div>
      </div>

      <canvas id="stars"></canvas>
      <img id="moon" src="@/assets/images/login/moon2.png" alt="">
   </div>
</template>

<script>
import load from "@/assets/js/liuxing.js"
export default {
   data(){
      return {
         loginmsg:{
            username:'admin',
            password:'admin'
         }
      }
   },
   mounted(){
      load();
   },
   methods: {
      login(){
         this.$router.push({
            path:'/layout',
         })
      }
   },
}
</script>

<style lang="scss" scoped>
.login{
   width:100%; 
   height:100%;
   background:url(../../assets/images/login/bg.png);
   background-size: 100% 100%; 
   overflow:hidden;
   position: relative;

   #moon{
      display: inline-block;
      width:18vw;
      position:absolute;
      top:-1%; 
      left: 1%;
      z-index: 10;
   }

   .ctain{
      width:500px; 
      height:auto;
      position:absolute;
      top:50%;
      right: 5%;
      transform: translate(0,-50%);
      border:1px solid white;
   }

   input,input:focus{
      border:none; outline: none;
   }

   
}
</style>