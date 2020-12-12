import {login,setToken,getToken,removeToken,getUserInfo} from '@/utils/user.js' 
import {dealRoute} from '@/utils/menu.js'
import {resetRouter} from '@/router'

const state = {
    routes:[],
    userInfo:{
        token:'',
        userName:'',
        role:''
    }
}

const mutations = {
    addMenu(state,data){
        state.routes=data;
    },
    removeRoutes(state,routes = []) {
        state.routes = routes
    },
    getUserInfo(state,user) {
        state.userInfo.userName = user.userName;
        state.userInfo.role = user.role;
    },
    setToken(state,token){
        state.userInfo.token = token;
    },
    removeUserInfo(state) {
        state.userInfo.user = '';
        state.userInfo.role = '';
        state.userInfo.token = '';
    }
}

const actions = {
    login({commit},param) {
        return new Promise((resolve,reject) => {
            login(param).then(res => {
                let token = res.result.user.token
                setToken(token)
                commit('setToken',token)
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
    },
    logoff({commit}) {
        return new Promise((resolve) => {
            removeToken();
            commit("removeUserInfo")
            commit("removeRoutes")
            resetRouter();
            resolve();
        })
    },
    getUserInfo({commit}) {
        return new Promise((resolve,reject) => {
            getUserInfo(getToken()).then(res => {
                let user = res.result.user;
                commit('getUserInfo',user);
                dealRoute(res.result.menu);
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
    },
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
    actions,
    getters
}