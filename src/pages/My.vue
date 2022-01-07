<template>
  <div id="my">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username">
      <h3>{{ user.username }}</h3>
    </section>
    <section>
      <router-link v-for="item in blogs" :to="`/detail/${item.id}`" :key="item.id" class="item">
        <div class="date">
          <span class="day">{{ toDate(item.createdAt).date }}</span>
          <span class="month">{{ toDate(item.createdAt).month }}月</span>
          <span class="year">{{ toDate(item.createdAt).year }}</span>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="actions">
          <router-link :to="`/edit/${item.id}`">编辑</router-link>
          <span @click.prevent="deleteBlog(item.id)">删除</span>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
import blog from '@/api/blog.js'
import { mapGetters } from "vuex"

export default {
  name: "My",
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.page = parseInt(this.$route.query.page || '1')
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      const res = await blog.getBlogsByUserId(this.user.id, { page: this.page })
      this.blogs = res.data
      this.page = res.page
      this.total = res.total
    },
    async deleteBlog(blogId) {
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await blog.deleteBlog({ blogId })
      this.$message.success('删除成功')
      this.blogs = this.blogs.filter(item => item.id !== blogId)
    },
    toDate(dataString) {
      let dateObj = typeof dataString === 'object' ? dataString : new Date(dataString)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    }
  }
}
</script>

<style scoped lang="scss">
#my {
  .user-info {
    display: grid;grid: auto auto / 80px 1fr;
    margin-top: 30px;padding-bottom: 20px;border-bottom: 1px solid #ebebeb;
    .avatar {
      grid-column: 1;grid-row: 1 / span 2;width: 60px;
      height: 60px;border-radius: 50%;
    }
    h3 { grid-column: 2;grid-row: 1;margin-top: 10px; }
  }
  .item {
    display: grid;
    grid: auto  auto auto / 80px 1fr;
    margin: 20px 0;
    .date {
      grid-column: 1;
      grid-row: 1 / span 3;
      justify-self: center;
      text-align: center;
      span {
        display: block;color: rgba(0, 153, 51, 0.6);
        &.day { font-size: 40px; }
      }
    }
    h3 {grid-column: 2;grid-row: 1;}
    p {grid-column: 2;grid-row: 2;margin-top: 0;}
    .actions {
      grid-column: 2;grid-row: 3;font-size: 12px;
      a, span {color: rgba(0, 153, 51, 0.6);margin-right: 10px;}
    }

  }
}
</style>