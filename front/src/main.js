import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入第三方模块
import './config/config'

Vue.config.productionTip = false
let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


//路由跳转前做判断   路由守卫
router.beforeEach((to, from, next) => {
  //判断路由对象的meta属性中是否存在token值
  // if(to.meta.token){
    //存在登录信息 让其通过校验
    next();
  // }else{
    // 游客模式登录网站 
    // if(to.path == '/login'){
    //   next()
    // }
  // }
})

export default vue
