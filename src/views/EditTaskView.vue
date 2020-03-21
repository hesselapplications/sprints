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
          <v-toolbar flat color="grey lighten-4">
            <v-toolbar-title class="title">Task</v-toolbar-title>
          </v-toolbar>

          <v-divider></v-divider>

          <edit-task :task="task"></edit-task>
        </v-card>
      </v-col>

      <!-- SUBTASKS -->
      <v-col lg="6" cols="12">
        <v-card>
          <v-toolbar flat class="pr-2" color="grey lighten-4">
            <v-toolbar-title class="title">Subtasks</v-toolbar-title>
            <v-spacer></v-spacer>
            <task-counter class="mr-2" :numTasks="children.length"></task-counter>
            <sub-tasks-menu :task="task"></sub-tasks-menu>
          </v-toolbar>

          <v-divider></v-divider>

          <create-task class="pa-4" :parent-id="id" label="Add a subtask..."></create-task>
          
          <sub-task-progress v-if="children.length > 0" :tasks="children"></sub-task-progress>

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
import SubTasksMenu from "@/components/task/SubTasksMenu";
import { mapGetters } from "vuex";

export default {
  components: {
    TaskCounter,
    TaskBreadcrumbs,
    EditTask,
    CreateTask,
    SubTaskProgress,
    Tasks,
    SubTasksMenu
  },
  props: {
    id: String
  },
  computed: {
    ...mapGetters(["getTaskWithId", "getTaskChildren"]),
    task() {
      return this.getTaskWithId(this.id);
    },
    children() {
      return this.getTaskChildren(this.id);
    }
  },
  created() {
    if (this.task == null) {
      this.$router.push("/tasks");
    }
  }
};
</script>