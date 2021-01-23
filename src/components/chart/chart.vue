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
            required:true
        }
    },
    mounted() {
        this.initChart();
    },
    activated() {
        //此句必须加，因为页面开启了keep-alive缓存，如果不加，resize时，其他页面的echarts不会执行resize，图表出问题。
        this.chartResize();
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
                this.chartResize();
            },300)
        }
    },
    methods: {
        initChart() {
            this.$nextTick(() => {
                this.myChart = echarts.init(this.$refs.chartContainer);
                this.myChart.clear();
                this.myChart.setOption(this.option);
                let that = this;
                window.addEventListener("resize",function(){
                    if(that.myChart){
                        that.myChart.resize();
                    }
                })
            })
        },
        chartResize(){
            if(this.myChart){
                this.myChart.resize();
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>