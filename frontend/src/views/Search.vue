<template>
  <div class="search-result">
    <span>为您找到以下结果:</span>
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
            keyWord: this.$route.query.keyword,
            articles: {}
        }
    },
    mounted() {
        this.axios({
            method: 'get',
            url: '/api/search?keyword=' + this.keyWord
        }).then(res => {
            this.articles = res.data
        })
    }
}
</script>
<style lang="scss">
</style>
