<template>
  <div class="views-container page-content-wrap">
    <header class="views-header">
      <div class="views-filters" />
    </header>
    <div v-for="article in articles"
         :key="article.id"
         class="views-row"
    >
      <h1>
        <router-link :to="{ name: 'BlogDetail', params: { id: article.id } }">
          {{ article.title }}
        </router-link>
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Blog',
  data() {
    return {
      articles: {}
    }
  },
  created() {
    this.axios({
      url: '/api/articles/list',
      method: 'get'
    }).then((res) => {
      console.log(res)
      this.articles = res.data.rows
    })
  }
}
</script>
<style lang="scss" scoped>
.views-container {
  .views-row {
    border-bottom: 1px dashed $mintBlue;
    margin: 10px 0 auto;
    text-align: left;
    padding-left: 20px;
  }
}
</style>
