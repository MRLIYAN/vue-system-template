<template>
   <div class="tagsMore-container">
        <el-dropdown @visible-change="dropChange" :class="dropStatus?'el-dropdown-color':''">
            <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right" :class="dropStatus?'el-icon-transform':''"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="closeTags('other')" icon="el-icon-close">关闭其他标签</el-dropdown-item>
                <el-dropdown-item @click.native="closeTags('left')" icon="el-icon-back">关闭左侧标签</el-dropdown-item>
                <el-dropdown-item @click.native="closeTags('right')" icon="el-icon-right">关闭右侧标签</el-dropdown-item>
                <el-dropdown-item @click.native="closeTags('all')" icon="el-icon-close">关闭全部标签</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
   </div>
</template>

<script>
export default {
    data() {
        return {
            dropStatus:false
        }
    },
    methods: {
        dropChange(status) {
            this.dropStatus = status;
        },
        closeTags(type) {
            let path = this.$route.path;
            switch(type){
                case "other":
                    this.$store.dispatch("tagsLink/closeOtherTags",path)
                    break;
                case "left":
                    this.$store.dispatch("tagsLink/closeLeftTags",path)
                    break;
                case "right":
                    this.$store.dispatch("tagsLink/closeRightTags",path)
                    break;
                case "all":
                    this.$store.dispatch("tagsLink/closeAllTags")
                    break;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.tagsMore-container{
    width:60px; 
    height: 50px;
    padding-right: 10px;
    position: absolute;
    top:0;
    right:0;
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;

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