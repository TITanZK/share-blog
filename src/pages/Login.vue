<template>
  <div class="login_form">
    <el-form @submit.native.prevent="login" :rules="rules" ref="loginFormRef" :model="model">
      <!-- 用户名 -->
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-user-solid" placeholder="用户名" v-model="model.username" clearable></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input prefix-icon="el-icon-lock" placeholder="密码" type="password" v-model="model.password" show-password
                  clearable></el-input>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item class="el-submit">
        <el-button type="primary" native-type="submit" size="medium">登录</el-button>
        <el-button class="button_right" size="medium" @click="resetForm">重置</el-button>
        <p class="notice">没有账号？<a href="#">注册新用户</a></p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      //表单验证
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 1 到 15 个字符,只能是字母数字下划线中文', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 12, message: '长度在 6 到 16 个任意字符', trigger: 'blur'}
        ]
      },
      //绑定输入框数据
      model: {
        username: 'admin12',
        password: '123456'
      }
    }
  },
  methods: {
    //登录
    async login() {
      const res = await this.$store.dispatch('toLogin', this.model)
      this.$message({type: "success", message: res.msg})
      // todo
      // this.$router.push()
    },
    //重置表单
    resetForm() {
      // console.log(this)
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
.login_form {
  width: 30rem;
  margin: 0 auto;
  padding-top: 80px;
}

.el-submit {
  display: flex;
  justify-content: flex-end;
}

.button_right {
  margin-left: 38px;
}

.notice {
  font-size: 12px;
  color: #999;
  text-align: center;
  a {color: rgb(0, 153, 0);}
}

@media (max-width: 768px) {
  .login_form {
    width: 20rem;
    margin-top: 30px;
  }
}
</style>