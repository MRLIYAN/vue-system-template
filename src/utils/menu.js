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


let noAliveRoutes = [];
function eachNoKeepAliveRoutes(data){
    for(let i=0; i<data.length; i++){
        if(data[i].redirect || data[i].meta.isChild=='true'){
            eachNoKeepAliveRoutes(data[i].children)
        }else{
            if(data[i]?.meta?.keepAlive == 'false'){
                noAliveRoutes.push(data[i]?.name)
            }else{
                continue;
            } 
        }
    }
}

function dealNoKeepAliveRoutes(data){
    eachNoKeepAliveRoutes(data);
    store.dispatch('user/addAliveRoutes',noAliveRoutes)
}

export function dealRoute(data){
    menudata = data;
    dealMenu(menudata);
    dealNoKeepAliveRoutes(menudata);//遍历不需要缓存的路由名称
    menudata.push(...notfoundrouter);
    store.dispatch('user/addMenu',menudata)
}