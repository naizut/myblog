<template>
  <div class="article detail">
    <article class="article__content">
      <h1>{{ article.title }}</h1>
      <h5>{{ article.modified_on }}</h5>
      <p class="" v-html="article.content" />
      <footer>分类:{{ article.type }},标签:{{ article.tag }}</footer>
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
    padding: 15px;
}
</style>
