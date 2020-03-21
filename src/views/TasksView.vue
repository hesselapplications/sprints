<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <v-toolbar class="pr-2" flat color="grey lighten-4">
            <v-toolbar-title class="title">Tasks</v-toolbar-title>
            <v-spacer></v-spacer>
            <sub-tasks-menu></sub-tasks-menu>
          </v-toolbar>

          <v-divider></v-divider>

          <create-task class="pa-4" :parent-id="null" label="Add a task..."></create-task>
          
          <sub-task-progress v-if="tasks.length > 0" :tasks="tasks"></sub-task-progress>

          <tasks :tasks="tasks"></tasks>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CreateTask from "@/components/task/CreateTask";
import SubTasksMenu from "@/components/task/SubTasksMenu";
import SubTaskProgress from "@/components/task/SubTaskProgress";
import Tasks from "@/components/task/Tasks";
import { mapGetters } from "vuex";

export default {
  components: {
    CreateTask,
    SubTasksMenu,
    SubTaskProgress,
    Tasks
  },
  computed: {
    ...mapGetters(["getTaskChildren"]),
    tasks() {
      return this.getTaskChildren(null);
    }
  }
};
</script>