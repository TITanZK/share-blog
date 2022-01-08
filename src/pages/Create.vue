<template>
  <div id="edit">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input type="text"
              v-model="createData.title"
              placeholder="请输入内容(限50个字)"
              maxlength="50"
              show-word-limit></el-input>
    <h3>内容简介</h3>
    <el-input type="textarea"
              v-model="createData.description"
              placeholder="请输入简介(限150个字)"
              maxlength="150"
              show-word-limit
              :autosize="{minRows: 2, maxRows: 4}"></el-input>
    <h3>文章内容</h3>
    <el-input type="textarea"
              v-model="createData.content"
              placeholder="请输入正文"
              maxlength="50000"
              show-word-limit
              :autosize="{minRows: 4, maxRows: 30}"></el-input>
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="createData.atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>

<script>
import blog from '@/api/blog.js'

export default {
  name: "Create",
  data() {
    return {
      createData: {
        title: '',
        description: '',
        content: '',
        atIndex: false
      }
    }
  },
  methods: {
    async onCreate() {
      try {
        const res = await blog.createBlog(this.createData)
        this.$message.success(res.msg)
        await this.$router.push({ path: `/detail/${ res.data.id }` })
      } catch (error) {
        this.$message.info(error.msg)
      }

    }
  }
}
</script>

<style scoped lang="scss">
#edit {
  h1 {padding-top: 30px;}
}
</style>