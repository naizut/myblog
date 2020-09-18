<template>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
        <template v-for="(item) in menuList">
            <a-menu-item :key="item.pageUrl">
                <router-link :to="item.pageUrl">
                    <a-icon type="user" />
                    <span class="nav-text">{{item.menuName}}</span>
                </router-link>
            </a-menu-item>
        </template>
    </a-menu>
</template>
<script>
export default {
  name: 'SiderAdmin',
  data () {
    return {
      menuList: [
        {
          id: '0',
          menuName: '文章列表',
          pageUrl: '/articles/list',
          title: '文章列表',
          children: []
        },
        {
          id: '1',
          menuName: '新增文章',
          pageUrl: '/articles/create',
          title: '新增文章',
          children: []
        }
      ]
    }
  }
}
</script>
