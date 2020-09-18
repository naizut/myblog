<template>
    <div>
        <div>
                <a-modal
                title="Title"
                :visible="visible"
                :confirm-loading="confirmLoading"
                @ok="handleOk"
                @cancel="handleCancel"
                >
                <p>{{ ModalText }}</p>
                </a-modal>
            <a-row v-for="(item, index) in articles" :key="index">
                <router-link :to="{name: 'detail', params: {id: item.id}}" class="title"><a-col :span="6">{{item.title}}</a-col></router-link>
                <a-col :span="6">{{item.type}}</a-col>
                <a-col :span="3">{{item.tag}}</a-col>
                <a-col :span="3">{{item.created_on}}</a-col>
                <a-col :span="6">
                    <a-button type="primary" shape="circle" icon="edit" @click="toUpdate(index)"/>
                    <a-button type="primary" shape="circle" icon="delete" @click="confirmDelete(index)" />
                </a-col>
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
          toDelete: 0
      }
  },
  created() {
      this.axios({
          method: 'get',
          url: '/api/articles/list',
      }).then(res => {
          this.articles = res.data
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
  }
}
</script>
<style lang="scss" scoped>
.ant-row {
    margin: 10px 0;
    button {
        margin: 0 5px;
    }
}
a.title {
    transition: color 0s;
}
</style>
