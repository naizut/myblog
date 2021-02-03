<template>
  <el-container class="my-tools app-list page-content-wrap">
    <el-header>Tools</el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12"
                class="app pd20"
                @click.native="goTo('ToDoList')"
        >
          <el-row>
            <el-image :src="require('@/assets/images/todolist.png')" />
          </el-row>
          <el-row class="name">
            ToDoList
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
export default {
  components: {},
  methods: {
    goTo(pathName) {
      this.$router.push({
        name: pathName
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.my-tools {
  .app {
    border: 1px solid #eee;
    border-radius: 5px;
    box-shadow: 0 2px 8px 0 rgba(58,128,205,0.2);
    cursor: pointer;
    transition: all 0.6s;
    &:hover{
      box-shadow: 0 2px 8px 0 rgba(58,128,205,0.8);
    }
    .name {
      font-size: 24px;
      font-family: 'Lato';
      font-weight: bold;
      line-height: 28px;
    }
  }
}
</style>
