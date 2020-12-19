<template>
    <div class="home-container">
        <div class="top-person bg-white animate__animated animate__fadeInDown common-boxShadow">
            <personal />
        </div>
        <div class="home-chart">
            <homeChart />
        </div>
    </div>
</template>

<script>
import personal from './components/personal'
import homeChart from './components/homeChart'
export default {
    components:{
        personal,
        homeChart
    }
}
</script>

<style lang="scss" scoped>
.home-container{
    .top-person{
        width:100%; height:150px;
        border-radius: 10px;
    }
    .home-chart{
        margin-top:20px;
    }
}
</style>