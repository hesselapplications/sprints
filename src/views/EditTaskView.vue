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
          <!-- TOOLBAR -->
          <v-toolbar class="pr-3" flat color="grey lighten-4">
            <v-toolbar-title class="title">Subtasks</v-toolbar-title>
            <v-spacer></v-spacer>

            <sub-task-progress class="mr-4" :task="task"></sub-task-progress>
            <sub-tasks-menu :task="task"></sub-tasks-menu>
          </v-toolbar>

          <v-divider></v-divider>

          <!-- CREATE TASK -->
          <create-task class="pa-4" :parent-id="id" label="Add a subtask..."></create-task>

          <v-divider></v-divider>

          <!-- TASK LIST -->
          <sub-task-list v-if="tasksLoaded" :task="task"></sub-task-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TaskBreadcrumbs from "@/components/task/TaskBreadcrumbs";
import EditTask from "@/components/task/EditTask";
import CreateTask from "@/components/task/CreateTask";
import SubTaskProgress from "@/components/task/SubTaskProgress";
import SubTaskList from "@/components/task/SubTaskList";
import TaskMenu from "@/components/menu/TaskMenu";
import SubTasksMenu from "@/components/menu/SubTasksMenu";
import { mapState, mapGetters } from "vuex";
import taskUtils from "@/taskUtils.js";

export default {
  components: {
    TaskBreadcrumbs,
    EditTask,
    CreateTask,
    SubTaskProgress,
    SubTaskList,
    TaskMenu,
    SubTasksMenu
  },
  props: {
    id: String
  },
  computed: {
    ...mapState(["tasksLoaded"]),
    ...mapGetters(["getTaskWithId"]),
    task() {
      return this.getTaskWithId(this.id);
    },
    numSubTasks() {
      return taskUtils.getNumLeafNodes(this.task);
    }
  },
  watch: {
    tasksLoaded(tasksLoaded) {
      if (tasksLoaded && this.task == null) {
        this.$router.push("/tasks");
      }
    }
  }
};
</script>