<template>
  <div class="title">
    <div class="name">天天航班在宜宾转场运营公告</div>
    <div class="content">
        <p>尊敬的旅客：</p>
        <p>自2021年12月05日起，天天航班在宜宾运行的航班将从宜宾菜坝机场转场至宜宾五粮液机场运营。天天航班国内航班截止办理乘机登记手续时间为航班起飞前30分钟。请您酌情做好出行安排。</p>
        <p>天天航空热线：95583</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.title{
    width:80%;
    margin: 60px auto;
    padding-bottom: 30px;
    background: #eee;
    border-radius: 7px;
    .name{
        width:100%;
        text-align: center;
        font-size: 24px;
        padding: 30px 0;
    }
    .content{
        font-size: 14px;
        color:#555;
        p{
            margin: 10px 0 10px 15px;
        }
    }
}
</style>