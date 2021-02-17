<template>
  <div class="app to-do-list page-content-wrap">
    <el-row class="text-left f16 mb20 time-remain">Till the end of today: {{ hoursRemain }} </el-row>
    <el-row class="mb15 f24 title text-left">
      <el-col :span="22">
        <span class="pull-left">To dos :</span>
        <el-button class="pull-right" @click="clearAll()">Clear</el-button>
      </el-col>

    </el-row>
    <!--使用draggable组件-->
    <el-row>
      <el-col :span="22">
        <el-row class="mb10">
          <el-input v-model="toDoText"
                    autofocus
                    placeholder="Press ENTER or click '+' to add a new plan."
                    class="pd0 f16"
                    :class="needInput?'alert':''"
                    @keyup.enter.native="addToDo()"
          />
        </el-row>
        <el-row>
          <draggable v-model="toDoList"
                     chosen-class="chosen"
                     class="btn-group"
                     force-fallback="true"
                     group="people"
                     animation="300"
                     @start="onStart"
                     @end="onEnd"
          >
            <transition-group>
              <div v-for="(todo, index) in toDoList"
                   :key="todo.id"
                   class="mb10 item pd15 text-left f16"
              >
                <span class="check-box pull-left" @click="makeDone(todo.id)" />
                <span class="ml10 content">
                  {{ index }}.&nbsp;&nbsp;{{ todo.name }}
                </span>
                <span class="pull-right remove" @click="removeToDo(todo.id)">
                  <i class="el-icon-minus" />
                </span>
              </div>
            </transition-group>
          </draggable>
        </el-row>
      </el-col>
      <el-col :span="2">
        <el-row style="width: 100%;">
          <div class="add-todo pull-left ml20" @click="addToDo()">
            <i class="el-icon-circle-plus-outline f28" />
          </div>
        </el-row>
      </el-col>
    </el-row>
    <el-row v-if="doneList.length>0" class="mt30 mb15 f24 title text-left">Done :</el-row>
    <el-row>
      <el-col :span="22">
        <el-row>
          <draggable v-model="doneList"
                     chosen-class="chosen"
                     class="btn-group"
                     force-fallback="true"
                     group="people"
                     animation="300"
                     @start="onStart"
                     @end="onEnd"
          >
            <transition-group>
              <div v-for="(done, index) in doneList"
                   :key="done.id"
                   class="mb10 item pd15 text-left f16 done"
              >
                <span class="check-box" @click="makeUnDone(done.id)">
                  <i class="el-icon-check" />
                </span>
                <span class="ml10">
                  {{ index }} . {{ done.name }}
                </span>
              </div>
            </transition-group>
          </draggable>
        </el-row>
      </el-col>
      <el-col :span="2" />
    </el-row>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import moment from 'moment'
export default {
  components: {
    draggable
  },
  data() {
    return {
      drag: false,
      hoursRemain: moment.duration(moment().endOf('day') - moment()).hours(),
      workHoursRemain: moment.duration(moment().endOf('day') - moment()).hours(),
      needInput: false,
      toDoText: '',
      // 定义要被拖拽对象的数组
      toDoList: [],
      doneList: [],
      planIndex: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.hoursRemain = moment.duration(moment().endOf('day') - moment()).humanize()
      this.workHoursRemain = moment.duration(moment().hour(18).minute(0).second(0) - moment()).humanize()
    }, 1000)
  },
  methods: {
    addToDo() {
      if (this.toDoText.length > 0) {
        this.toDoList.push({
          people: 'cn',
          id: this.planIndex,
          name: this.toDoText
        })
        this.toDoText = ''
        this.planIndex += 1
      } else {
        this.needInput = true
      }
    },
    clearAll() {
      this.toDoList = []
      this.doneList = []
    },
    removeToDo(id) {
      const done = this.toDoList.find(todo => todo.id == id)
      const i = this.toDoList.indexOf(done)
      this.toDoList.splice(i, 1)[0]
    },
    makeDone(id) {
      const done = this.toDoList.find(todo => todo.id == id)
      const i = this.toDoList.indexOf(done)
      this.doneList.push(this.toDoList.splice(i, 1)[0])
    },
    makeUnDone(id) {
      const undone = this.doneList.find(todo => todo.id == id)
      const i = this.doneList.indexOf(undone)
      this.toDoList.push(this.doneList.splice(i, 1)[0])
    },
    onStart() {
      this.drag = true // 开始拖拽事件
    },
    onEnd() {
      this.drag = false // 拖拽结束事件
    }
  }
}
</script>
<style lang="scss" scoped>
.to-do-list {
  .add-todo, .remove { cursor: pointer; }
  .el-icon-circle-plus-outline {line-height: 50px;}
  .item {
    align-items: center;
    border: solid 1px #eee;
    cursor: move;
    display: flex;

    &.done {
      background: black;
      color: #80ffff;
    }
    .content {
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }
  }
  /*选中样式*/
  .chosen {
    border: solid 2px #80ffff !important;
  }
  .check-box {
    border: 1px solid #eee;
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
}
</style>
