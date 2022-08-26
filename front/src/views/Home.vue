<template>
  <div class="home">
    <!-- 网站主页 -->
    <Tab></Tab>
    <Title></Title>
    <Swiper></Swiper>
    <!-- 自定义组件封装 参数1 标题 参数2 图片数组-->
    <Lists :title="title" :urls="urls"></Lists>
    <Lists :title="title2" :urls="urls"></Lists>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Tab from '../components/home/Tab'
import Title from '../components/home/Title'
import Swiper from '../components/home/Swiper'
import Footer from '../components/home/Footer'
import Lists from '../components/home/Lists'

export default {
  name: 'Home',
  data(){
    return {
      title:"航程推荐",
      title2:"热门航程",
      urls: [
        require('../assets/images/list.jpg'),
        require('../assets/images/download1.jpg'),
        require('../assets/images/download2.jpg'),
        require('../assets/images/download3.jpg')
      ]
    }
  },
  components: {
    Tab,
    Title,
    Swiper,
    Lists,
    Footer
  }
}
</script>
