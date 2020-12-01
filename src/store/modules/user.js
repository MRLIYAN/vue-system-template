import {login,setToken,getToken,getUserInfo} from '@/utils/user.js' 
import {dealRoute} from '@/utils/menu.js'

const state = {
    userInfo:{
        token:'',
        username:'',
        role:''
    }
}

const mutations = {
    getUserInfo(state,user) {
        state.userInfo.user = user.userName;
        state.userInfo.role = user.role;
    },
    setToken(state,token){
        state.userInfo.token = token;
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
    }
}




export default {
    namespaced: true,
    state,
    mutations,
    actions
}