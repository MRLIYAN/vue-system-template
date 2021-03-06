import router from '@/router'
const state = {
    tagsVisitedRoute:[],
    tagsValue:'/home',
}

const mutations = {
    initVisitedRoute(state,home){
        state.tagsVisitedRoute = [home];
    },
    addVisitedRoute(state,route) {
        state.tagsValue = route.path;
        //先判断是不是首页，不是首页往下走，否则结束
        if(route.path == '/' || route.path == '/home'){
            return false;
        }
        //循环判断有没有当前的路由，有不添加
        let hasRoute = state.tagsVisitedRoute.some(item => {
            return item.path == route.path
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
            return item.path == path;
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
                state.tagsValue = state.tagsVisitedRoute[index].path
            }else{
                state.tagsValue = state.tagsVisitedRoute[state.tagsVisitedRoute.length-1].path
            }
            router.push({path:state.tagsValue})
        }
    },
    closeOtherTags(state,path) {
        //如果当前标签是主页，那就只保留主页，否则删除当前以及除主页的其他标签
        if(path == '/'||path == '/home'){
            state.tagsVisitedRoute = [state.tagsVisitedRoute[0]]
        }else{
            let firstHome = state.tagsVisitedRoute[0];
            let filterArr = state.tagsVisitedRoute.filter(item => {
                return item.path == path
            })
            state.tagsVisitedRoute = [firstHome,...filterArr]
        }
        
    },
    closeLeftTags(state,path) {
        //如果当前是主页，那就左侧没东西，不删，否则删除当前左侧的除主页的所有标签
        if(path == '/'||path == '/home'){
            return false;
        }else{
            let firstHome = state.tagsVisitedRoute[0];
            let index = state.tagsVisitedRoute.findIndex(item => {
                return item.path == path
            })
            let filterArr = state.tagsVisitedRoute.filter((item,i) => {
                return i>=index
            })
            state.tagsVisitedRoute = [firstHome,...filterArr]
        }
    },
    closeRightTags(state,path) {
        //如果当前是主页，那就只保留主页，否则删除右侧所有标签
        if(path == '/'||path == '/home'){
            state.tagsVisitedRoute = [state.tagsVisitedRoute[0]]
        }else{
            let index = state.tagsVisitedRoute.findIndex(item => {
                return item.path == path
            })
            let filterArr = state.tagsVisitedRoute.filter((item,i) => {
                return i<=index
            })
            state.tagsVisitedRoute = filterArr
        }
        
    },
    closeAllTags(state) {
        //关闭所有，只保留主页，并跳转到主页
        state.tagsVisitedRoute = [state.tagsVisitedRoute[0]]
        state.tagsValue = state.tagsVisitedRoute[0].path
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