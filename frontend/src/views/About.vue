<template>
  <div class="about">
    <div class="my-production page-content-wrap">
      <el-row class="text-left f24 text-bold mt30">
        Major developer in these projects:
      </el-row>
      <el-row class="projects" :gutter="20">
        <el-col
          v-for="(proj, index) in projects"
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
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
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
  background: #eee;
  .my-production {
    padding: 20px;
    .projects {
      display: flex;
      justify-content: center;
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
