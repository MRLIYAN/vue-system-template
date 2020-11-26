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

//设置用户信息
export function setUser(){

}

//获取用户信息
export function getUser(){
    
}