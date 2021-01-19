<template>
  <footer class="footer">
    <div class="inner-wrap">
      <p class="mt20">
        <span>Copyright © 2018</span>
        <span><a href="https://beian.aliyun.com/">沪ICP备16033447号-3</a></span>
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  components: {},
}
</script>
<style lang="scss">
.footer {
  border-top: 1px solid $mintBlue;
  background-color: #000;
  color: #ddd;
  .inner-wrap {
    p {
      line-height: 45px;
    }
  }
}
</style>
