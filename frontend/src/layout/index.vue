<template>
  <div class="page-container layout">
    <Header ref="header" />
    <el-container class="layout__content-container" @click.native="shortenSearchInput()">
      <el-main class="layout__content pd0 mg0">
        <router-view />
      </el-main>
    </el-container>
    <Footer />
  </div>
</template>
<script>
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  },
  methods: {
    shortenSearchInput() {
      this.$refs.header.shortenSearchInput()
    }
  }
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  .layout__content-container {
    height: calc(100vh - 146px);
    position: relative;
    .layout__content {

    }
  }
}
</style>
