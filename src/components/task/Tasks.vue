<template>
  <v-slide-y-transition
    group
    tag="div"
    class="v-list v-sheet v-sheet--tile theme--light v-list--dense"
  >
    <task-list-item v-for="(task, index) in tasks" :key="index" :task="task"></task-list-item>
  </v-slide-y-transition>
</template>

<script>
import TaskListItem from "@/components/task/TaskListItem";

export default {
  components: {
    TaskListItem
  },
  props: {
    tasks: Array
  }
};
</script>