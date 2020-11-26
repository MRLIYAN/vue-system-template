
let menudata = '';
let path = '';
//处理菜单修改component引入
function dealMenu(data){
    for(let i=0; i<data.length; i++){
        if(data[i].children&&data[i].children.length>0){
            path += data[i].path+'/';
            dealMenu(data[i].children);
        }else{
            if(data[i].component == 'layout'){
                path = '';
                continue;
            }else{
                path += data[i].path;
                data[i].component = loadingComponent(path);
                path = path.substring(0,path.length-data[i].path.length)
            }
        }
       
    }
}


function dealLayout(data){
    for(let i=0; i<data.length; i++){
        if(data[i].component == 'layout'){
            data[i].component = loadingLayout();
            if(data[i].children&&data[i].children.length>0){
                dealLayout(data[i].children);
            }else{
                continue;
            }
        }else{
            continue;
        }
        
    }
}



function loadingComponent(path){
    return () => import(`@/views${path}.vue`)
}

function loadingLayout(){
    return () => import('@/views/layout')
}

export function dealRoute(data){
    menudata = data;
    dealMenu(menudata);
    dealLayout(menudata);
    return menudata
}