<template>
  <v-container v-if="task">
    <v-row justify="center">
      <!-- BREADCRUMBS -->
      <v-col cols="12">
        <v-card color="grey lighten-4">
          <task-breadcrumbs :id="id"></task-breadcrumbs>
        </v-card>
      </v-col>

      <v-col lg="6" cols="12">
        <!-- TASK -->
        <v-card>
          <v-toolbar class="pr-3" flat color="grey lighten-4">
            <v-toolbar-title class="title">Task</v-toolbar-title>
            <v-spacer></v-spacer>
            <task-menu :task="task"></task-menu>
          </v-toolbar>

          <v-divider></v-divider>

          <edit-task :task="task"></edit-task>
        </v-card>
      </v-col>

      <!-- SUBTASKS -->
      <v-col lg="6" cols="12">
        <v-card>
          <v-toolbar class="pr-3" flat color="grey lighten-4">
            <v-toolbar-title class="title">Subtasks</v-toolbar-title>
            <v-spacer></v-spacer>
            <task-counter class="mr-4" :numTasks="numSubTasks"></task-counter>
            <sub-tasks-menu :task="task"></sub-tasks-menu>
          </v-toolbar>

          <v-divider></v-divider>

          <create-task class="pa-4" :parent-id="id" label="Add a subtask..."></create-task>

          <sub-task-progress :task="task"></sub-task-progress>

          <tasks :tasks="children"></tasks>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TaskCounter from "@/components/task/TaskCounter";
import TaskBreadcrumbs from "@/components/task/TaskBreadcrumbs";
import EditTask from "@/components/task/EditTask";
import CreateTask from "@/components/task/CreateTask";
import SubTaskProgress from "@/components/task/SubTaskProgress";
import Tasks from "@/components/task/Tasks";
import TaskMenu from "@/components/menu/TaskMenu";
import SubTasksMenu from "@/components/menu/SubTasksMenu";
import { mapGetters } from "vuex";
import taskUtils from "@/taskUtils.js";

export default {
  components: {
    TaskCounter,
    TaskBreadcrumbs,
    EditTask,
    CreateTask,
    SubTaskProgress,
    Tasks,
    TaskMenu,
    SubTasksMenu
  },
  props: {
    id: String
  },
  computed: {
    ...mapGetters(["getTaskWithId"]),
    task() {
      return this.getTaskWithId(this.id);
    },
    children() {
      return taskUtils.getChildren(this.task);
    },
    numSubTasks() {
      return taskUtils.getNumLeafNodes(this.task);
    }
  },
  created() {
    if (this.task == null) {
      this.$router.push("/tasks");
    }
  }
};
</script>