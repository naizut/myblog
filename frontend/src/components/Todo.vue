<template>
  <div class="todo-list">
    <el-row v-for="todo in toDoList" :key="todo.id" class="todo">
      <el-input v-model="todo.text" />
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toDoList: []
    }
  }
}
</script>
