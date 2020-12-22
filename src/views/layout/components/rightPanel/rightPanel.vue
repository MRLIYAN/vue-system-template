<template>
   <div class="rightPanel-container">
      <span class="full-screen">
         <img v-if="isFullscreen==false" title="全屏" @click="toggleFullscreen" src="@/assets/images/rightPanel/fullScreen.png" alt="">
         <img v-if="isFullscreen==true" title="退出全屏" @click="toggleFullscreen" src="@/assets/images/rightPanel/exit-fullScreen.png" alt="">
      </span>
      <sysMessage />
      <personal />
   </div>
</template>

<script>
import personal from './personal'
import screenfull from 'screenfull'
import sysMessage from './sysMessage'
export default {
   data() {
      return {
         isFullscreen:false,
      }
   },
   components: {
      personal,
      sysMessage
   },
   created() {
      // 监听事件
      window.addEventListener('resize', this.onresize)
      window.addEventListener('keydown', this.keydown)
   },
   beforeDestroy() {
      // 取消监听事件
      window.removeEventListener('resize', this.onresize)
      window.removeEventListener('keydown', this.keydown)
   },
   methods: {
      // 切换是否全屏
      toggleFullscreen() {
         screenfull.toggle()
         this.isFullscreen = !this.isFullscreen
      },
   
      // 阻止F11默认事件
      keydown(event) {
         if (event.keyCode === 122) {
            event.preventDefault()
            event.returnValue = false
         }
      },
   
      /**
       * 响应屏幕变化事件，给isFullscreen赋值，标识是否全屏
       * IE中bug: 调试器打开，且与页面不分离时 -- 无效
       * **/
      onresize() {
         // 利用屏幕分辨率和window对象的内高度来判断兼容IE
         let winFlag = window.innerHeight === window.screen.height
         // 利用window全屏标识来判断 -- IE无效
         let isFull = window.fullScreen || document.webkitIsFullScreen
   
         if (isFull === undefined) {
         this.isFullscreen = winFlag
         } else {
         this.isFullscreen = winFlag || isFull
         }
      }
   }
}
</script>

<style lang="scss" scoped>
.rightPanel-container{
   display: flex;
   justify-content: flex-start;
   align-items: center;

   &>*{
      display:flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
   }

   .full-screen img{
      cursor: pointer;
      display: inline-block;
      width:20px; height: 20px;
   }
   
}
</style>