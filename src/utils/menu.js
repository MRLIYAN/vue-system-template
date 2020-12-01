import store from '@/store'
import {notfoundrouter} from '@/router'

let menudata = '';
//处理菜单修改component引入
function dealMenu(data){
    for(let i=0; i<data.length; i++){
        data[i].component = loadingComponent(data[i].component);
        if(data[i].children&&data[i].children.length>0){
            dealMenu(data[i].children);
        }
    }
}


function loadingComponent(component){
    switch(component){
        case 'layout':
            return () => import(`@/views/layout/index.vue`)
        default:
            return () => import(`@/views${component}/index.vue`)

    }
}


export function dealRoute(data){
    menudata = data;
    dealMenu(menudata);
    menudata.push(...notfoundrouter);
    store.dispatch('router/addMenu',menudata)
}