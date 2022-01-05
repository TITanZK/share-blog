<template>
  <header :class="{'login':isLogin,'noLogin':!isLogin}">
    <template v-if="!isLogin">
      <h1>Qing 语 博 客</h1>
      <p>精品博客汇聚</p>
      <div>
        <el-button>
          <router-link to="/login">立即登录</router-link>
        </el-button>
        <el-button>
          <router-link to="/register">注册账号</router-link>
        </el-button>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>Qing 语 博 客</h1>
      <i class="userLogin el-icon-s-custom"></i>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li>
            <router-link to="/my">我的</router-link>
          </li>
          <li><a href="javascript:;" @click="logout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "Header",
  computed: {
    ...mapGetters([
      'isLogin',
      'user'
    ])
  },
  created() {
    this.$store.dispatch('checkLogin')
  },
  methods: {
    async logout() {
      const res = await this.$store.dispatch('toLogout')
      this.$message({type: "success", message: res.msg})
    }
  }
}
</script>

<style scoped lang="scss">
header.noLogin {
  padding: 0 12% 30px 12px;background: rgb(0, 153, 0);display: grid;justify-items: center;
  h1 {color: #fff;font-size: 40px;margin: 20px 0 0 0;}
  p {margin: 15px 0 0 0;color: #fff;}
  button {margin: 20px 5px 0;}
}

header.login {
  display: flex;
  align-items: center;
  background: rgb(0, 153, 0);
  h1 {margin: 0;padding: 0;color: #fff;font-size: 40px;flex: 1;}
  .userLogin {color: #fff;font-size: 30px;}
  .avatar {width: 40px;height: 40px;border: 1px solid red;border-radius: 50%;margin-left: 15px;}
  .user {
    position: relative;
    ul {
      display: none;position: absolute;right: 0;border: 1px solid #eaeaea;
      margin: 0;padding: 0;background-color: #fff;
      a {
        text-decoration: none;color: #333;font-size: 12px;
        display: block;padding: 5px 10px;
        &:hover {background-color: #eaeaea;}
      }
    }
    &:hover ul {display: block;}
  }
}

.el-button {
  background: #fff;border: 1px solid rgba(0, 153, 51, 0.6);border-radius: 4px;
  font-size: 13px;padding: 0 8px;font-weight: normal;line-height: 28px;}
</style>