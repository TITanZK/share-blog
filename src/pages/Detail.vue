<template>
  <div id="detail">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username">
      <h3>{{ title }}</h3>
      <p>
        <router-link :to="`/user/${user.id}`">{{ user.username }}</router-link>
        发布于{{ createdAt && $formatDate(createdAt) }}
      </p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script>
import * as marked from "marked"
import blog from '@/api/blog.js'

export default {
  name: "Detail",
  data() {
    return {
      title: '',
      rawContent: '',
      user: {},
      createdAt: ''
    }
  },
  computed: {
    markdown() {
      return marked(this.rawContent)
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    async getDetail() {
      this.blogId = this.$route.params.blogId
      const { data } = await blog.getDetail({ blogId: this.blogId })
      this.title = data.title
      this.rawContent = data.content
      this.user = data.user
      this.createdAt = data.createdAt
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/article.scss";

#detail {
  .user-info {
    display: grid;grid: auto auto / 80px 1fr;
    margin-top: 30px;padding-bottom: 20px;border-bottom: 1px solid #ebebeb;
    .avatar {
      grid-column: 1;grid-row: 1 / span 2;
      width: 60px;height: 60px;border-radius: 50%;
    }
    h3 { grid-column: 2;grid-row: 1;margin: 5px 0; }
    p {
      grid-column: 2;grid-row: 2;margin-top: 0;font-size: 12px;color: #999;
      a { color: rgb(0, 153, 0);text-decoration: none; }
    }
  }
  .article { padding: 30px 0; }
}
</style>