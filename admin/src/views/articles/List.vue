<template>
    <div class="inner-wrap">
        <div>
            <a-modal title="Title"
                    :visible="visible"
                    :confirm-loading="confirmLoading"
                    @ok="handleOk"
                    @cancel="handleCancel"
            >
            <p>{{ ModalText }}</p>
            </a-modal>

            <a-row class="first-row filter">
                <a-col :span="6" @click="sortBy('title');selected=0">
                    文章标题
                    <a-icon type="arrow-up" :class="selected==0&&isSort? 'active':''" />
                    <a-icon type="arrow-down" :class="selected==0&&!isSort? 'active':''" />
                </a-col>
                <a-col :span="6" @click="sortBy('type');selected=1">
                    文章类型
                    <a-icon type="arrow-up" :class="selected==1&&isSort? 'active':''" />
                    <a-icon type="arrow-down" :class="selected==1&&!isSort? 'active':''" />
                </a-col>
                <a-col :span="3" @click="sortBy('tag');selected=2">
                    文章标签
                    <a-icon type="arrow-up" :class="selected==2&&isSort? 'active':''" />
                    <a-icon type="arrow-down" :class="selected==2&&!isSort? 'active':''" />
                </a-col>
                <a-col :span="3" @click="sortBy('created_on');selected=3">
                    创建时间
                    <a-icon type="arrow-up" :class="selected==3&&isSort? 'active':''" />
                    <a-icon type="arrow-down" :class="selected==3&&!isSort? 'active':''" />
                </a-col>
            </a-row>

            <a-row v-for="(item, index) in articles" :key="item.id">
                <router-link :to="{name: 'detail', params: {id: item.id}}" class="title"><a-col :span="6">{{item.title}}</a-col></router-link>
                <a-col :span="6">{{item.type}}</a-col>
                <a-col :span="3">{{item.tag}}</a-col>
                <a-col :span="3">{{item.created_on}}</a-col>
                <a-col :span="6">
                    <a-button type="primary" shape="circle" icon="edit" @click="toUpdate(index)"/>
                    <a-button type="primary" shape="circle" icon="delete" @click="confirmDelete(index)" />
                </a-col>
            </a-row>

            <a-row v-for="count in pageNums" :key="count">
                <a-col @click="switchPage(count)">{{count}}</a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ArticlesList',
  data() {
      return {
          articles: {},
          ModalText: "确认删除？",
          visible: false,
          confirmLoading: false,
          toDelete: 0,
          isSort:1,
          selected:3,
          pageSize: 2,
          pageNums: 0,
          pageIndex: 0
      }
  },
  created() {
      var that = this
      this.axios({
          method: 'get',
          url: '/api/articles/list',
          params: {
              limit: that.pageSize,
              offset: that.pageIndex,
          }
      }).then(res => {
          this.articles = res.data.rows
          this.pageNums = Math.ceil(res.data.count / that.pageSize)
          this.sortBy('created_on')
          console.log(res)
      }).catch(err=>{
          console.log(err)
      })
  },
  methods: {
    toUpdate(i) {
        this.$router.push({
            name: 'update',
            params: {id: this.articles[i].id}
        })
    },
    confirmDelete(i) {
        this.visible = true
        this.toDelete = i
        this.ModalText = '删除文章' + this.articles[i].title + '?';
    },
    handleOk(e) {
      var articles = this.articles
      var toDestroy = {}
      toDestroy.id = articles[this.toDelete].id
      this.confirmLoading = true;

      this.axios({
          url: '/api/articles/delete',
          method: 'post',
          data: toDestroy
      }).then(res => {
        articles.splice(this.toDelete, 1)
        this.visible = false;
        this.confirmLoading = false;
      }).catch(err => {
          console.log(err)
      })
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false;
    },
    sortByString($prop) {
        var that = this
        function compare(args) {
          return function(a, b){
            var v1 = a[args]
            var v2 = b[args]
            for(let i=0;i<(v1.length<=v2.length?v1.length:v2.length);i++) {
                if(v1[i] != v2[i]){
                    return (!that.isSort)?v1.localeCompare(v2):v2.localeCompare(v1)
                }
            }
          }
        }
        this.articles = this.articles.sort(compare($prop))
        that.isSort = that.isSort?0:1;
    },
    sortBy(field) {
      this.sortByString(field)
    },
    switchPage($count) {
        var that = this
        this.axios({
            method: 'get',
            url: '/api/articles/list',
            params: {
                offset: ($count - 1) * that.pageSize,
                limit:  that.pageSize
            }
        }).then(res=>{
            that.articles = res.data.rows
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.ant-row {
    margin: 10px 0;
    button {
        margin: 0 5px;
    }
    i {
        visibility: hidden;
        &.active {
            visibility: visible;
        }
    }
}
a.title {
    transition: color 0s;
}
.first-row {
    margin-bottom: 20px;
}
.filter >*{
    cursor: pointer;
    padding-left: 30px;
}
.inner-wrap {
    min-height: 80vh;
}
</style>
