<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <v-toolbar class="pr-3" flat color="grey lighten-4">
            <v-toolbar-title class="title">Tasks</v-toolbar-title>
            <v-spacer></v-spacer>

            <sub-task-progress class="mr-4" :task="rootTask"></sub-task-progress>
            <sub-tasks-menu :task="rootTask"></sub-tasks-menu>
          </v-toolbar>

          <v-divider></v-divider>

          <create-task class="pa-4" :parent-id="null" label="Add a task..."></create-task>

          <v-divider></v-divider>
          <sub-task-list :task="rootTask"></sub-task-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CreateTask from "@/components/task/CreateTask";
import SubTasksMenu from "@/components/menu/SubTasksMenu";
import SubTaskProgress from "@/components/task/SubTaskProgress";
import SubTaskList from "@/components/task/SubTaskList";
import { mapGetters } from "vuex";

export default {
  components: {
    CreateTask,
    SubTasksMenu,
    SubTaskProgress,
    SubTaskList
  },
  computed: {
    ...mapGetters(["taskTrees"]),
    tasks() {
      return this.taskTrees;
    },
    rootTask() {
      return {
        name: "All Tasks",
        children: this.tasks
      };
    }
  }
};
</script>