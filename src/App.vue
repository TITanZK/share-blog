<template>
  <div id="app">
    <Header class="header"/>
    <main class="main">
      <router-view/>
    </main>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "assets/common.scss";

#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header"
                       ".       main       ."
                       "footer footer footer";
  .header {
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }
  .main {
    grid-area: main;
  }
  .footer {
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }
}

@media (max-width: 992px) {
  #app {
    //border: 2px solid red;
    grid-template-columns: 1fr;
    grid-template-areas: "header"
                         "main"
                         "footer";
    .header, .footer {
      padding-left: 10px;
      padding-right: 10px;
    }
    .main {
      //overflow: hidden;
      //text-overflow: ellipsis;
    }
  }
}
</style>
