<template>
    <div class="homeChart-container flex-h-between">
        <div class="left animate__animated animate__slideInLeft">
            <div class="block left-top animate__animated animate__zoomIn">
                <div class="title">
                    <span class="icon">
                        <img src="@/assets/images/home/user.png" alt="">
                    </span>
                    <span class="font">访问人数</span>
                </div>                 
                <div class="cont flex-h-around">
                    <div class="visit-block">
                        <div class="font">今日访问量</div>
                        <div class="number">
                            <animate-number
                            ref="myNum"
                            from="0" 
                            to="2568" 
                            duration="2500" 
                            easing="easeOutQuad"
                            ></animate-number>
                        </div>
                    </div>
                    <div class="visit-block">
                        <div class="font">昨日访问量</div>
                        <div class="number">
                            <animate-number
                            ref="myNum"
                            from="0" 
                            to="3452" 
                            duration="2500" 
                            easing="easeOutQuad"
                            ></animate-number>
                        </div>
                    </div>
                    <div class="visit-block">
                        <div class="font">较昨日增长</div>
                        <div class="number">
                            <animate-number
                            ref="myNum"
                            from="0" 
                            to="884" 
                            duration="2500" 
                            easing="easeOutQuad"
                            ></animate-number>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block left-chart bg-white animate__animated animate__zoomIn">
                <div class="title">
                    <span class="icon">
                        <img src="@/assets/images/home/order.png" alt="">
                    </span>
                    <span class="font">订单信息</span>
                </div>                 
                <div class="cont">
                    <chart v-if="orderOption" :id="orderId" :option="orderOption" />
                </div>
            </div>
        </div>

        <div class="block right bg-white animate__animated animate__fadeInRight">
            <div class="title">
                <span class="icon">
                    <img src="@/assets/images/home/price.png" alt="">
                </span>
                <span class="font">销售额</span>
            </div>                 
            <div class="cont">
                <chart v-if="priceOption" :id="priceId"  :option="priceOption" /> 
            </div>
        </div>
    </div>
</template>

<script>
import chart from '@/components/chart/chart'
let echarts = require('echarts');
export default {
    data() {
        return {
            orderId:"",
            orderOption:null,
            priceId:"",
            priceOption:null
        }
    },
    components: {
        chart
    },
    mounted() {
        //this.$refs.myNum.start()
        this.getPrice();
        this.getOrder();
    },
    methods: {
        getPrice(){
            this.$reqdata({
                url:'homeChart.json',
                mehotd:'get'
            }).then(res => {
                this.orderId = "orderChart";
                let dataX = res.result.data.order.dataX;
                let dataY = res.result.data.order.dataY;
                let max = 0;
                for(let i=0;i<dataY.length; i++){
                    if(max<dataY[i]){
                        max = dataY[i]
                    }else{
                        continue;
                    }
                }
                let option = {
                    visualMap: [{
                        show: false,
                        type: 'continuous',
                        seriesIndex: 0,
                        min: 0,
                        max:max,
                        inRange:{
                            color:['#c2df59','#4edc92'],
                        }
                    }, {
                        show: false,
                        type: 'continuous',
                        seriesIndex: 1,
                        dimension: 0,
                        min: 0,
                        max: dataY.length - 1,
                    }],
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        bottom: '40',
                        top: '20',
                        left:'10%',
                        right:'20'
                    },
                    xAxis: [{
                        data: dataX
                    }],
                    yAxis: [{
                    }],
                    series: [{
                        type: 'line',
                        smooth: true,
                        barWidth:5,
                        showSymbol: false,
                        data: dataY,
                        lineStyle:{
                            width:4
                        }
                    }],
                    animation:true,
                    animationDuration:2000
                }
                this.orderOption = option;
            })
        },
        getOrder(){
            this.$reqdata({
                url:'homeChart.json',
                mehotd:'get'
            }).then(res => {
                this.priceId = "priceChart";
                let dataX = res.result.data.price.dataX;
                let dataY = res.result.data.price.dataY;
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        // formatter: '{b}<br/>{c}亿元'
                        formatter:function(param){
                            return param[0].name+'<br/>'+param[0].marker+param[0].value+'亿元'
                        }
                    },
                    grid: {
                        bottom: '40',
                        top: '10%',
                        left:'5%',
                        right:'20'
                    },
                    xAxis: [{
                        data: dataX
                    }],
                    yAxis: [{
                        axisLabel:{
                            formatter: '{value}'
                        }
                    }],
                    series: [{
                        type: 'bar',
                        barWidth:20,
                        showSymbol: false,
                        data: dataY,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#e66373'
                            }, 
                            {
                                offset: 0.4,
                                color: '#ed806b'
                            },
                            {
                                offset: 0.7,
                                color: '#f08c50'
                            },
                            {
                                offset: 1,
                                color: '#f0b050'
                            },]),
                        },
                    }],
                    animation:true,
                    animationDuration:2000
                }
                this.priceOption = option;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.homeChart-container{
    height: 510px;

    .left{
        width:30%;
        height:100%;
        margin-right:20px;
    }
    .right{
        flex:1;
        height: 100%;
    }

    .left-top{
        width:100%; height:200px;
        background:linear-gradient(to right,#3da3f7,#479bf5,#5790f7,#6685fa,#6e83f8);
        color:#fff;
    }
    .left-chart{
        width:100%; height:290px;
        margin-top: 20px;
    }

    .block{
        border-radius:10px;
        overflow: hidden;
    }
    .block .title{
        width:100%; height:45px;padding:0px 15px;
        border-bottom:1px solid rgba(240,240,240);
        display:flex; justify-content: flex-start; align-items: center;
    }
    .block .title .icon{
        display: inline-block;
        width:25px; height:25px; margin-right: 10px;
        img{
            display: inline-block;
            width:100%; height:100%;
        }
    }
    .block .cont{
        width:100%; height:calc(100% - 45px);
        padding:10px 15px;
    }

    .visit-block div{
        margin:30px 0;
    }
    .visit-block .font{
        font-size: 18px;
    }
    .visit-block .number{
        font-size: 20px;
    }

   
}
</style>