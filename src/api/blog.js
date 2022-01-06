import request from "@/http"

export default {
  getBlogs({ page = 1, userId, atIndex } = { page: 1 }) {
    return request('/blog', 'GET', { page, userId, atIndex })
  },

  getDetail({ blogId }) {
    return request('/blog/:blogId'.replace(':blogId', blogId))
  },

  updateBlog({ blogId }, { title, content, description, atIndex }) {
    return request('/blog/:blogId'.replace(':blogId', blogId), 'PATCH', { title, content, description, atIndex })
  },

  deleteBlog({ blogId }) {
    return request('/blog/:blogId'.replace(':blogId', blogId), 'DELETE')
  },

  getIndexBlogs({ page = 1 } = { page: 1 }) {
    return this.getBlogs({ page, atIndex: true })
  },

  createBlog({ title = '', content = '', description = '', atIndex = false } = {
    title: '',
    content: '',
    description: '',
    atIndex: false
  }) {
    return request('/blog', 'POST', { title, content, description, atIndex })
  },

  getBlogsByUserId(userId, { page = 1, atIndex } = { page: 1 }) {
    return this.getBlogs({ userId, page, atIndex })
  }

}