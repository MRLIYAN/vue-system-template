<template>
    <div :id="id" style="width:100%;height:100%;"></div>
</template>

<script>
let echarts = require('echarts');
export default {
    name:"chart",
    data() {
        return {

        }
    },
    props: {
        id:{
            type:String,
            require:true
        },
        option:{
            type:Object,
            require:true
        }
    },
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            let myChart = echarts.init(document.getElementById(this.id));
            myChart.clear();
            let option = this.option;
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>