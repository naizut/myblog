<template>
  <div class="nav-menu-mobile">
    <div class="nav-menu-mobile-header">
      <div class="pull-left f30" @click="goto('/home')">
        Ky's Lab
      </div>
      <div class="close" @click="hideNavMenuMobile">
        <i class="el-icon-close" />
      </div>
    </div>

    <div class="nav-menu-mobile-body">
      <ul>
        <li @click="goto('/home')">
          <router-link to="/home">Home</router-link>
          <i class="el-icon-arrow-right pull-right" />
        </li>
        <li @click="goto('/about')">
          <router-link to="/about">About</router-link>
          <i class="el-icon-arrow-right pull-right" />
          <ul />
        </li>
        <li @click="goto('/blog')">
          <router-link to="/blog">Blog</router-link>
          <i class="el-icon-arrow-right pull-right" />
          <ul />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    hideNavMenuMobile() {
      document.querySelector('.nav-menu-mobile').classList.remove('active')
    },
    goto(url) {
      this.hideNavMenuMobile()
      this.$router.replace(url)
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-menu-mobile {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  z-index: 999;
  transform: translateZ(0);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;

  color: #fff;
  a {color: #fff}

  &.active {
    transform: scaleX(1);
  }
  .el-icon-arrow-right {margin-top: 2px;}
  .nav-menu-mobile-header {
    padding: 35px 20px;
    overflow: hidden;
    .close {
      float: right;
      font-size: 28px;
    }
  }

  .nav-menu-mobile-body {
    padding: 20px;

    >ul {
      text-align: left;
      font-size: 28px;
      li {margin-bottom: 20px;}
      ul {
        height: 0;
        &.active {
          height: auto;
        }
      }
    }
  }
}
</style>
