import Vue from 'vue'

// 引入axios
import axios from 'axios'
//挂载axios
Vue.prototype.$axios = axios

// 引入elementUI
import ElementUI from 'element-ui'
//引入css
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 引入animate.css
import animated from 'animate.css' 
// console.log(animated)
Vue.use(animated)

