<template>
  <div class="pwd">
    <el-col :span="7">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>修改密码</span>
          </div>
          <div>
            <el-form label-width="80px" v-model="dataForm" size="small" label-position="right">
              <el-form-item label="用户昵称" prop="username">
                <el-input auto-complete="off" v-model="dataForm.username" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="用户密码" prop="password">
                <el-input auto-complete="off" v-model="dataForm.password" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="newPwd">
                <el-input maxlength="12" v-model="dataForm.newPwd"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button size="mini" type="primary" @click="submit()">提交</el-button>
              <el-button size="mini" type="warning">
                <router-link to="/home" style="color:#fff">关闭</router-link>
              </el-button>
            </div>
          </div>
        </el-card>
      </div>
    </el-col>
  </div>
</template>

<script>
import changePwd from "../../api/user/changePwd";
import userLogin from '../../api/user/login'
import vue from "../../main";
export default {
  data() {
    return {
      dataForm: {
        username: '',
        password: '',
        newPwd: ""
      }
    };
  },
  mounted() {
    let {username,password} =JSON.parse(localStorage.getItem("info"))
    userLogin(username,password).then( res =>{
      this.dataForm = res.data[0]
    }).catch( error =>{
      console.log(error)
    })
  },
  methods: {
    submit() {
      let { username, password, newPwd } = this.dataForm;
      if (newPwd == "") {
        this.$message({
          message: "新密码不能为空",
          type: "error"
        });
      } else {
        var len = newPwd.split("").length;
        if (len >= 5 && len <= 12) {
          if (newPwd === password) {
            this.$message({
              message: "新密码不能和旧密码相同",
              type: "error"
            });
          }
          let obj = {
            username: this.dataForm.username,
            newPwd: this.dataForm.newPwd
          };
          changePwd(obj)
            .then(res => {
              this.$message({
                message: "密码修改成功",
                type: "success"
              });
              vue.$router.push("/home");
            })
            .catch(err => {
              console.log("请求失败", err);
            });
        } else {
          this.$message({
            message: "请输入5-12位长度的密码",
            type: "error"
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pwd {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/images/bj.jpg) no-repeat;
  background-size: 100% 100%;
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
</style>