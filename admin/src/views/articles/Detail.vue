<template>
    <div>
        <article>
            <h1>{{article.title}}</h1>
            <h5>{{article.modified_on}}</h5>
            <p v-html="article.content"></p>
            <footer>{{article.type}},{{article.tag}}</footer>
        </article>
    </div>
</template>
<script>
export default {
  data () {
      return {
          id: this.$route.params.id,
          article: {}
      }
  },
  created() {
      this.axios({
          method: 'get',
          url: '/api/articles/detail/' + this.id
      }).then(res => {
          this.article = res.data
      })
  },
}
</script>