
const state = {
    routes:[]
}

const mutations = {
    addMenu(state,data){
        state.routes=data;
    }
}

const actions = {
    addMenu({commit},data){
        commit("addMenu",data)
    }
}

const getters = {
    getRoutes:state => state.routes
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}