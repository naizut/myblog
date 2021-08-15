<template>
  <div v-loading="loading" class="article-list-page">
    <div class="inner-wrap">
      <!-- BreadCrumb Here -->
      <div class="bread-crumb pd20 mb50 pl0">
        <router-link to="">Home</router-link> > Blog > <span class="text-primary">{{ $route.query.type }}</span>
      </div>

      <!-- Banner && Brief Here -->
      <!-- Filter Here -->
      <el-row class="article-filters pull-left mb30">
        <div class="article-filter">
          <el-row class="article-filter-label mb10">
            文章分类：
          </el-row>
          <el-select v-model="type" @change="handleTypeSelect">
            <el-option v-for="item in types"
                       :key="item"
                       :value="item"
                       :label="item"
            />
          </el-select>
        </div>
      </el-row>
      <!-- 多个分类的前几篇文章代替filters -->
      <!-- 列表模块 -->
      <el-row class="article-list-title mb50 fadeIn">
        <span class="pull-left f24">Articles</span>
        <span class="pull-right f14">More</span>
      </el-row>
      <div class="article-list">
        <el-row v-for="article in articles"
                :key="article.id"
                class="article"
        >
          <el-row class="title">
            <router-link :to="{ name: 'BlogDetail', params: { id: article.id } }">
              &lt; {{ article.title }} &gt;
            </router-link>
          </el-row>
          <el-row class="f14">
            {{ article.created_on }}
          </el-row>
          <el-row>
            分类： {{ article.type }}
          </el-row>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Blog',

  data() {
    return {
      articles: {},
      types: [],
      loading: true,
      type: this.$route.query.type || ''
    }
  },

  created() {
    this.loadPageDatas()
  },

  methods: {
    async loadPageDatas() {
      await this.initArticles()
      await this.initTypes()
    },

    async initArticles() {
      this.loading = true

      await this.axios({
        url: '/api/articles/list',
        method: 'get',
        params: {
          type: this.type
        }
      }).then(res => {
        console.log(res)
        this.articles = res.data.rows
      })

      this.loading = false
    },

    async initTypes() {
      this.axios({
        methods: 'get',
        url: '/api/articles/types'
      }).then((res) => {
        this.types = Array.from(new Set(res.data.map((x) => x.type)))
      })
    },

    handleTypeSelect(v) {
      this.initArticles()
    }
  }
}
</script>
<style lang="scss" scoped>
.article-list-page {
  .article-filters {
    text-align: left;
  }
  .article-list-title {
    text-align: left;
    clear: both;
  }
  .article-list {
    border-left: 2px solid #f2f2f2;
    padding-left: 20px;
    .article {
      text-align: left;
      transition: all .2s;
      position: relative;
      margin-bottom: 30px;

      &::after{
        content: '';
        position: absolute;
        left: -26px;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;
        background: #ccc;
        border-radius: 10px;
      }

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
}
</style>
