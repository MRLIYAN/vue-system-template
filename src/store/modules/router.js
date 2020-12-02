
const state = {
    routes:[]
}

const mutations = {
    addMenu(state,data){
        state.routes=data;
    },
    removeRoutes(state,routes) {
        state.routes = routes
    }
}

const actions = {
    addMenu({commit},data){
        commit("addMenu",data)
    },
    removeRoutes({commit}) {
        commit("removeRoutes",[])
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