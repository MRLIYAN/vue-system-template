<template>
   <div class="main-container">
        <el-scrollbar class="el-scrollbar">
            <div class="main-content-container">
                <transition name="fade-slide" mode="out-in">
                    <keep-alive>
                        <router-view :key="$route.path"></router-view>
                    </keep-alive>
                </transition>
            </div>
        </el-scrollbar>
   </div>
</template>

<script>
export default {
   
}
</script>
