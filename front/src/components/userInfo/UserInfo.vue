<template>
  <!-- 用户个人中心 -->
  <div class="info">
    <div v-if="flag" class="register">
      <!-- 填写用户信息 -->
      <div class="register_box">
        <h1>{{title}}</h1>
        <div class="register_form">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="ruleForm.username" autocomplete="off" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="用户密码" prop="password">
              <el-input
                type="text"
                v-model="ruleForm.password"
                autocomplete="off"
                :disabled="true"
              ></el-input>
            </el-form-item>
            <el-form-item label="用户头像">
              <el-radio-group class="avatar" v-model="ruleForm.avatar">
                <el-radio label="头像1"></el-radio>
                <el-avatar shape="square" :size="100" fit="fill" :src="url[0]"></el-avatar>
                <el-radio label="头像2"></el-radio>
                <el-avatar shape="square" :size="100" fit="fill" :src="url[1]"></el-avatar>
                <el-radio label="头像3"></el-radio>
                <el-avatar shape="square" :size="100" fit="fill" :src="url[2]"></el-avatar>
                <br />
                <el-radio label="头像4"></el-radio>
                <el-avatar shape="square" :size="100" fit="fill" :src="url[3]"></el-avatar>
                <el-radio label="头像5"></el-radio>
                <el-avatar shape="square" :size="100" fit="fill" :src="url[4]"></el-avatar>
                <el-radio label="头像6"></el-radio>
                <el-avatar shape="square" :size="100" fit="fill" :src="url[5]"></el-avatar>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="用户年龄" prop="age">
              <el-input type="number" v-model="ruleForm.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户性别">
              <el-radio-group class="sex" v-model="ruleForm.sex">
                <el-radio label="小哥哥"></el-radio>
                <el-avatar
                  src="https://img0.baidu.com/it/u=1056811702,4111096278&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                ></el-avatar>
                <el-radio label="小姐姐"></el-radio>
                <el-avatar
                  src="https://img0.baidu.com/it/u=2216119779,653055386&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                ></el-avatar>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="个人介绍" prop="info">
              <el-input type="textarea" v-model="ruleForm.info"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">修改个人信息</el-button>
              <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div v-else class="userInfo">
      <!-- 介绍用户信息{{this.info.username}} -->
      <div>
        <el-row class="card" :gutter="20" style="margin-top:10px;">
          <el-col :span="9">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>个人中心</span>
                </div>
                <div class="name-role">
                  <span class="sender">{{this.info.username}} - {{this.info.isAdmin}}</span>
                </div>
               <div class="name-role">
                   <el-avatar shape="square" :size="100" fit="fill" :src="this.info.image"></el-avatar>
                </div>
                <el-divider></el-divider>
                <div class="personal-relation">
                  <div class="relation-item">
                    性别:
                    <div style="float: right; padding-right:20px;">{{this.info.sex}}</div>
                  </div>
                </div>
                <div class="personal-relation">
                  <div class="relation-item">
                    年龄:
                    <div style="float: right; padding-right:20px;">{{this.info.age}}</div>
                  </div>
                </div>
                <div class="personal-relation">
                  <div class="relation-item">
                     个人介绍:
                    <div style="float: right; padding-right:20px;">{{this.info.info}}</div>
                  </div>
                </div>
                <div class="personal-relation">
                  <div class="relation-item">
                    个人链接:
                    <div style="float: right; padding-right:20px;">http://localhost:8005/userInfo</div>
                  </div>
                </div>
                <div class="personal-relation right">
                    <el-button size="mini" type="primary" @click="update()">修改</el-button>
                    <el-button size="mini" type="warning"><router-link to="/home">关闭</router-link></el-button>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from "../../api/user/getInfo";
import userLogin from "../../api/user/login"; //获取用户信息
import vue from "../../main";
export default {
  name: "UserInfo",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.password !== "") {
          this.$refs.ruleForm.validateField("password");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入年龄"));
      }
      if (parseInt(value) <= 0 || parseInt(value) > 130) {
        callback(new Error("请输入合法年龄"));
      } else {
        callback();
      }
    };
    return {
      title:'个人信息注册',
      info: '',
      dataForm: {
        username:'',
        password:'',
        sex:'',
        age:'',
        info:''
      },
      //头像图片地址
      url: [
        "https://img1.baidu.com/it/u=793269991,2224346596&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        "https://img1.baidu.com/it/u=2201498406,3778061117&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500",
        "https://img2.baidu.com/it/u=3392808117,2594090007&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        "https://img2.baidu.com/it/u=3804069081,3968854353&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        "https://img0.baidu.com/it/u=220687825,1378342630&fm=253&fmt=auto&app=138&f=JPEG?w=517&h=500",
        "https://img1.baidu.com/it/u=4245241897,3920774166&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
      ],
      flag: "", 
      ruleForm: {
        username: '', //用户名
        password: '', //密码
        age: '', // 年龄
        sex: '',
        info:'',
        avatar:''
      },
      rules: {
        username: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: validatePass3, trigger: "blur" }]
      }
    };
  },
  mounted() {
    let {username,password} = JSON.parse(localStorage.getItem("info"));
    userLogin(username,password).then(res=>{
       console.log(res)
      this.dataForm = res.data[0];
      this.ruleForm.username = res.data[0].username;
      this.ruleForm.password = res.data[0].password;
      this.ruleForm.age = res.data[0].age;
      this.ruleForm.sex = res.data[0].sex;
      this.ruleForm.info = res.data[0].info;
      this.ruleForm.avatar = this.urlsToAvatorName(res.data[0].image,this.url)
      this.info = res.data[0];
      console.log(this.ruleForm)
    })
    this.getUserInfo();
  },
  methods: {
    urlsToAvatorName(src,url){
      for(let i in url){
        if(url[i] == src){
            return `头像${parseInt(i)+1}`
        }
      }
    },
    update(){
      this.flag = true;
      //修改标题
      this.title = "修改个人信息"
      //修改头像名称
      this.ruleForm.avatar = this.urlsToAvatorName(this.info.image,this.url)
    },
    filterUrls(str, urls) {
      var index = parseInt(str.split("头像")[1]) - 1;
      return urls[index];
    },
    getUserInfo() {
      if (this.info.image == "") {
        //第一次进来
        this.$message({
          message: "检测到您是第一次进入个人中心",
          type: "warning"
        });
        this.flag = true;
        console.log("第一次进入个人中心",this.info)
      } else {
        //填写个人信息之后进入
        this.flag = false;
        console.log("填写个人信息之后进入",this.info)
      }
    },
    //设置个人信息
    getDetailsInfo() {
      // console.log(UserInfo)
      UserInfo(this.info.username)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //表单提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 设置个人信息
          var src = this.filterUrls(this.ruleForm.avatar, this.url);
          let obj = {
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            image: src,
            age: parseInt(this.ruleForm.age),
            sex: this.ruleForm.sex,
            info: this.ruleForm.info
          };
          UserInfo(obj).then(res => {
            //修改localstorage
            localStorage.setItem("info", JSON.stringify(res.data));
            console.log("修改数据后的缓存",this.info)
            console.log(res)
            if (res.code == 200) {
              this.$message({
                message: res.message,
                type: "success"
              });
              this.flag = false;
              //刷新页面
               vue.$router.go(0)
            } else {
              this.$message({
                message: "个人信息修改失败!",
                type: "warning"
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //表单重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
      vue.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
a{
  color:#fff;
}
.info {
  width: 100%;
  height: 100vh;
  background: url(../../assets/images/bj.jpg) no-repeat;
  background-size: cover;
  .register {
    width: 100vw;
    height: 100vh;
    display: flex;
    // 内容居中
    justify-content: center;
    align-items: center;
    background: #3c97e8;
    .register_box {
      width: 800px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24),
        0 0 2px rgba(10, 16, 20, 0.12);
      h1 {
        width: 100%;
        text-align: center;
        margin: 50px 0 40px 0;
        color: cornflowerblue;
        font-family: "楷体";
      }
      .register_form {
        padding: 0px 30px;
        button {
          position: relative;
          left: 90px;
          margin: 30px;
        }
        .sex,
        .avatar {
          label.el-radio {
            position: relative;
            top: -12px;
            left: 24px;
          }
        }
      }
    }
  }
}
.userInfo{
  width:80%;
  margin: 0 auto;
  padding-top:70px;
}
//卡片样式
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
//文本样式区
.name-role {
  font-size: 16px;
  padding: 5px;
  text-align: center;
}
.sender {
  text-align: center;
}
.registe-info {
  text-align: center;
  padding-top: 10px;
}
.personal-relation {
  font-size: 16px;
  padding: 0px 5px 15px;
  margin-right: 1px;
  width: 100%;
}

.relation-item {
  padding: 12px;
}
.dialog-footer {
  padding-top: 10px;
  padding-left: 10%;
}
//布局样式区
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.right{
  margin: 10px 0;
  position: relative;
  left:60%;
}

.card{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>