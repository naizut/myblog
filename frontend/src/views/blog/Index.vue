<template>
  <div class="page-content-wrap">
    <header class="views-header">
      <div class="views-filters" />
    </header>
    <el-row v-for="article in articles"
            :key="article.id"
            class="article mt50"
    >
      <el-row class="title">
        <h1>
          <router-link :to="{ name: 'BlogDetail', params: { id: article.id } }">
            {{ article.title }}
          </router-link>
        </h1>
      </el-row>
      <el-row>
        {{ article.created_on }}
      </el-row>
      <el-row class="tags mt10">
        <span class="mr20">Tags: </span>
        <span v-for="(tag, j) in article.tag.split(',')"
              :key="j"
              class="tag"
        >{{ tag }}</span>
      </el-row>
    </el-row>
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
    }).then(res => {
      console.log(res)
      this.articles = res.data.rows
    })
  }
}
</script>
<style lang="scss" scoped>
.page-content-wrap {
  .article {
    border-bottom: 1px solid #666;
    text-align: left;
    padding-left: 20px;
    .tag {
      border: 1px solid #666;
      border-bottom: 1px solid #fff;
      color: #666;
      cursor: pointer;
      font-size: 14px;
      line-height: 14px;
      margin-right: 10px;
      padding: 0 10px;
      &:hover{
        background-color: $mintBlue;
        border: 1px solid #fff;
        border-bottom: 1px solid $mintBlue;
        color: #000;
      }
    }
    .title {
      a{
        color: #333;
      }
    }
  }
}
</style>
