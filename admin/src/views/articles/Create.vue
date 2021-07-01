<template>
    <div class="article-form">
        <div class="mb10">
          <h3>创建文章</h3>
        </div>
        <a-form class="form-create-article" :form="form" @submit="publishNow">
            <a-form-item class="article-title" :span="4">
                <a-input
                v-decorator="['title', { rules: [{ required: true, message: '文章标题必须填写.'}]}]"
                placeholder='文章标题'
                auto-focus
                ></a-input>
            </a-form-item>
            <tinymce ref="editor" v-model="msg" class="article-content" @onClick="onClick" />
            <a-form-item>
                <a-input
                v-decorator="['tag', { rules: [{ required: true, message: '文章关键词.'}]}]"
                placeholder='文章标签'
                ></a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                v-decorator="['type', { rules: [{ required: true, message: '请填写文章分类.'}]}]"
                :placeholder="`${types}`"
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
  name: 'ArticlesCreate',
  data () {
    return {
      msg: '',
      types: ''
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'publish_article' })
  },
  created () {
    this.getCategories()
  },
  components: {
    tinymce
  },
  methods: {
    getCategories () {
      this.axios({
        methods: 'post',
        url: '/api/articles/types'
      }).then(res => {
        this.types = Array.from(new Set(res.data.map(x => x.type)))
      })
    },
    onClick () {
      console.log(this.$refs.editor.myValue)
    },
    publishNow (e) {
      e.preventDefault()

      this.form.validateFields((err, values) => {
        if (!err) {
          values.content = this.msg
          values.created_on = this.getCurrentFormattedTime()

          this.axios({
            url: '/api/articles/create',
            method: 'post',
            data: values
          }).then(res => {
            this.$router.push('/articles/list')
          })
            .catch(err => {
              console.log(err)
            })
        } else {
          this.$notify('错误格式！')
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
.article-form {
    max-width: 1140px;
}
.ant-form-item-children input {
    height: 40px;
}
.article-form {
  background: #fff;
  padding: 24px;
  width: 800px;
  margin: auto !important;
  margin-top: 24px !important;

  @media screen and (max-width: 1200px) {
    width: calc(100% - 48px);
  }
}
</style>
