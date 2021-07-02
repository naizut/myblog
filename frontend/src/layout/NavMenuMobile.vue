<template>
  <div class="nav-menu-mobile">
    <div class="nav-menu-mobile-header">
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
        <li @click="goto('/blog')">
          <router-link to="/blog">Blog</router-link>
          <i class="el-icon-arrow-right pull-right" />
          <ul />
        </li>
        <li @click="goto('/contact')">
          <router-link to="/contact">Contact</router-link>
          <i class="el-icon-arrow-right pull-right" />
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
  left: -100%;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  z-index: 999;
  transition: all .6s;

  color: #fff;
  a {color: #fff}

  &.active {
    left: 0;
  }
  .el-icon-arrow-right {margin-top: 2px;}
  .nav-menu-mobile-header {
    padding: 20px;
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
