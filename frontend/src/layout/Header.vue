<template>
  <nav class="header">
    <div class="header__content">
      <router-link to="/"
                   class="logo"
      >
        <!-- <img src="@/assets/brand.png"
             alt="Logo"
        >
        <span>s</span> -->
        <span>Ky's</span>
      </router-link>
      <NavMenuPc ref="navbarPC" :is-home="isHome" />
    </div>
  </nav>
</template>
<script>
import NavMenuPc from './NavMenuPc'
export default {
  name: 'Header',
  components: {
    NavMenuPc
  },
  props: {
    isHome: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    shortenSearchInput() {
      this.$refs.navbarPC.reduceWidth()
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 5px solid transparent;
  box-sizing: content-box;

  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  .header__content {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    a.logo {
      width: 200px;
      display: flex;
      line-height: 100px;
      text-decoration: none;
      img {
        height: 100px;
      }
      span {
        color: $mintBlue;
        font-size: 50px;
        font-family: Baskerville, 'Goudy Old Style', Palatino, 'Book Antiqua',
          Symbol, serif;
      }
    }
  }
}
</style>
