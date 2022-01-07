let Vue
const myPlugin = {
  formatDate(dateString) {
    const dateTime = typeof dateString === 'object' ? dateString : new Date(dateString)
    const space = Date.now() - dateTime.getTime()
    return space < 60000 ? '刚刚'
      : space < 1000 * 3600 ? Math.floor(space / 60000) + '分钟前'
        : space < 1000 * 3600 * 24 ? Math.floor(space / (1000 * 3600)) + '小时前'
          : Math.floor(space / (1000 * 3600 * 24)) + '天前'
  },
  install(_Vue) {
    Vue = _Vue
    Vue.prototype.$formatDate = this.formatDate
  }
}

export default myPlugin