<template>
  <div id="index">
    <section class="blog-posts">
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
          <figcaption>前端</figcaption>
        </figure>
        <h3>前端异步大揭秘 <span>3天前</span></h3>
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
      </div>
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
          <figcaption>前端</figcaption>
        </figure>
        <h3>前端异步大揭秘 <span>3天前</span></h3>
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
      </div>
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
          <figcaption>前端</figcaption>
        </figure>
        <h3>前端异步大揭秘 <span>3天前</span></h3>
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
      </div>
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
          <figcaption>前端</figcaption>
        </figure>
        <h3>前端异步大揭秘 <span>3天前</span></h3>
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
      </div>
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
          <figcaption>前端</figcaption>
        </figure>
        <h3>前端异步大揭秘 <span>3天前</span></h3>
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
          模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped lang="scss">
#index {
  .item {
    display: grid;
    grid: auto auto/80px 1fr;
    margin: 20px 0;
    .avatar {
      grid-column: 1;
      grid-row: 1 / span 2;
      justify-self: center;
      text-align: center;
      img {width: 60px;height: 60px;border-radius: 50%;}
      figcaption {font-size: 12px;color: #999;}
    }
    h3 {
      grid-column: 2;
      grid-row: 1;
      > span {color: #000;font-size: 12px;font-weight: normal;}
    }
    p {
      grid-column: 2;
      grid-row: 2;
      margin-top: 0;
    }
  }
}
</style>