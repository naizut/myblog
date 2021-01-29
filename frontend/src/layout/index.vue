<template>
  <div class="layout">
    <Header />
    <section class="layout__content-container">
      <div class="layout__content">
        <router-view />
      </div>
      <div class="layout__sider-right">ha</div>
    </section>
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
  }
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  section {
    height: 100vh;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .layout__content {
      width: 100%;
      padding: 4% 15%;
    }
    .layout__sider-right {
      width: 0;
    }
  }
}
</style>
