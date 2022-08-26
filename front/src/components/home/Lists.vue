<template>
  <div class="lists">
    <!-- 列表组件封装 -->
    <div class="title">
       <span>{{title}}</span>
    </div>
    <div class="list_box">
        <div class="list">
            <el-image v-for="(url,i) in urls" :key="i" :src="url" lazy></el-image>
        </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'Lists',
   props: ['title','urls'],
}
</script>

<style lang="scss" scoped>
.lists{
    width:100%;
    height:300px;
    margin-top:30px;
    display: flex;
    justify-content: center;
    .title{
        font-size: 20px;
        color:#23A8F2;
        span{
            position: relative;
            left:78px;
            top:12px;
        }
    }
    .list_box{
       .list{
            width:1100px;
            margin: 80px auto;
            .el-image,img{
                margin-right: 40px;
                width:220px;
                height:220px;
            }
        }
    }  
}
</style>
