<template>
   <div class="login">
      <div class="ctain">
         <div class="title">用户登录</div>
         <div class="input-group input-group1">
            <img src="@/assets/images/login/user.png" alt="">
            <input type="text" placeholder="请输入用户名" autocomplete="off" id="username" ref="username" :value="loginmsg.username">
         </div>
         <div class="input-group input-group2">
            <img src="@/assets/images/login/pwd.png" alt="">
            <input type="password" placeholder="请输入密码" autocomplete="off" id="pwd" ref="pwd" :value="loginmsg.password">
         </div>
         <input type="button" id="login-btn" value="登录" @click="login">

         <div class="tip">
            <span>用户名：{{loginmsg.username}}</span>
            <span>密码：{{loginmsg.password}}</span>
         </div>
      </div>

      <canvas id="stars"></canvas>
      <!-- <img id="moon" src="@/assets/images/login/moon2.png" alt=""> -->
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
         let param = {
            userName:this.loginmsg.username,
            password:this.loginmsg.password
         }
         this.$store.dispatch('user/login',param).then(() => {
            this.$router.push('/')
         })
        
      }
   },
}
</script>

<style lang="scss" scoped>
$color:#1282c5;
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
      width:400px; 
      height:auto;
      position:absolute;
      top:50%;
      right: 8%;
      transform: translate(0,-50%);
      padding:30px;
      border:2px solid #072764;
      background: rgba(0,0,0,0.2);
   }

   .title{
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0.1em;
      color:$color;
   }

   input,input:focus{
      border:none; outline: none;
   }
   ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color:$color;
   }
   :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color:$color;
   }
   ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color:$color;
   }
   :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color:$color;
   }

   .input-group{
      width:100%; 
      height: 40px;
      line-height: 40px;
      margin-top: 30px;
      border:1px solid #092f8e;
      padding:0 10px;
   }
   
   .input-group img{
      display: inline-block;
      width: 30px;
      margin-right: 10px;
      vertical-align:middle;
   }

   .input-group input{
      width:calc(100% - 40px);
      height: 100%;
      color:$color;
      font-size: 14px;
      background:transparent;
   }

   #login-btn{
      width:100%; height: 40px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      color:$color;
      margin-top: 30px;
      background: linear-gradient(to right,rgba(5,37,103,0.8),rgba(6,49,146,0.8));
   }
   #login-btn:hover{
      background: linear-gradient(to left,rgba(5,37,103,0.8),rgba(6,49,146,0.8));
   }

   .tip{
      color:$color;
      margin-top: 10px;
      display:flex;
      justify-content: space-between;
      align-items:center;
   }
   
}
</style>