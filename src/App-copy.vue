<template>
  <div id="app-copy">
    <input type="text" v-model="newTask" @keyup.enter="addTask()" />
    <button :disabled="!newTask ? true : false" @click="addTask()">
      Add Task
    </button>
    <ul>
      <li v-for="(task, index) of taskList" :key="index">
        <input type="checkbox" v-model="task.isDone" />
        <input
          type="text"
          :class="{ 'strike-through': task.isDone }"
          v-model="task.name"
        />
      </li>
    </ul>
    <div>
      <span>{{ `${countRemainTasks} item left` }}</span>
      <button @click="doneAllTask()">
        <span>Done All</span>
      </button>
      <button @click="uncheckedAllTask()">
        <span>Unchecked All</span>
      </button>
      <button @click="reverseAllTask()">
        <span>Reverse</span>
      </button>
      <button @click="clearTaskList()">
        <span>Clear</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      taskList: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.taskList.push({
          name: this.newTask,
          isDone: false,
        });
      }
      this.newTask = "";
    },
    doneAllTask() {
      for (let task of this.taskList) {
        task.isDone = true;
      }
    },
    uncheckedAllTask() {
      for (let task of this.taskList) {
        task.isDone = false;
      }
    },
    reverseAllTask() {
      for (let task of this.taskList) {
        task.isDone = !task.isDone;
      }
    },
    clearTaskList() {
      this.taskList = [];
    },
  },
  computed: {
    countRemainTasks: function () {
      return this.taskList.filter((task) => !task.isDone).length;
    },
  },
};
</script>

<style scoped>
div li .strike-through {
  text-decoration: line-through;
}
</style>
