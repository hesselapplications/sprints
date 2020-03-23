<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <v-toolbar class="pr-3" flat color="grey lighten-4">
            <v-toolbar-title class="title">Tasks</v-toolbar-title>
            <v-spacer></v-spacer>
            <task-counter class="mr-4" :numTasks="numSubTasks"></task-counter>
            <sub-tasks-menu :task="rootTask"></sub-tasks-menu>
          </v-toolbar>

          <v-divider></v-divider>

          <create-task class="pa-4" :parent-id="null" label="Add a task..."></create-task>
          
          <sub-task-progress :task="rootTask"></sub-task-progress>

          <tasks :tasks="tasks"></tasks>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CreateTask from "@/components/task/CreateTask";
import SubTasksMenu from "@/components/menu/SubTasksMenu";
import SubTaskProgress from "@/components/task/SubTaskProgress";
import TaskCounter from "@/components/task/TaskCounter";
import Tasks from "@/components/task/Tasks";
import { mapGetters } from "vuex";
import taskUtils from "@/taskUtils.js"

export default {
  components: {
    CreateTask,
    SubTasksMenu,
    SubTaskProgress,
    TaskCounter,
    Tasks
  },
  computed: {
    ...mapGetters(["taskTrees"]),
    tasks() {
      return this.taskTrees;
    },
    rootTask() {
      return {
        children: this.tasks
      };
    },
    numSubTasks() {
      return taskUtils.getNumLeafNodes(this.rootTask);
    }
  }
};
</script>