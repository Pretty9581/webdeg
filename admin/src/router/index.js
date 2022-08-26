import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
import StudentList from '@/components/students/StudentList'
import WorkList from '@/components/students/WorkList'
import DataOverView from '@/components/dataAnalysis/DataOverView'
import MapData from '@/components/dataAnalysis/MapData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',
      hidden:true
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      hidden:true
    },
    {
      path: '/home',
      name: '学生管理',
      component: Home,
      iconClass:'fa fa-list-alt',
      children:[
        {
          path: '/home/studentlist',
          name: '学生列表',
          component: StudentList,
          iconClass:'fa fa-users',
        },
        {
          path: '/home/worklist',
          name: '作业列表',
          component: WorkList,
          iconClass:'fa fa-list',
        }
      ]
    },
    {
      path: '/home',
      name: '数据分析',
      component: Home,
      iconClass:'fa fa-bar-chart',
      children:[
        {
          path: '/home/dataview',
          name: '数据概览',
          component: DataOverView,
          iconClass:'fa fa-line-chart',
        },
        {
          path: '/home/mapdata',
          name: '地图概览',
          component: MapData,
          iconClass:'fa fa-map-o',
        },
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      hidden:true
    }
  ],
  mode:'history'
})
