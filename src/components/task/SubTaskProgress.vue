<template>
    <v-progress-linear
      :value="progress"
      color="light-green"
      :background-opacity="0.25"
    ></v-progress-linear>
</template>
<script>
import taskUtils from "@/taskUtils.js"

export default {
  props: {
    task: Object
  },
  computed: {
    subTasks() {
      return taskUtils.getLeafNodes(this.task);
    },
    progress() {
      var total = this.subTasks.length;
      var completed = this.subTasks.filter(task => task.complete).length;
      var percentComplete = (completed / total) * 100;
      return Math.round(percentComplete);
    }
  }
};
</script>