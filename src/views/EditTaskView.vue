<template>
  <v-container v-if="task">
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <task-breadcrumbs :id="id"></task-breadcrumbs>
        </v-card>

        <br />

        <v-card>
          <v-toolbar flat>
            <v-toolbar-title class="title">Task</v-toolbar-title>
          </v-toolbar>

          <v-divider></v-divider>

          <edit-task :task="task"></edit-task>
        </v-card>

        <br />

        <v-card>
          <v-toolbar flat class="mr-2">
            <v-toolbar-title class="title">Subtasks</v-toolbar-title>
            <v-spacer></v-spacer>
            <task-counter class="mr-2" :numTasks="children.length"></task-counter>
            <sub-tasks-menu :task="task"></sub-tasks-menu>
          </v-toolbar>

          <sub-task-progress :tasks="children"></sub-task-progress>

          <create-task class="pa-4" :parent-id="id" label="Add a subtask..."></create-task>

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