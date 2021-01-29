<template>
  <a-row class="navbar-container">
    <a-col :span="5" class="pull-right">
      <ul class="nav-menu-pc">
        <li v-for="route in routes"
            :key="route.id"
            :class="{ active: route.path === index }"
        >
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
        <a-input-search placeholder="Search title"
                        auto-focus
                        style="width: 250px"
                        @search="onSearch"
        />
      </ul>
    </a-col>
  </a-row>

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
        }
      ]
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
<style lang="scss">
.navbar-container {
  width: 100%;
  ul.nav-menu-pc {
    list-style: none;
    width: 100%;
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
      &.active {
        a {
          color: $mintBlue;
        }
      }
      &:hover {
        // background-color: #333;
        opacity: 0.7;
      }
    }
  }
  .ant-input-group > .ant-input:first-child {
    border: none;
    border-bottom: 1px solid $lightGrey;
  }
  .ant-input-search-enter-button input + .ant-input-group-addon .ant-input-search-button {
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
