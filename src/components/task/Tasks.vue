<template>
  <v-list>
    <task-list-item v-for="(task, index) in tasks" :key="index" :task="task"></task-list-item>
  </v-list>
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