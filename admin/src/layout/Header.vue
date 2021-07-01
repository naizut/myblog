<template>
    <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <div class="header-bar">
          <div class="burger-wrapper" @click="notifySwtichSlider">
            <div class="burger" :class="showSlider?'inactive':''"></div>
          </div>
          <div class="btn-logout">
            <a-button type="primary" icon="poweroff" @click="userLogout">注销</a-button>
          </div>
        </div>
    </a-layout-header>
</template>
<script>
export default {
  name: 'HeaderAdmin',
  data () {
    return {
      showSlider: true
    }
  },
  methods: {
    userLogout () {
      this.$router.push('/logout')
    },
    switchSlider () {
      this.showSlider = !this.showSlider
    },
    notifySwtichSlider () {
      this.$emit('switchSlider')
    }
  }
}
</script>
<style lang="scss" scoped>
.header-bar{
  max-width: 1440px;
  position: relative;
  .burger-wrapper {
    top: 16px;
    left: 24px;
    position: relative;
    cursor: pointer;
    width: 25px;
    height: 18px;
  }
  .burger {
    height: 1px;
    width: 25px;
    border-bottom: 2px solid #000;

    &:after {
      content: '';
      height: 1px;
      width: 25px;
      border-bottom: 2px solid #000;
      position: absolute;
      top: 8px;
    }
    &::before {
      content: '';
      height: 1px;
      width: 25px;
      border-bottom: 2px solid #000;
      position: absolute;
      top: 16px;
    }

    &.inactive {
      display: none;
    }
  }
  .btn-logout {
    position: absolute;
    top:0px;
    right:24px;
  }
}
</style>
