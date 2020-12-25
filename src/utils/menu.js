import store from '@/store'
import {notfoundrouter} from '@/router'

let menudata = '';
//处理菜单修改component引入
function dealMenu(data){
    for(let i=0; i<data.length; i++){
        if(data[i].component){
            data[i].component = loadingComponent(data[i].component);
        }
        if(data[i].children&&data[i].children.length>0){
            dealMenu(data[i].children);
        }
    }
}


function loadingComponent(component){
    switch(component){
        case 'layout':
            return () => import(`@/views/layout`)
        default:
            return () => import(`@/${component}`)

    }
}


let home = null;
function findHome(data){
    for(let i=0; i<data.length; i++){
        if(data[i].children){
            findHome(data[i].children)
        }else{
            if(data[i].path == '/home'){
                home = data[i];
                break;
            }
        }
    }
    return home;
}


export function dealRoute(data){
    menudata = data;
    dealMenu(menudata);
    menudata.push(...notfoundrouter);
    store.dispatch('user/addMenu',menudata);
    //查找home组件，一些地方用到，存到vuex直接赋值。
    let home = findHome(menudata);
    store.commit("user/addHome",home)
    store.commit("tagsLink/initVisitedRoute",home)
}