<template>
    <div>
        <a-button @click="logout"></a-button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'logout',
  mounted: function () {
    this.logout()
  },
  methods: {
    ...mapMutations(['changeLogout']),
    logout () {
      this.changeLogout()
      this.$router.push('/home')
    }
  }
}
</script>
