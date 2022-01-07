<template>
  <div id="index">
    <section class="blog-posts">
      <router-link class="item" v-for="item in blog" :key="item.id" :to="`/detail/${item.id}`">
        <figure class="avatar">
          <img :src="item.user.avatar" alt="item.user.username">
          <figcaption>{{ item.user.username }}</figcaption>
        </figure>
        <h3>{{ item.title }} <span>{{ item.updatedAt && $formatDate(item.updatedAt) }}</span></h3>
        <p>{{ item.description }}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :current-page="page"
        :page-size="20"
        :total="total"
        @current-change="pageChange">
      </el-pagination>
    </section>
  </div>
</template>

<script>
import blog from '@/api/blog.js'

export default {
  name: "Index",
  data() {
    return {
      blog: [], total: 0, page: 1
    }
  },
  created() {
    this.getPage()
  },
  methods: {
    async getPage() {
      this.page = parseInt(this.$route.query.page || '1')
      const res = await blog.getIndexBlogs(this.page)
      this.blog = res.data
      this.total = res.total
      this.page = res.page
    },
    async pageChange(currentPage) {
      const res = await blog.getIndexBlogs(currentPage)
      this.blog = res.data
      this.total = res.total
      this.page = res.page
      await this.$router.push({ path: '/', query: { page: currentPage } })
    }
  }
}
</script>

<style scoped lang="scss">
#index {
  .item {
    display: grid;grid: auto auto/80px 1fr;margin: 20px 0;
    .avatar {
      grid-column: 1;grid-row: 1 / span 2;justify-self: center;text-align: center;
      img {width: 60px;height: 60px;border-radius: 50%;}
      figcaption {font-size: 12px;color: #999;}
    }
    h3 {
      grid-column: 2;grid-row: 1;
      > span {color: #000;font-size: 12px;font-weight: normal;}
    }
    p {grid-column: 2;grid-row: 2;margin-top: 0;
      width: 900px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      //border: 1px solid red;
    }
  }
  .pagination {display: flex;justify-content: center;margin-top: 24px;}
}
</style>