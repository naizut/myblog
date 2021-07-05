<template>
  <div class="article-list">
    <div class="inner-wrap">
      <!-- BreadCrumb Here -->
      <div class="bread-crumb pd20 mb50 pl0">
        <router-link to="">Home</router-link> > Blog > <span class="text-primary">{{ $route.query.type }}</span>
      </div>

      <!-- Banner && Brief Here -->
      <!-- Filter Here -->
      <!-- <header class="views-header">
      <div class="views-filters" />
    </header> -->
      <!-- 多个分类的前几篇文章代替filters -->
      <!-- 列表模块 -->
      <el-row class="article-list-title mb50 fadeIn">
        <span class="pull-left f24">Articles</span>
        <span class="pull-right f14">More</span>
      </el-row>
      <el-row v-for="article in articles"
              :key="article.id"
              class="article"
      >
        <el-row class="title">
          <router-link :to="{ name: 'BlogDetail', params: { id: article.id } }">
            &lt; {{ article.title }} &gt;
          </router-link>
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
  .article-list-title {
    text-align: left;
  }
  .article {
    text-align: left;
    transition: all .2s;
    &:hover {
      opacity: .5;
    }
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
      a {
        font-size:20px;
        line-height: 48px;
        font-weight: 300;
        color: #666;
      }
    }
  }
}
</style>
