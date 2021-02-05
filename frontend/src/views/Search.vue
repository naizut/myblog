<template>
  <div class="search-result">
    <el-row>
      <span>Search result for : </span>
      <span class="text-bold">'{{ keyword }}'</span>
    </el-row>
    <section>
      <div v-for="article in articles" :key="article.id">
        <router-link :to="{name: 'BlogDetail', params: {id: article.id}}">
          {{ article.title }}
        </router-link>
      </div>
    </section>
  </div>
</template>
<script>
export default {
    name: 'Search',
    data() {
        return {
            keyword: this.$route.query.keyword,
            articles: {}
        }
    },
    mounted() {
        this.axios({
            method: 'get',
            url: '/api/search?keyword=' + this.keyword
        }).then(res => {
            this.articles = res.data
        })
    }
}
</script>
<style lang="scss">
</style>
