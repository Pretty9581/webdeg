<template>
  <!-- 网站头部导航栏 -->
  <div class="tab">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item class="title"> 天天航空公司</el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">
          <router-link to="/userInfo">个人中心</router-link>
          </el-menu-item>
        <el-menu-item index="3" slot="title">我的订单</el-menu-item>
        <el-menu-item index="4">
           <router-link to='/password'>修改密码</router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <a @click="admin()">后台登录</a>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to='/login'>退出</router-link>
        </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    admin(){
      window.location.href = "http://localhost:3001"
    }
  },
  mounted() {
    localStorage.setItem("isSetInfo",false)
  },
};
</script>

<style lang="scss" scoped>
.tab{
    .el-menu-demo{
        // height:80px;
        padding-top: 10px; 
    }
    .title{
        min-width: 800px;
        font-size: 26px;
        color:#23A8F2;
        padding-left:12%;
        margin-right: 5%;
    }
}
</style>