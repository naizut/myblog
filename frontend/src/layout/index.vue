<template>
  <div class="page-container layout">
    <Header ref="header" :is-home="false" />
    <el-container class="layout__content-container" @click.native="shortenSearchInput()">
      <el-main class="layout__content pd0 mg0">
        <router-view />
      </el-main>
    </el-container>
    <Footer />

    <div id="modeSwitch" @click="switchBlogMode">
      <button style="background: #fff;border: 1px solid #ccc;">Blog mode</button>
    </div>
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
  data() {
    return {
      isNight: false
    }
  },
  methods: {
    shortenSearchInput() {
      this.$refs.header.shortenSearchInput()
    },
    switchBlogMode() {
      Array.from(document.getElementsByClassName('inner-wrap')).forEach(dom => {
        dom.classList.toggle('blog-mode')
        const isCenter = dom.classList.contains('blog-mode')
          document.querySelector('#modeSwitch button').innerText = isCenter ? 'Default mode' : 'Blog mode'
      })
    }

  }
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  .layout__content-container {
    min-height: calc(100vh - 46px);
    position: relative;
    .layout__content {

    }
  }

  #modeSwitch {
    position: absolute;
    top: 0;
    right: calc((100% - 1200px) / 2);
    cursor: pointer;
    font-size: 12px;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
}
</style>
