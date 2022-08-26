<template>
  <div id="app">
    <!-- <div id="nav">
      <el-button type="success">123454</el-button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
}
a:link,a:hover{
  color:#3C97E8;
}

a:active,a:visited{
  color:#3C97E8;
}
</style>
