<template>
  <div class="article detail">
    <article class="article__content inner-wrap">
      <div class="bread-crumb pd20 mb50 pl0">
        <router-link to="/home">Home</router-link> > Blog > <span class="text-primary">{{ article.type }}</span>
      </div>
      <h1>{{ article.title }}</h1>
      <h5>{{ article.modified_on }}</h5>
      <p class="mt100" v-html="article.content" />
      <footer class="mt100">分类:{{ article.type }},标签:{{ article.tag }}</footer>
    </article>
  </div>
</template>
<script>
export default {
    name: 'BlogDetail',
    data() {
        return {
            article: {},
            id: this.$route.params.id
        }
    },
    created() {
        this.axios({
            method: 'get',
            url: '/api/articles/detail/' + this.id
        }).then(res => {
            this.article = res.data
        })
    }
}
</script>
<style lang="scss" scoped>
h1 {
    margin: 0;
}
.article.detail {
    overflow: hidden;
    padding: 15px 0;
}
</style>
