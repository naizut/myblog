<template>
    <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <div class="userlogin-panel">
            <a-button type="primary" icon="poweroff" @click="userLogout">
              注销用户
            </a-button>
          </div>
    </a-layout-header>
</template>
<script>
export default {
  name: 'HeaderAdmin',
  methods: {
    userLogout () {
      this.$router.push('/logout')
    }
  }
}
</script>
<style lang="scss" scoped>
.userlogin-panel{
  min-width: 1200px;
  max-width: 1440px;
  position: relative;
  button {
    float: right;
    top:16px;
    right:20px;
  }
}
</style>