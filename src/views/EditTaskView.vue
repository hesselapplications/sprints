<template>
  <v-container>
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
          <v-toolbar flat>
            <v-toolbar-title class="title">Subtasks</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn small outlined color="primary">
              <v-icon left>mdi-plus</v-icon>Task
            </v-btn>
          </v-toolbar>

          <v-divider></v-divider>

          <tasks :tasks="children"></tasks>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TaskBreadcrumbs from "@/components/task/TaskBreadcrumbs";
import EditTask from "@/components/task/EditTask";
import Tasks from "@/components/task/Tasks";
import { mapGetters } from "vuex";

export default {
  components: {
    TaskBreadcrumbs,
    EditTask,
    Tasks
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
  }
};
</script>