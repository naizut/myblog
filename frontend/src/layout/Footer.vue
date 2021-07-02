<template>
  <nav class="footer">
    <div class="inner-wrap f12 text-center">
      <span>Copyright © 2018</span>
      <span class="ml5 bei-an">
        <a href="https://beian.aliyun.com/">沪ICP备16033447号-3</a>
      </span>
      <span id="tech-stack" class="ml10">Based on Vue / Eggjs</span>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Footer',
  components: {}
}
</script>
<style lang="scss" scoped>
.footer {
  border-top: 1px solid $mintBlue;
  background-color: #000;
  color: #666;
  .inner-wrap {
    line-height: 45px;
    font-family: 'Alfphabet';
    .bei-an a {
      color: #666;
    }
    #tech-stack {
      @media screen and (max-width: 1200px) {
        display: block;
      }
    }
  }
}
</style>
