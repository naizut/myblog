<template>
  <div id="content">
    <el-row v-for="i of 16"
            :key="i"
    >
      {{ i*100 }}px
    </el-row>
    <div class="wrapper" />
  </div>
</template>

<script>
export default {
  mounted() {
    // 解决滑动问题
    var y1, y2
    document.addEventListener('touchstart', function(evt) {
      y1 = parseInt(evt.touches[0].pageY)
      y2 = y1
    }, false)
    document.body.addEventListener('touchmove', function(evt) {
      evt.preventDefault()
      y2 = parseInt(evt.touches[0].pageY)
      if (y2 - y1 > 0) {
        console.log('down')
        document.body.scrollTop -= y2 - y1
      } else {
        console.log('up')
        document.body.scrollTop += y1 - y2
      }
    }, { passive: false })
  }
}
</script>

<style lang="scss">

.el-row {
  background: #80ffff;
  height: 100px;
  width: 100vw;
  border-bottom: 5px solid green;
}
</style>
