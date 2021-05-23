<template>
  <div class="home">
    <Header ref="header" :is-home="true" />
    <div class="body">
      <!-- <div class="banner">
        <img src="../assets/images/banner.jpg" alt="">
      </div> -->
      <el-row>
        Hello Welcome 2 Ky's lab
      </el-row>
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
