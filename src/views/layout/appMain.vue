<template>
   <div class="main-container">
        <transition name="fade-slide" mode="out-in">
            <keep-alive>
                <router-view :key="$route.path"></router-view>
            </keep-alive>
        </transition>
   </div>
</template>

<script>
export default {
   
}
</script>
