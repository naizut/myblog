<template>
  <div class="page-container layout">
    <Header ref="header" :is-home="false" />
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
    min-height: calc(100vh - 46px);
    padding-top: 30px;
    position: relative;
    .layout__content {

    }
  }
}
</style>
