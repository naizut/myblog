<template>
  <div class="home">
    <Header ref="header" :is-home="true" />
    <div class="body">
      <div class="banner">
        <img src="../assets/images/banner.jpg" alt="">
      </div>
      <el-row>
        Hello Welcome 2 Ky's lab
      </el-row>
      <ul>
        <li v-for="i in list"
            v-once
            :key="i.id"
        >{{ i.id }}</li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      list: [1, 233, 45],
      iv: ''
    }
  },
  computed: {
    afked: function() {
      return this.iv + '5'
    }
  },
  watch: {
    iv(newV, oldV) {
      console.log(newV)
      console.log('old:', oldV)
    }
  },
  created() {
    this.axios({
      url: '/api/articles/list',
      method: 'get'
    }).then((res) => {})
  },
  beforeCreate() {},
  mounted() {
    console.log(this)
  }
}
</script>
<style lang="scss" scoped>
.home{
  .body {
    min-height: 100vh;
  }
  .banner{
    height: 768px;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
}
</style>
