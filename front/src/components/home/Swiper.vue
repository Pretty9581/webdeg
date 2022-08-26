<template>
  <div class="swiper_box">
    <!--动态将图片轮播图的容器高度设置成与图片一致-->
    <el-carousel class="swiper" :height="bannerHeight + 'px'">
      <!--遍历图片地址,动态生成轮播图-->
      <el-carousel-item v-for="(item,i) in arr" :key="i">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data(){
        return {
            bannerHeight : '' ,
            arr:
                [
                  require('../../assets/images/download.jpg'),
                  require('../../assets/images/download1.jpg'),
                  require('../../assets/images/download2.jpg'),
                  require('../../assets/images/download3.jpg')
                ]
        }
    },
    mounted() {
        this.imgLoad()
    },
    methods: {
        imgLoad() {
            this.$nextTick(function() {
                // 获取窗口宽度*图片的比例，定义页面初始的轮播图高度
                this.bannerHeight = document.body.clientWidth*1/4;
                // console.log(this,)
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper_box{
    width:100%;
    height:620px;
    // background: red;
    .swiper{
        width:100%;
        height:620px;
    }   
    .el-carousel__item, .el-carousel__mask{
        width:100%;
        height:620px;
        img{
            width: 100%;
            background-size: 100% 100%;
        }   
    }
}
</style>