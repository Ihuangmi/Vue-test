<template>
  <div class="app">
    <div class="login">
      <h1>登 录</h1>
      <div class="login_form">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input v-model.number="ruleForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        if (value.length > 8 || value.length < 3) {
          callback(new Error("用户名在3~8位"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        checkPass: "",
        username: ""
      },
      rules: {
        username: [{ validator: checkName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/");
        //   console.info("提交成功");
          console.info(`ruleForm=`, this.ruleForm);
          // 在此处提交表单至后台
        } else {
          console.log("提交失败！！");
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

<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
  // background: url("../assets/login.jpg") 100% 100%;
  position: absolute;
  // z-index: -1;
  color: #fff;
  padding: 0;

  .login {
    width: 100%;
    height: 100%;
    margin: 0;
    color: #fff;
    background-color: rgb(23, 65, 80);
    // z-index: 0;

    h1 {
      margin: 0 auto;
      text-align: center;
      padding-top: 100px;
    }
    .login_form {
      width: 500px;
      margin: 50px 470px;
    }
  }
}
</style>
