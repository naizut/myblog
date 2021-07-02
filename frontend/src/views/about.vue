<template>
  <div class="about">
    <div class="inner-wrap">
      <!-- BreadCrumb Here -->
      <div class="bread-crumb pd20 mb50 pl0">
        <router-link to="">Home</router-link> > <span class="text-primary">About</span>
      </div>

      <div class="my-profile">
        <div class="avatar f28">
          Avatar Here
        </div>
        <div class="info f28">
          <div>Nick name: Kenny</div>
          <div>Post: FE Engineer</div>
        </div>
      </div>

      <div class="my-production">

        <el-row class="text-left f24 text-bold mt30">
          Major developer in these projects:
        </el-row>
        <el-row class="projects" :gutter="20">
          <el-col v-for="(proj, index) in projects"
                  :key="index"
                  class="item mt50"
                  :sm="4"
                  :xs="12"
                  @click.native="goTo(proj.url)"
          >
            <el-row class="cover">
              <img :src="getProjImg(proj.filename)">
            </el-row>
            <!-- <el-row class="name">
                {{ proj.name }}
              </el-row> -->
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projects: [{
            name: 'high创',
            filename: 'highco.svg',
            url: 'http://www.highcogroup.com'
          },
          {
            name: '歐寶',
            filename: 'eurobath.svg',
            url: 'http://www.eurobath.cn'
          },
          {
            name: 'Tuntex',
            filename: 'tuntex.svg',
            url: 'https://www.tuntex-carpet.com/'
          },
          {
            name: '紫江',
            filename: 'zijiang.svg',
            url: 'http://zijiangfoundation.com/'
          },
          {
            name: '幸福五号',
            filename: 'zizhu.svg',
            url: 'http://www.zizhufive.org/'
          },
          {
            name: 'WeEn-semi',
            filename: 'ween.svg',
            url: 'https://www.ween-semi.com/'
          }
        ]
      }
    },

    methods: {
      getProjImg(filename) {
        return require('@/assets/images/about/' + filename)
      },
      goTo(url) {
        window.location.href = url
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    .my-profile {
      overflow: hidden;
      margin-bottom: 100px;
      >* {
        width: 50%;
        float: left;
        text-align: left;
      }
      .avatar {
        animation: fadeInLeft 2s;
      }
    }
    .my-production {
      .projects {

        .item {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            opacity: 0.7;
          }

          .cover {
            display: table-cell;
            vertical-align: middle;

            height: 100px;
            width: 100px;

            img {
              width: 100%;
            }
          }

          .name {
            font-size: 28px;
            font-weight: 400;
          }
        }
      }
    }
  }
</style>
