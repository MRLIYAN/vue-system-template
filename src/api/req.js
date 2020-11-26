import axios from 'axios'

const rootUrl = '/js/json/'

const instance = axios.create({
    baseURL:rootUrl,
    timeout: 5000
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    //console.log("拦截器请求前")
    return config;
  }, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(response => {
    // 对响应数据做点什么
    //console.log("拦截器相应前")
    return response;
  }, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default (config = {}) => {
    return new Promise((resolve,reject) => {
        instance({
            ...config
        }).then(response => {
            if(response.status == 200){
                resolve(response.data)
            }else{
                reject(response)
            }
        }).catch(error => {
            reject(error)
        })
    })
};