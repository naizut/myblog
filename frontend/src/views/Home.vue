<template>
  <div class="home">
    <span :ass="afk" />
    <el-row>
      Hello Welcome 2 Ky's lab
    </el-row>
    <p>{{ afked }}gg</p>
    <ul>
      <li v-for="i in list"
          v-once
          :key="i.id"
      >{{ i.id }}</li>
    </ul>
    <input v-model="iv"
           type="text"
    >
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      afk: 'gg',
      list: [1, 233, 45],
      iv: ''
    }
  },
  computed: {
    afked: function() {
      return this.iv + '5'
    }
  },
  watch: {
    iv(newV, oldV) {
      console.log(newV)
      console.log('old:', oldV)
    }
  },
  created() {
    this.axios({
      url: '/api/articles/list',
      method: 'get'
    }).then((res) => {})
  },
  beforeCreate() {},
  mounted() {
    console.log(this)
  }
}
</script>
