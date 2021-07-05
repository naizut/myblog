<template>
  <el-container class="my-tools app-list">
    <div class="inner-wrap">
      <el-row :gutter="20">
        <el-col :span="8"
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
    </div>
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
    cursor: pointer;
    transition: all 0.6s;
    &:hover{
      border: 1px solid $mintBlue;
    }
    .name {
      font-size: 24px;
      font-family: 'Lato';
      line-height: 28px;
    }
  }
}
</style>
