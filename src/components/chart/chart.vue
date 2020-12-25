<template>
    <div ref="chartContainer" class="charts-container" style="width:100%;height:100%;"></div>
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
        option:{
            type:Object,
            require:true
        }
    },
    mounted() {
        this.initChart();
        //window.onresize = this.myChart.resize;
    },
    beforeDestroy() {
        if (!this.myChart) {
            return
        }
        this.myChart.dispose()
        this.myChart = null;
       
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
            this.myChart = echarts.init(this.$refs.chartContainer);
            this.myChart.clear();
            this.myChart.setOption(this.option);
            let that = this;
            window.addEventListener("resize",function(){
                if(that.myChart){
                    that.myChart.resize();
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>