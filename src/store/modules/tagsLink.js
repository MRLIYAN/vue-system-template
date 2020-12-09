import router from '@/router'
const state = {
    tagsVisitedRoute:[{
        title:"主页",
        icon:"el-icon-s-home",
        name:"/home"
    }],
    tagsValue:'/home',
}

const mutations = {
    addVisitedRoute(state,route) {
        state.tagsValue = route.name;
        //先判断是不是首页，不是首页往下走，否则结束
        if(route.name == '/' || route.name == '/home'){
            return false;
        }
        //循环判断有没有当前的路由，有不添加
        let hasRoute = state.tagsVisitedRoute.some(item => {
            return item.name == route.name
        })
        if(hasRoute == false){
            state.tagsVisitedRoute.push(route);
        }else{
            return false;
        }
    },
    closeTagsRoute(state,path) {
        let routeAll = state.tagsVisitedRoute;
        //获取关闭标签存储中对应的索引
        let index = routeAll.findIndex(item => {
            return item.name == path;
        })
        //返回不包含删除项的索引的标签，删除了当前关闭的标签
        state.tagsVisitedRoute = routeAll.filter((item,i) => {
            return i!=index;
        })
        /*判断删除的标签是否和当前选中的标签一致，如果一致，不做处理，不一致
        *则判断当前关闭的标签前后是否有标签，如果是最后一个标签，跳转到上一个标签，
        *如果后面还有标签，跳转到关闭标签的下一个标签
        */
        if(path == state.tagsValue){
            if(index < state.tagsVisitedRoute.length-1){
                state.tagsValue = state.tagsVisitedRoute[index].name
            }else{
                state.tagsValue = state.tagsVisitedRoute[state.tagsVisitedRoute.length-1].name
            }
            router.push({path:state.tagsValue})
        }
    },
    closeOtherTags(state,path) {
        if(state.tagsVisitedRoute.length<=2){
            return false;
        }
        let firstHome = state.tagsVisitedRoute[0];
        let filterArr = state.tagsVisitedRoute.filter(item => {
            return item.name == path
        })
        state.tagsVisitedRoute = [firstHome,...filterArr]
        
    },
    closeLeftTags(state,path) {
        if(state.tagsVisitedRoute.length<=2){
            return false;
        }
        let firstHome = state.tagsVisitedRoute[0];
        let index = state.tagsVisitedRoute.findIndex(item => {
            return item.name == path
        })
        let filterArr = state.tagsVisitedRoute.filter((item,i) => {
            return i>=index
        })
        state.tagsVisitedRoute = [firstHome,...filterArr]
    },
    closeRightTags(state,path) {
        if(state.tagsVisitedRoute.length<=2){
            return false;
        }
        let index = state.tagsVisitedRoute.findIndex(item => {
            return item.name == path
        })
        let filterArr = state.tagsVisitedRoute.filter((item,i) => {
            return i<=index
        })
        state.tagsVisitedRoute = filterArr
        
    },
    closeAllTags(state) {
        if(state.tagsVisitedRoute.length<=1){
            return false;
        }
        state.tagsVisitedRoute = [state.tagsVisitedRoute[0]]
        state.tagsValue = state.tagsVisitedRoute[0].name
        router.push({path:state.tagsValue})
    },
}

const actions = {
    addVisitedRoute({commit},route){
        commit("addVisitedRoute",route)
    },
    closeTagsRoute({commit},path) {
        commit("closeTagsRoute",path);
    },
    closeOtherTags({commit},path) {
        commit("closeOtherTags",path);
    },
    closeLeftTags({commit},path) {
        commit("closeLeftTags",path);
    },
    closeRightTags({commit},path) {
        commit("closeRightTags",path);
    },
    closeAllTags({commit},path) {
        commit("closeAllTags",path);
    },
}



export default {
    namespaced: true,
    state,
    mutations,
    actions
}