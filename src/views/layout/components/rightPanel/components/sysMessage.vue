<template>
    <div class="sysMessage-container" title="消息">
        <el-badge class="item" :value="value" :max="99" :hidden="value<=0?true:false">
            <span class="icon el-icon-message-solid"></span>
        </el-badge>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value:100
        }
    },
}
</script>

<style lang="scss" scoped>
.sysMessage-container{
    width:40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .el-badge{
        display: flex;
        justify-content: center;
        align-items: center;
        width:30px;
        height: 30px;
    }
    ::v-deep .el-badge__content.is-fixed{
        top:3px;
        right:13px;
    }
    .icon{
        font-size: 26px;
        color:#838588;
    }
}
</style>