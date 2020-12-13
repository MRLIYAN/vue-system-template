<template>
   <div class="personal-container">
       <el-dropdown @visible-change="dropChange" :class="dropStatus?'el-dropdown-color':''">
            <span class="el-dropdown-link">
                <span class="user-head">
                    <img src="@/assets/images/user/head.jpg" alt="">
                </span>
                <span class="username">{{userName}}</span>
                <i class="el-icon-arrow-down el-icon--right" :class="dropStatus?'el-icon-transform':''"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
                <a href="https://github.com/MRLIYAN/vue-system-template" target="_target" style="text-decoration:none; color:inherit;">
                    <el-dropdown-item icon="el-icon-s-platform">Github</el-dropdown-item>
                </a>
                <el-dropdown-item icon="el-icon-unlock" @click.native="logoff">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
   </div>
</template>

<script>
export default {
    data() {
        return {
            dropStatus:false,
            userName:this.$store.state.user.userInfo.userName,
        }
    },
    
    methods: {
        dropChange(status) {
            console.log(this.$store.state.user);
            this.dropStatus = status;
        },
        logoff() {
            this.$store.dispatch('user/logoff').then(() => {
                this.$router.push({path:'/login'})
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.personal-container{
    height: 100%;
    padding-left:10px;
    cursor: pointer;

    .user-head{
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }
    .user-head img{
        display: inline-block;
        width:35px;
        height:35px;
        border-radius: 50%;
        background: red;
    }

    .el-dropdown,.el-dropdown-link{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    &:hover .el-icon-arrow-down{
        transition:transform .2s;
    }
    .el-dropdown-color{
        color:#1890ff;
    }
    .el-icon-transform{
        transform:rotateZ(180deg);
    }
}
</style>