<template>
  <div class="navbar-container">
    <div class="pull-right">
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
    <div class="pull-right">
      <ul class="nav-menu-pc pull-right pr40">
        <li v-for="route in routes"
            :key="route.id"
            :class="{ active: route.path === index }"
        >
          <router-link :to="route.path"
                       :class="[isHome?'is-home':'',route.id==0?'is-blog':'']"
          >{{ route.name }}</router-link>
        </li>
      </ul>
    </div>

    <div id="typesDropdown"
         :class="showTypesDropdown?'active':''"
         @mouseover="showTypesDropdown=true"
         @mouseleave="showTypesDropdown=false"
    >
      <el-col v-for="type in types"
              :key="type.id"
              :span="6"
      >
        <router-link :to="`/blog?type=${type}`">{{ type }}</router-link>
      </el-col>
    </div>
  </div>

</template>
<script>
export default {
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
          id: 1,
          name: 'Contact',
          path: '/contact'
        },
        {
          id: 0,
          name: 'Blog',
          path: '/blog'
        },
        {
          id: 2,
          name: 'Tools',
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
  }
}
</style>
