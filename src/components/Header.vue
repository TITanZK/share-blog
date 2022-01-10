<template>
  <header :class="{'login':isLogin,'noLogin':!isLogin}">
    <template v-if="!isLogin">
      <h1>
        <router-link to="/">Lime share blog</router-link>
      </h1>
      <p>共享一点点、进步一点点</p>
      <div v-if="buttonVisible">
        <router-link to="/login">
          <el-button>立即登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button>注册账号</el-button>
        </router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1>
        <router-link to="/">Lime share blog</router-link>
      </h1>
      <router-link to="/create"><i class="userLogin el-icon-edit"></i></router-link>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li>
            <router-link to="/my">我的</router-link>
          </li>
          <li><a @click.prevent="logout">注销</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "Header",
  computed: {
    ...mapGetters([
      'isLogin',
      'user',
      'buttonVisible'
    ])
  },
  created() {
    this.$store.dispatch('checkLogin')
  },
  methods: {
    async logout() {
      const res = await this.$store.dispatch('toLogout')
      this.$message({ type: "success", message: res.msg })
      await this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
header.noLogin {
  padding: 0 12% 30px 12px;background: rgba(66, 184, 131, .1);display: grid;justify-items: center;
  h1 {font-size: 30px;margin: 20px 0 0 0;
    a {color: #3eaf7c;}
  }
  p {margin: 15px 0 0 0;color: #3eaf7c;}
  button {margin: 20px 5px 0;}
}

header.login {
  display: flex;
  align-items: center;
  background: rgba(66, 184, 131, .1);
  h1 {
    margin: 0;padding: 0;font-size: 30px;flex: 1;
    a {color: #3eaf7c;}
  }
  .userLogin {color: #3eaf7c;font-size: 30px;cursor: pointer}
  .avatar {width: 40px;height: 40px;border: 1px solid #42b983;border-radius: 50%;margin-left: 15px;}
  .user {
    position: relative;
    ul {
      display: none;position: absolute;right: 0;border: 1px solid #eaeaea;
      margin: 0;padding: 0;background-color: #fff;
      a {
        text-decoration: none;color: #333;font-size: 12px;
        display: block;padding: 5px 10px;
        cursor: pointer;
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