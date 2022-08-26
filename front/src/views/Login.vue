<template>
  <div class="login">
    <h1>航空订票管理系统</h1>
    <div class="login_box">
      <h2>登录页面</h2>
      <div class="login_form">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item class="white" label="用户名" prop="pass">
            <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-link type="primary">
              <router-link to="/register">没有账号?点击注册</router-link>
            </el-link>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import userLogin from "../api/user/login";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
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
    return {
      option: "用户",
      ruleForm: {
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 跳转主页
          let { pass, checkPass } = this.ruleForm;
          userLogin(pass, checkPass).then(res => {
            if (res.data.length > 0) {
              let { username, password } = res.data[0];
              if (pass === username && checkPass === password) {
                //登录成功
                localStorage.setItem("info", JSON.stringify(res.data[0]));
                setTimeout(() => {
                  this.$router.push("/home");
                }, 2000);
              } else {
                //用户名或者密码错误
                this.$message.error("用户名或者密码错误,请重新输入!");
              }
            } else {
              this.$message.error("该用户不存在,请先注册!");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  // 内容居中
  justify-content: center;
  align-items: center;
  background: url(../assets/images/bg.jpg) no-repeat;
  background-size: 100% 100%;
  h1 {
    position: absolute;
    top: 120px;
    color: #fff;
    font-family: "楷体";
  }
  .login_box {
    width: 500px;
    height: 400px;
    background: #fff;
    color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
    h2 {
      width: 100%;
      text-align: center;
      margin: 50px 0 40px 0;
      color: cornflowerblue;
      font-family: "楷体";
    }
    .login_form {
      padding: 0px 70px;
    }
  }
}

</style>