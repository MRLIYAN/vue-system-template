<template>
    <div class="home-container">
        <div class="container top-person bg-white animate__animated animate__fadeInDown">
            <personal />
        </div>
        <div class="container home-chart">
            <homeChart />
        </div>
        <div class="container link">
            <homeBlock />
        </div>
        <div class="table">
            <homeFoot />
        </div>
    </div>
</template>

<script>
import personal from './components/personal'
import homeChart from './components/homeChart'
import homeBlock from './components/homeBlock'
import homeFoot from './components/homeFoot'
export default {
    components:{
        personal,
        homeBlock,
        homeChart,
        homeFoot
    }
}
</script>

<style lang="scss" scoped>
.home-container{
    .top-person{
        width:100%; height:150px;
        border-radius: 10px;
    }
    .container{
        margin-bottom:20px;
    }
}
</style>