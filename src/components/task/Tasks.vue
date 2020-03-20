<template>
  <!-- <v-list dense>
    
  </v-list> -->
  <v-slide-y-transition group content-tag="v-list">
    <task-list-item v-for="(task, index) in tasks" :key="index" :task="task"></task-list-item>
  </v-slide-y-transition>
</template>

<script>
// import { VList } from "vuetify/lib";
import TaskListItem from "@/components/task/TaskListItem";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // VList,
    TaskListItem
  },
  props: {
    tasks: Array
  }
};
</script>