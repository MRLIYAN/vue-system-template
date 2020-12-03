<template>
   <div class="main-container">
        <transition name="fade-slide" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
   </div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
.main-container{
    .fade-slide-enter,.fade-slide-leave-to{
        transform: translateX(100%);
    }
    .fade-slide-enter-active,.fade-sldie-leave-active{
        transition: all .4s ease;
    }
}

</style>