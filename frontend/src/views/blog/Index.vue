<template>
  <div class="article-list">
    <!-- BreadCrumb Here -->
    <div class="bread-crumb pd20">
      <router-link to="">Home</router-link> > Blog
    </div>

    <!-- Banner && Brief Here -->
    <!-- Filter Here -->
    <!-- <header class="views-header">
      <div class="views-filters" />
    </header> -->
    <!-- 多个分类的前几篇文章代替filters -->
    <!-- 列表模块 -->
    <el-row v-for="article in articles"
            :key="article.id"
            class="article mt20 pd20"
    >
      <el-row class="title">
        <h3>
          <router-link :to="{ name: 'BlogDetail', params: { id: article.id } }">
            {{ article.title }}
          </router-link>
        </h3>
      </el-row>
      <!-- <el-row>
        {{ article.created_on }}
      </el-row>
      <el-row class="tags mt10">
        <span class="mr20">Tags: </span>
        <span v-for="(tag, j) in article.tag.split(',')"
              :key="j"
              class="tag"
        >{{ tag }}</span>
      </el-row> -->
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
    const that = this
    this.axios({
      url: '/api/articles/list',
      method: 'get',
      params: {
        type: that.$route.query.type || ''
      }
    }).then(res => {
      console.log(res)
      this.articles = res.data.rows
    })
  }
}
</script>
<style lang="scss" scoped>
.article-list {
  .article {

    text-align: left;
    padding-left: 20px;
    .tag {
      color: #666;
      cursor: pointer;
      font-size: 14px;
      line-height: 14px;
      padding: 0 10px;
      &:hover{
        color: #000;
      }
    }
    .title {
      h1 {
        margin: 0;
        a{
          color: #333;
        }
      }
    }
  }
}
</style>
