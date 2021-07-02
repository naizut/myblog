<template>
  <div class="home">
    <div class="body">
      <!-- <div class="banner">
        <img src="../assets/images/banner.jpg" alt="">
      </div> -->
      <div class="banner-zone text-center">
        <div class="inner-wrap">
          <el-row class="banner-text">
            Just for <span class="text-primary">FUN</span>.
          </el-row>
          <el-row class="banner-text pt0">
            In <span class="text-primary">DESIGN</span> we believe.
          </el-row>

          <!-- <el-row v-for="blog in blogs" :key="blog.id">
            Type: {{ blog.name }}
            <router-link v-for="title in blog.value"
                         :key="title.id"
                         :to="`/blog/${title.id}`"
            >
              {{ title.title }}
            </router-link>
          </el-row> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        blogs: []
      }
    },
    computed: {
      afked: function() {
        return this.iv + '5'
      }
    },
    watch: {
      iv(newV, oldV) {
        console.log(newV)
        console.log('old:', oldV)
      }
    },
    created() {
      this.axios({
        url: '/api/articles/list',
        method: 'get'
      }).then((res) => {
        const that = this
        res.data.rows.forEach(el => {
          if (that.blogs.indexOf(el.type) == -1) {
            that.blogs.push({
              name: el.type,
              value: [{
                title: el.title,
                id: el.id
              }]
            })
          } else {
            that.blogs.find(x => x.name == el.type).value.push({
              title: el.title,
              id: el.id
            })
          }
        })
        console.log('xxx', that.blogs)
      })
    }
  }
</script>
<style lang="scss" scoped>
  .home {
    .body {
      min-height: 100vh;

      .banner-zone {
        height: 768px;
        overflow: hidden;

        img {
          width: 100%;
        }

        .banner-text {
          text-align: left;
          color: #000;
          font-size: 48px;
          padding-top: 167px;
          opacity: 0;
          animation: fadeIn 2s forwards;
          &:nth-child(2) {
            animation-delay: 1s;
          }

          @media screen and (max-width: 1024px) {
            padding-top: 120px;
          }

          @media screen and (max-width: 425px) {
            padding-top: 50px;
            max-width: 250px;
            text-align: center;
            margin: auto;
          }
        }
      }
    }

  }

</style>
