<template>
    <div class="article-form-update">
      <div class="back" @click="$router.go(-1)">
        返回
      </div>
        <a-form class="form-update-article" :form="form" @submit="publishNow">
            <a-form-item class="article-title" :span="4">
                <a-input
                v-decorator="['title', { initialValue: article.title, rules: [{ required: true, message: '文章标题必须填写.'}]}]"
                placeholder='文章标题'
                auto-focus
                ></a-input>
            </a-form-item>
            <tinymce ref="editor" v-model="msg" class="article-content" @onClick="onClick" />
            <a-form-item>
                <a-input
                v-decorator="['tag', { initialValue: article.tag, rules: [{ required: true, message: '文章关键词.'}]}]"
                placeholder='文章标签'
                ></a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                v-decorator="['type', { initialValue: article.type, rules: [{ required: true, message: '请填写文章分类.'}]}]"
                placeholder='文章分类'
                ></a-input>
            </a-form-item>
            <div class="btn-wrap">
                <button type="submit" class="btn-submit">提交</button>
                <!-- <a-button type="danger"  @click="clear">清空</a-button> -->
            </div>
            <a-form-item style="margin: 0;">
                <a-input type="hidden" v-decorator="['created_on']"></a-input>
            </a-form-item>
        </a-form>
    </div>
</template>
<script>
import tinymce from '@/components/tinymce.vue'

export default {
  name: 'ArticlesUpdate',
  data () {
    return {
      id: 0,
      article: {},
      msg: ''
    }
  },
  beforeCreate () {
    this.axios({
      method: 'get',
      url: '/api/articles/detail/' + this.$route.params.id
    }).then(res => {
      this.article = res.data
      // this.form.setFieldsValue(this.article)
      this.$refs.editor.myValue = this.article.content
    })
  },
  created () {
    this.form = this.$form.createForm(this, { name: 'publish_article' })
    this.id = this.$route.params.id
  },
  components: {
    tinymce
  },
  methods: {
    onClick () {
      console.log(this.$refs.editor.myValue)
    },
    publishNow (e) {
      e.preventDefault()

      this.form.validateFields((err, values) => {
        if (!err) {
          values.content = this.msg
          values.modified_on = this.getCurrentFormattedTime()
          values.id = this.id
          this.axios({
            url: '/api/articles/update',
            method: 'post',
            data: values
          }).then(res => {
            this.$router.push('/articles/list')
          })
            .catch(err => {
              console.log(err)
            })
        } else {
          alert('错误格式！')
        }
      })
    },
    clear () {
      this.$refs.editor.clear()
    }
  }
}
</script>
<style lang="scss" scoped>
.back {margin-bottom: 20px;cursor: pointer;width: 40px;}
.btn-wrap {
    display: flex;
    align-items: center;
    button {
        margin-right: 10px;
    }
}
.article-content {
    margin-bottom: 24px;
}
.article-form-update {
  background: #fff;
  padding: 24px;
  width: 800px;
  margin: auto !important;
  margin-top: 24px !important;

  @media screen and (max-width: 1200px) {
    width: calc(100% - 48px);
  }
}
.ant-form-item-children input {
    height: 40px;
}
</style>
