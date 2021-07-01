<template>
  <a-layout id="fixed-sider">
    <a-layout-sider class="slider-left" :class="showSlider?'active':''">
      <div class="slider-left-header" @click="switchSlider">
        <a-button type="primary" style="border: none;float: right" icon="cross"></a-button>
      </div>
      <SiderAdmin />
    </a-layout-sider>
    <a-layout class="main" :class="showSlider?'active':''">
      <HeaderAdmin ref="headeradmin" @switchSlider="switchSlider" />
      <a-layout-content :style="{ overflow: 'initial' }" class="view-container">
        <div>
          <router-view />
        </div>
      </a-layout-content>
      <FooterAdmin />
    </a-layout>
  </a-layout>
</template>
<script>
import HeaderAdmin from './Header'
import SiderAdmin from './Sider'
import FooterAdmin from './Footer'
export default {
  name: 'layout',
  components: {
    HeaderAdmin,
    SiderAdmin,
    FooterAdmin
  },
  data () {
    return {
      showSlider: true
    }
  },
  methods: {
    switchSlider () {
      this.showSlider = !this.showSlider
      this.$refs.headeradmin.switchSlider()
    }
  }
}
</script>
<style lang="scss">
.ant-layout-sider {
  overflow: auto;
  height: 100vh;
  margin-left: -200px !important;
  .slider-left-header {
    text-align: center;
    line-height: 64px;
    color: #fff;
    font-size: 20px;
    overflow: hidden;
    margin-top: 10px;
  }
  &.active {
    margin-left: 0 !important;
  }
}
.main {
  height: 100vh;

}
#fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

</style>
