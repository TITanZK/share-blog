<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input type="text"
              v-model="title"
              placeholder="请输入内容(限50个字)"
              maxlength="50"
              show-word-limit></el-input>
    <h3>内容简介</h3>
    <el-input type="textarea"
              v-model="description"
              placeholder="请输入简介(限150个字)"
              maxlength="150"
              show-word-limit
              :autosize="{minRows: 2, maxRows: 4}"></el-input>
    <h3>文章内容</h3>
    <el-input type="textarea"
              v-model="content"
              placeholder="请输入正文"
              :autosize="{minRows: 4, maxRows: 30}"></el-input>
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onEdit">确定</el-button>
  </div>
</template>

<script>
import blog from '@/api/blog.js'

export default {
  name: "Edit",
  data() {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false,
      blogId: null,
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    this.getDetailBlog()
  },
  methods: {
    async getDetailBlog() {
      const res = await blog.getDetail({ blogId: this.blogId })
      this.title = res.data.title
      this.description = res.data.description
      this.content = res.data.content
      this.atIndex = res.data.atIndex
    },
    async onEdit() {
      const res = await blog.updateBlog(
        { blogId: this.blogId },
        { title: this.title, content: this.content, description: this.description, atIndex: this.atIndex })
      this.$message.success(res.msg)
      await this.$router.push({ path: `/detail/${ res.data.id }` })
    }
  }
}
</script>

<style scoped lang="scss">

</style>