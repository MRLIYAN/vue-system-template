<template>
    <div :id="id" class="charts-container" style="width:100%;height:100%;"></div>
</template>

<script>
let echarts = require('echarts');
export default {
    name:"chart",
    data() {
        return {
            myChart:null,
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
    beforeDestroy() {
        if (!this.myChart) {
            return
        }
        this.myChart.dispose()
        this.myChart = null
    },
    watch:{
        '$store.state.app.slideMenu'() {
            //延时效果必须加，因为菜单收缩有个动画时间，否则不起作用
            setTimeout(() => {
                this.myChart.resize();
            },300)
        }
    },
    methods: {
        initChart() {
            this.myChart = echarts.init(document.getElementById(this.id));
            this.myChart.clear();
            let option = this.option;
            this.myChart.setOption(option);
            let that = this;
            window.addEventListener("resize",function(){
                that.myChart.resize();
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>