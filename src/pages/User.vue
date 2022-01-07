<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{ user.username }}</h3>
    </section>
    <section>
      <router-link class="item" v-for="item in blogs" :key="item.id" :to="`/detail/${item.id}`">
        <div class="date">
          <span class="day">{{ toDate(item.createdAt).date }}</span>
          <span class="month">{{ toDate(item.createdAt).month }}月</span>
          <span class="year">{{ toDate(item.createdAt).year }}</span>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        :page-size="20"
        @current-change="pageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script>
import blog from '@/api/blog.js'

export default {
  name: "User",
  props: ['userId'],
  data() {
    return {
      user: {},
      blogs: [],
      total: 0,
      page: 1,
    }
  },
  created() {
    this.page = parseInt(this.$route.query.page || '1')
    this.getBlogsByUserId()
  },
  methods: {
    async getBlogsByUserId() {
      const { data, page, total } = await blog.getBlogsByUserId(this.userId, { page: this.page })
      this.blogs = data
      this.total = total
      this.page = page
      if (data.length > 0) {
        this.user = data[0].user
      }
    },
    async pageChange(currentPage) {
      const { data, page, total } = await blog.getBlogsByUserId(this.userId, { page: currentPage })
      this.blogs = data
      this.total = total
      this.page = page
      await this.$router.push({ path: `/user/${ this.userId }`, query: { page: currentPage } })
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
#user {
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
      a {color: rgba(0, 153, 51, 0.6);margin-right: 10px;}
    }

  }
}
</style>