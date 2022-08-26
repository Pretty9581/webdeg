<template>
  <div class="register">
    <h1>航空订票管理系统</h1>
    <div class="register_box">
      <h2>注册页面</h2>
      <div class="register_form">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="pass" class="white">
            <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass2">
            <el-input type="password" v-model="ruleForm.checkPass2" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-link type="primary">
              <router-link to="/login" class="white">已有账号?直接登录</router-link>
            </el-link>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import userRegister from "../api/user/register";
import vue from '../main'
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
    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.checkPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        checkPass2: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        checkPass2: [{ validator: validatePass3, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { pass, checkPass } = this.ruleForm;
          userRegister(pass, checkPass).then(res => {
            //  console.log(res)
            if (res.code == 200) {
              // 注册成功
              this.$message({
                message: res.message,
                type: "success"
              });
              this.$router.push("/login");
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
.register {
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
  .register_box {
    width: 500px;
    height: 450px;
    // background: #fff;
    background: #fff;
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
    .register_form {
      padding: 0px 70px;
    }
  }
}
</style>