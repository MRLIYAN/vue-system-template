import request from '@/api/req.js'
import VueCookies from 'vue-cookies'

const tokenKey = 'userToken';

//设置token
export function setToken(token){
    VueCookies.set(tokenKey,token,0);
}

//获得token信息
export function getToken(){
    return VueCookies.get(tokenKey)||undefined;
}

//移除token信息
export function removeToken(){
    VueCookies.remove(tokenKey);
}

//登录请求token
export function login(param){
    return request({
        url: 'user.json',
        method: 'get',
        data:param
    })
}

//设置用户信息
export function getUserInfo(token){
    return request({
        url: 'userInfo.json',
        method: 'get',
        data:{
            token
        }
    })
}