<template>
  <header :class="{'login':isLogin,'noLogin':!isLogin}">
    <template v-if="!isLogin">
      <h1>Qing 语 博 客</h1>
      <p>精品博客汇聚</p>
      <div>
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>Qing 语 博 客</h1>
      <i class="userLogin el-icon-s-custom"></i>
      <img class="avatar" src="" alt="">
    </template>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isLogin: false
    }
  }
}
</script>

<style scoped lang="scss">
header.noLogin {
  padding: 0 12% 30px 12px;
  background: rgb(0, 153, 0);
  display: grid;
  justify-items: center;
  h1 {
    color: #fff;
    font-size: 40px;
    margin: 20px 0 0 0;
  }
  p {
    margin: 15px 0 0 0;
    color: #fff;
  }
  button {
    margin: 20px 5px 0;
  }
}

header.login {
  display: flex;
  align-items: center;
  background: rgb(0, 153, 0);
  h1 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 40px;
    flex: 1;
  }
  .userLogin{
    color: #fff;
    font-size: 30px;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid red;
    border-radius: 50%;
    margin-left: 15px;
  }
}

.el-button {
  background: #fff;
  border: 1px solid rgba(0, 153, 51, 0.6);
  border-radius: 4px;
  font-size: 13px;
  padding: 0 8px;
  font-weight: normal;
  line-height: 28px;
}
</style>