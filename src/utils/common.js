// 公用的一些处理方法


//根据id和parentId把一组json转换为带有children属性的树形json
export function translateDataToTree(data) {
    let parents = data.filter(value => value.PARENTID == 'undefined' || value.PARENTID == null || value.PARENTID == '0')
    let children = data.filter(value => value.PARENTID !== 'undefined' && value.PARENTID != null)
    let translator = (parents, children) => {
        parents.forEach((parent) => {
            children.forEach((current, index) => {
                if (current.PARENTID === parent.ID) {
                    let temp = JSON.parse(JSON.stringify(children))
                    temp.splice(index, 1)
                    translator([current], temp)
                    typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
                }
            })
        })
    }
    translator(parents, children)
    return parents
}
 
 
export function translateEleTree(data) {
    let parents = data.filter(value => value.PID == 'undefined' || value.PID == null || value.PID == '0')
    let children = data.filter(value => value.PID !== 'undefined' && value.PID != null)
    let translator = (parents, children) => {
        parents.forEach((parent) => {
            parent.label = parent.NAME;
            children.forEach((current, index) => {
                if (current.PID === parent.ID) {
                    let temp = JSON.parse(JSON.stringify(children))
                    temp.splice(index, 1)
                    translator([current], temp)
                    current.label = current.NAME;
                    typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
                }
            })
        })
    }
    translator(parents, children)
    return parents
}
 
  //element ui tree组件，实现点击查询子级菜单
 // export function translateEleTree(treeData,data){
 //   let result = treeData;
 //   let pId = data[0].PID;
 //   if(result.length<=0){
 //     data.forEach(dataItem => {
 //       let obj = {
 //           ...dataItem
 //       };
 //       obj.label = dataItem.NAME;
 //       result.push(obj)
 //     })
 //     return result;
 //   }else{
 //     treeDataEach(result,data);
 //   }
 
 //   function treeDataEach(result,data){
 //     result.forEach(item => {
 //       debugger;
 //       if(item?.children&&item?.children.length>1){
 //         treeData(item.children)
 //       }else{
 //         if(item.ID == pId){
 //           let children = [];
 //           data.forEach(dataItem => {
 //             let obj = {
 //                 ...dataItem
 //             };
 //             obj.label = dataItem.NAME;
 //             children.push(obj)
 //           })
 //           item.children = children;
 //         }
 //       }
 //     })
 //   }
 //   return result;
 
 // }
 
  //element ui select获取label键
export function getSelectLabel(options,value){
    let label = '';
    for(let i = 0; i<options.length; i++){
        if(options[i].value == value){
            label = options[i].name;
            break;
        }
    }
    return label;
}

//element ui select获取label键,获取一组，也就是多选
 export function getSelectLabelArr(options,value){
    let finalArr = [];
    for(let i = 0; i<value.length; i++){
        for(let j = 0; j<options.length; j++){
        if(value[i] == options[j].value){
            finalArr.push(options[j].name)
        }
        }
    }
    return finalArr;
}