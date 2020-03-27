<template>
  <div>
    <span class="mr-2 overline light-green--text">{{ completed }}/{{ total }}</span>
    <div class="progress-container">
      <v-progress-linear
        :value="progress"
        rounded
        color="light-green"
        :background-opacity="0.25"
        height="8px"
      ></v-progress-linear>
    </div>
  </div>
</template>
<script>
import taskUtils from "@/taskUtils.js";

export default {
  props: {
    task: Object
  },
  computed: {
    subTasks() {
      return taskUtils.getLeafNodes(this.task);
    },
    completed() {
      return this.subTasks.filter(task => task.complete).length;
    },
    total() {
      return this.subTasks.length;
    },
    progress() {
      var percentComplete = (this.completed / this.total) * 100;
      return Math.round(percentComplete);
    }
  }
};
</script>
<style scoped>
.progress-container {
  width: 50px;
  display: inline-block;
}
</style>