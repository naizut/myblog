<template>
  <nav class="footer">
    <div class="footer__content">
      <section>
        <ul>
          <li>Copyright © 2020</li>
          <li>
            <a href="https://beian.aliyun.com/">沪ICP备16033447号-3</a>
          </li>
        </ul>
      </section>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Footer",
  components: {}
};
</script>
<style lang="scss">
.footer {
  border-top: 1px solid $mintBlue;
  background-color: #000;
  color: #fff;
  ul {
    margin-top: 20px;
    a {
      color: #fff;
    }
  }
}
</style>
