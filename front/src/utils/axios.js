import axios from 'axios'
import vue from '../main'

let baseURL;
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000';
} else if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://localhost:3000';
}

//创建axios实例
let instance = axios.create({
    //请求ip
    baseURL: baseURL,
    timeout: 5000  //毫秒
})

// let getToken = () =>{
//     return sessionStorage.getItem("token")
// }
//请求拦截
instance.interceptors.request.use(function(config) {
    //添加加载效果
    const loading = vue.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
    setTimeout(()=>{
        loading.close(); 
    },1000)
    return config;

}, function (error) {
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '服务器异常，请联系管理员！'
    return Promise.reject(error)
})

//响应拦截
instance.interceptors.response.use((response) => {
    // 成功响应的拦截
    return Promise.resolve(response.data)
}, err => {
    // 失败响应的拦截
    console.log(err)
    if (err.response) {
        // 失败响应的status需要在response中获得
        console.log(err.response)
        switch (err.response.status) {
            // 对得到的状态码的处理，具体的设置视自己的情况而定
            case 401:
                console.log('未登录')
                window.location.href = '/'
                break
            case 404:
                window.location.href = '/'
                break
            case 405:
                console.log('不支持的方法')
                break
            // case ...
            default:
                console.log('其他错误')
                break
        }
    }
    return Promise.reject(err)
})

export default instance
