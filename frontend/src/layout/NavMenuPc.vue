<template>
  <div class="navbar-container">
    <div class="pull-right nav-pc">
      <div class="search-zone"
           :class="isHome?'is-home':''"
           @click="addWidth()"
           @mouseenter="addWidth()"
      >
        <el-input v-model="searchText"
                  placeholder="Search Title."
                  :class="searchActive?'active':''"
                  @keyup.enter.native="onSearch(searchText)"
        >
          <i slot="suffix"
             class="el-input__icon el-icon-search"
          />
        </el-input>
      </div>
    </div>
    <div class="pull-right nav-pc">
      <ul class="nav-menu-pc pull-right pr40">
        <li v-for="route in routes"
            :key="route.id"
            :class="{ active: route.path === index }"
        >

          <template v-if="route.id == 1">
            <a href="#"
               class="is-blog"
               @click="showTypesDropdown=!showTypesDropdown"
            >{{ route.name }}</a>
          </template>
          <router-link v-else
                       :to="route.path"
                       :class="[isHome?'is-home':'']"
          >{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="pull-right nav-mobile" @click="showNavMobile">
      <div class="burger" />
    </div>

    <div id="typesDropdown"
         :class="showTypesDropdown?'active':''"
         @mouseover="showTypesDropdown=true"
         @mouseleave="showTypesDropdown=false"
    >
      <div class="inner-wrap">
        <el-col v-for="type in types"
                :key="type.id"
                :span="6"
                class="text-left"
        >
          <router-link :to="`/blog?type=${type}`">{{ type }}</router-link>
        </el-col>
      </div>
    </div>
    <NavMenuMobile />
  </div>

</template>
<script>
import NavMenuMobile from './NavMenuMobile.vue'

export default {
  components: {
    NavMenuMobile
  },
  props: {
    isHome: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      index: '',
      nowIndex: '',
      routes: [
        {
          id: 0,
          name: 'About',
          path: '/about'
        },
        {
          id: 1,
          name: 'Blog',
          path: '/blog'
        },
        {
          id: 2,
          name: 'Contact',
          path: '/contact'
        },
        {
          id: 3,
          name: 'Service',
          path: '/tools/list'
        }
      ],
      types: [],
      searchActive: false,
      searchText: '',
      showTypesDropdown: false
    }
  },
  watch: {
    $route(to, from) {
      this.index = window.location.pathname
      if (to.path == from.path) {
        this.$router.go(0)
      }
    }
  },
  created() {
    this.getTypes()
  },
  mounted() {
    this.index = window.location.pathname
    document.querySelector('.is-blog').onmouseover = () => {
      this.showTypesDropdown = true
    }
    document.querySelector('.is-blog').onmouseout = () => {
      this.showTypesDropdown = false
    }
  },
  methods: {
    addWidth() {
      this.searchActive = true
    },
    reduceWidth() {
      this.searchActive = false
    },
    onSearch(value) {
      if (value) {
        this.$router.push({
          path: '/search',
          query: {
            keyword: value
          }
        })
      }
    },
    getTypes() {
      this.axios({
        methods: 'get',
        url: '/api/articles/types'
      }).then(res => {
        this.types = Array.from(new Set(res.data.map(x => x.type)))
      })
    },
    showNavMobile() {
      document.querySelector('.nav-menu-mobile').classList.add('active')
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar-container {
  width: 100%;
  .el-col { transition: all 0.6s ease-in-out; }
  ul.nav-menu-pc {
    margin: 0;
    display: flex;
    align-items: center;
    li {
      text-align: left;
      cursor: pointer;
      transition: ease 0.3s all;
      a {
        color: #000;
        font-size: 18px;
        line-height: 100px;
        transition: ease 0.3s all;
        display: block;
        padding: 0 20px;
        // &.is-home {color: #fff;}
      }
      &.active a { color : $mintBlue; }
      &:hover {
        // background-color: #333;
        opacity: 0.7;
      }
    }
  }
  .search-zone {
    cursor: pointer;
  }

  #typesDropdown {
    box-sizing: border-box;
    position: absolute;
    top: 100px;
    right: 0;
    width: 100%;
    height: 0px;
    border-bottom: 1px solid #dadada;
    background: #fff;
    overflow: hidden;

    transition: all .6s ease;
    z-index: 999;
    &.active {
      height: 100px;
    }

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  .nav-pc {
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  .nav-mobile {
    display: none;
    margin-top: 40px;
    @media screen and (max-width: 1200px)  {
      display: block;
    }
  }
}
</style>
