<template>
  <div class="home">
    <div class="body">
      <div class="banner-zone text-center">
        <div class="inner-wrap">
          <el-row class="banner-text">
            Just for <span class="text-primary">FUN</span>.
          </el-row>
          <el-row class="banner-text pt0">
            In <span class="text-primary">DESIGN</span> we believe.
          </el-row>

        </div>
      </div>

      <div class="home-news">
        <h1>What's new?</h1>
        <h3>We plan to do at least one invention per week no matter if it really makes sense. </h3>
        <swiper ref="mySwiper"
                :options="swiperOption"
                class="college-list"
        >
          <swiper-slide
            v-for="(tool, index) in tools"
            :key="index"
            class="tool"
            @click.native="goTo(tool.url)"
          />
        </swiper>
      </div>

      <div class="home-articles">
        <div class="inner-wrap">
          <h1>
            Articles:
          </h1>
          <el-row v-for="blog in blogs" :key="blog.id">
            <!-- Type: {{ blog.name }} -->
            <router-link class="f20"
                         :to="`/blog/${blog.id}`"
            >
              &lt; {{ blog.title }} &gt;
            </router-link>
          </el-row>
        </div>
      </div>

      <div class="home-topic">
        <div class="inner-wrap">
          <h1>Join Us</h1>
          <p>We desire for one talented designer! <router-link class="text-primary" to="/about">Contact Me Now</router-link></p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
  export default {
    name: 'Home',
    components: {
      swiper,
      swiperSlide
    },
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
        that.blogs = res.data.rows.sort((v1, v2) => {
          return new Date(v2.created_on) - new Date(v1.created_on)
        })
        console.log('xxx', that.blogs)
      })
    }
  }
</script>
<style lang="scss" scoped>
  .home {
    .body {
      .banner-zone {
        height: calc(100vh - 100px);
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

      .home-news {
        background: #000;
        color: #fff;
        padding: 30px 0;
      }

      .home-articles {
        text-align: left;
        padding: 30px 0;
        h1 {
          margin-bottom: 20px;
        }
      }

      .home-topic {
        background: #000;
        color: #fff;
        padding: 30px 0;
      }
    }

  }

</style>
