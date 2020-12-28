<template>
    <div class="homeBlock-container flex-h-between">
        <div class="block animate__animated animate__zoomIn">
            <a target="_blank" href="https://cn.vuejs.org/">
                <div class="left-icon flex-center">
                    <img src="@/assets/logo.png" alt="">
                </div>
                <div class="right-font flex-z-around">vue</div>
            </a>
        </div>
        <div class="block animate__animated animate__zoomIn">
            <a target="_blank" href="https://router.vuejs.org/zh/">
                <div class="left-icon flex-center">
                    <img src="@/assets/logo.png" alt="">
                </div>
                <div class="right-font flex-z-around">vue-router</div>
            </a>
        </div>
        <div class="block animate__animated animate__zoomIn">
            <a target="_blank" href="https://vuex.vuejs.org/zh/">
                <div class="left-icon flex-center">
                    <img src="@/assets/logo.png" alt="">
                </div>
                <div class="right-font flex-z-around">vuex</div>
            </a>
        </div>
        <div class="block animate__animated animate__zoomIn">
            <a target="_blank" href="https://element.eleme.cn/#/zh-CN">
                <div class="left-icon flex-center">
                    <img src="@/assets/images/home/element.png" alt="">
                </div>
                <div class="right-font flex-z-around">element-ui</div>
            </a>
        </div>
        <div class="block animate__animated animate__zoomIn">
            <a target="_blank" href="http://www.axios-js.com/">
                <div class="left-icon flex-center">
                    <img src="@/assets/images/home/axios.png" alt="">
                </div>
                <div class="right-font flex-z-around">axios</div>
            </a>
        </div>
        <div class="block animate__animated animate__zoomIn">
            <a target="_blank" href="https://echarts.apache.org/zh/index.html">
                <div class="left-icon flex-center">
                    <img src="@/assets/images/home/echarts.png" alt="">
                </div>
                <div class="right-font flex-z-around">echarts</div>
            </a>
        </div>
        <div class="block animate__animated animate__zoomIn">
            <a target="_blank" :href="settings.github">
                <div class="left-icon flex-center">
                    <img src="@/assets/images/home/github.png" alt="">
                </div>
                <div class="right-font flex-z-around">github</div>
            </a>
        </div>
    </div>
</template>

<script>
import settings from '@/settings.js'
export default {
    data() {
        return {
            settings
        }
    },                                                                 
}
</script>

<style lang="scss" scoped>
.homeBlock-container{
    width:100%; height: 105px;
    .block{
        width:13.28%; height: 100%;
        border-radius: 10px; cursor: pointer;
        background:#fff;
        padding:10px;
        border:1px solid transparent;
        a{
            display: flex;
            width:100%; height: 100%;
            text-decoration: none;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            color:inherit;
        }
    }
  
    
    .block .left-icon{
        width:100%;
        img{
            display: inline-block;
            width:25px;
            height:25px;
            transition:transform .3s;
        }
    }
    .block:hover{
        border:1px solid #1890ff;
        .left-icon img{
            transform:scale(1.2);
        }
        .right-font{
            color:#1890ff;
            transition:all .3s;
        }
    }
    .block .right-font{
        font-size: 20px;
    }
}
</style>