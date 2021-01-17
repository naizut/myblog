<template>
  <nav class="header">
    <div class="header__content">
      <router-link to="/" class="logo">
        <img src="@/assets/brand.png" alt="Logo">
        <span>s</span>
      </router-link>
      <NavMenuPc />
    </div>
  </nav>
</template>
<script>
import NavMenuPc from "./NavMenuPc";
export default {
  name: "Header",
  components: {
    NavMenuPc
  }
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #fff;
  height: 100px;
  border-bottom: 5px solid transparent;
  box-sizing: content-box;
  .header__content {
    margin: 0 auto;
    max-width: 1200px;
    min-width: 1000px;
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
        font-family:Baskerville, 'Goudy Old Style', Palatino, 'Book Antiqua', Symbol, serif;
      }
    }
  }
}
</style>
