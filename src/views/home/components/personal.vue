<template>
   <div class="personal-container flex-h-around">
        <div class="head flex-center">
            <img src="@/assets/images/user/head.jpg" alt="">
        </div>
        <div class="right-cont">
            <h3 class="welcome">
                您好，{{$store.state.user.userInfo.userName}}，欢迎登陆。{{timeTipMsg}}
            </h3>
            <div class="intro">
                <span class="label">作者语录：</span>
                人生再多的幸运、不幸，都是曾经和过去，一如窗外的雨，淋过，湿过，走了，远了。曾经的美好，
                流于心底，曾经的悲伤，置于脑后，学会忘记，懂得放弃，人生总是从告别中走向明天。悄悄告诉自己说，
                没事的，一切解释如此，慢慢人生，淡然对待，一切也都会过去，而阳光总在风雨后。
            </div>
        </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            timeTipMsg:"",
        }
    },
    mounted(){
        this.initTime();
    },
    methods:{
        initTime(){
            var date = new Date();
            var nowDate = date.getHours().toLocaleString('chinese', { hour12: false })
            if(nowDate>=0&&nowDate<5){
                this.timeTipMsg = '凌晨了，不要熬夜了，记得休息，身体更重要哦！！！'
            }else if(nowDate>=5&&nowDate<10){
                this.timeTipMsg = '早上好，新的一天开始了，活气满满。';
            }else if(nowDate>=10&&nowDate<13){
                this.timeTipMsg = '中午好，忙了一上午了，记得饭后小憩哦！！！'
            }else if(nowDate>=13&&nowDate<18){
                this.timeTipMsg = '下午好，要不要来点下午茶。'
            }else if(nowDate>=18&&nowDate<22){
                this.timeTipMsg = "晚上好，夜晚的星空不错呢。"
            }else(
                this.timeTipMsg = '时间不早了，该睡觉了！！！'
            )
        }
    }
}
</script>

<style lang="scss" scoped>
.personal-container{
    width:100%; height: 100%;
    padding:20px 10px;
    .head{
        width:120px;
        height: 100%;
        display:flex;
        padding:10px;
        
    }
    .right-cont{
        flex: 1;
        height: 100%;
    }
    .head img{
        display: inline-block;
        width:70px;
        height:70px;
        border-radius: 50%;
    }

    .right-cont h3,.right-cont .intro{
        text-align:left;
    }
    .right-cont .intro{
        margin-top: 15px;
        line-height:25px;
        white-space: normal;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .intro .label{
        float: left;
    }

}
</style>