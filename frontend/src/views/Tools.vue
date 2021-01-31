<template>
  <el-container class="my-tools">
    <el-main class="pl0">
      <el-row :gutter="20">
        <el-col :span="12">
          <Todo />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import Todo from '@/components/Todo'
export default {
  components: {
    Todo
  }
}
</script>
<style lang="scss" scoped>

</style>
