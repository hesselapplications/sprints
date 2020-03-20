<template>
    <v-progress-linear
      :value="progress"
      color="light-green"
      :background-opacity="0.25"
    ></v-progress-linear>
</template>
<script>

export default {
  props: {
    tasks: Array
  },
  computed: {
    progress() {
      var total = this.tasks.length;
      var completed = this.tasks.filter(task => task.complete).length;
      var percentComplete = (completed / total) * 100;
      return Math.round(percentComplete);
    }
  }
};
</script>