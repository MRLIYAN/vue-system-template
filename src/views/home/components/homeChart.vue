<template>
   <div class="homeChart-container">
       <div class="top-block flex-h-between">
           <div class="block block-user flex-h-between animate__animated animate__zoomIn">
               <div class="left-icon flex-center">
                   <img src="@/assets/images/home/user.png" alt="">
               </div>
               <div class="right-cont flex-z-around">
                   <div class="font">用户访问量</div>
                   <div class="number">
                       <animate-number
                        ref="myNum"
                        from="0" 
                        to="8556" 
                        duration="2500" 
                        easing="easeOutQuad"
                        ></animate-number>
                   </div>
               </div>
           </div>
           <div class="block block-message flex-h-between animate__animated animate__zoomIn">
               <div class="left-icon flex-center">
                   <img src="@/assets/images/home/message.png" alt="">
               </div>
               <div class="right-cont flex-z-around">
                   <div class="font">消息通知</div>
                   <div class="number">
                       <animate-number
                        ref="myNum"
                        from="0" 
                        to="14200" 
                        duration="2500" 
                        easing="easeOutQuad"
                        ></animate-number>
                   </div>
               </div>
           </div>
           <div class="block block-price flex-h-between animate__animated animate__zoomIn">
               <div class="left-icon flex-center">
                   <img src="@/assets/images/home/price.png" alt="">
               </div>
               <div class="right-cont flex-z-around">
                   <div class="font">价格信息</div>
                   <div class="number">
                       <animate-number
                        ref="myNum"
                        from="0" 
                        to="25656" 
                        duration="2500" 
                        easing="easeOutQuad"
                        ></animate-number>
                   </div>
               </div>
           </div>
           <div class="block block-shopping flex-h-between animate__animated animate__zoomIn">
               <div class="left-icon flex-center">
                   <img src="@/assets/images/home/shopping.png" alt="">
               </div>
               <div class="right-cont flex-z-around">
                   <div class="font">购物产品</div>
                   <div class="number">
                       <animate-number
                        ref="myNum"
                        from="0" 
                        to="14578" 
                        duration="2500" 
                        easing="easeOutQuad"
                        ></animate-number>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },    
    mounted() {
        //this.$refs.myNum.start()
    },  
    methods: {
        
    },                                                                             
}
</script>

<style lang="scss" scoped>
.homeChart-container{
    width:100%;
    .top-block{
        width:100%; height:150px;
    }
    .block{
        width:22%; height: 100%;
        border-radius: 10px; cursor: pointer;
        box-shadow:0 0 5px rgba(200,200,200,.5);
    }
    .block-user{
        background:linear-gradient(to right,#83b9ff,#7095ff,#5e8bff);
    }
    .block-message{
        background: linear-gradient(to right,#fdf3ac,#f8dbb9,#f5b0b3);
    }
    .block-price{
        background: linear-gradient(to right,#e0c4fe,#d4b2ff,#f3aeff);
    }
    .block-shopping{
        background: linear-gradient(to right,#bdeb04,#82e501,#4adb5c);
    }
    .block .left-icon{
        width:140px;
        img{
            display: inline-block;
            width:60px;
            height: 60px;
        }
    }
    .block .right-cont{
        flex:1;
        align-items: flex-start;
        padding-left: 20px;
    }
    .block .font,.block .number{
        color:#fff;
        text-align: left;
        margin:15px 0;
        font-size: 24px;
    }
}
</style>