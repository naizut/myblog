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
          <el-row class="banner-text pt0">
            <button>Get design now</button>
          </el-row>

        </div>
      </div>

      <div class="home-news">
        <h1 class="mb30">About Ky's Lab</h1>
        <div class="inner-wrap">
          <h3>Ky's Lab means <span class="text-primary"
                                   style="cursor: pointer"
                                   @click="$router.push('/about')"
          >Ky</span>
            and Ky's friends who have extra-ordinary fatastic ideas and all ready to make it real. We take advantage of
            weekends to achieve our aspirations. </h3>
        </div>
      </div>

      <div class="home-topic">
        <div class="inner-wrap">
          <h1>Join Us</h1>
          <p>We desire for one talented designer! <router-link class="text-primary" to="/about">Contact Me Now
          </router-link>
          </p>
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

                  button {
            text-align: left;
            color: #000;
            font-size: 48px;
            border: 1px solid #f2f2f2;
            border-radius: 50px;
            cursor: pointer;
            font-size: 30px;
            font-weight: 300;
            padding: 5px 20px;
            transition: all .6s;
            animation: fadeIn 2s forwards;
            animation-delay: 2s;

            &:hover {
              background: #000;
              color: #fff;
            }
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
            padding-top: 60px;
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
