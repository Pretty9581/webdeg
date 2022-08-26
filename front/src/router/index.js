import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Login from '../views/login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login',
  },
  {
    path:'/login',
    name:'Login',
    meta:{
      token:true
    },
    component: () => import("../views/Login.vue")
  },
  {
    path:'/register',
    name:'Register',
    meta:{
      token:false
    },
    component: () => import("../views/Register.vue")
  },
  {
    path: '/home',
    name: 'Home',
    meta:{
      token:true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path:'/userInfo',
    name:'UserInfo',
    meta:{
      token:false
    },
    component: () => import('../components/userInfo/UserInfo.vue')
  },
  {
    path: '/password',
    name: 'Password',
    meta:{
      token:false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/password/ChangePassword.vue')
  }
]


const router = new VueRouter({
  routes
})

export default router
