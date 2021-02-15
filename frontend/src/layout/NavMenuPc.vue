<template>
  <div class="navbar-container">
    <div class="pull-right">
      <div class="search-zone"
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
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      index: '',
      nowIndex: '',
      routes: [
        {
          id: 1,
          name: 'About',
          path: '/about'
        },
        {
          id: 0,
          name: 'Blog',
          path: '/blog'
        },
        {
          id: 2,
          name: 'Tools',
          path: '/tools'
        }
      ],
      searchActive: false,
      searchText: ''
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
  mounted() {
    this.index = window.location.pathname
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
        font-size: 16px;
        line-height: 100px;
        transition: ease 0.3s all;
        display: block;
        padding: 0 20px;
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
  .ant-input-group > .ant-input:first-child {
    border: none;
    border-bottom: 1px solid $lightGrey;
  }
  .ant-input-search-enter-button
    input
    + .ant-input-group-addon
    .ant-input-search-button {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .ant-btn-primary {
    border: none;
    background-color: #000;
    &:hover {
      background-color: #333;
    }
    box-shadow: none !important;
  }
  .ant-input:hover {
    border-color: $mintBlue;
  }
  .ant-input:focus {
    border-color: $mintBlue;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: none;
  }
}
</style>
