<template>
  <footer>
    <p>© abcdefgh.com 2021 wechat: frank2021</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
footer {
  align-self: end; //对齐当前 grid 或 flex 行中的元素，并覆盖已有的 align-items 的值。
  background-color: #d7d7d7;
  color: #666;
  font-size: 13px;
  padding: 10px;
  text-align: center;
}
</style>