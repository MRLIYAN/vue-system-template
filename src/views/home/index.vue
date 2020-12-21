<template>
    <div class="home-container">
        <div class="container top-person bg-white animate__animated animate__fadeInDown">
            <personal />
        </div>
        <div class="container home-chart">
            <homeBlock style="display:none;"/>
        </div>
    </div>
</template>

<script>
import personal from './components/personal'
import homeBlock from './components/homeBlock'
export default {
    components:{
        personal,
        homeBlock
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