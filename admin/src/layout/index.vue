<template>
  <a-layout id="fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
      <div class="logo" />
      <SiderAdmin />
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <HeaderAdmin />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }" class="view-container">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
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
  }
}
</script>
<style>
#fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
