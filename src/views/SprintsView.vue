<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <!-- TOOLBAR -->
          <v-toolbar class="pr-3" flat color="grey lighten-4">
            <v-toolbar-title class="title">Sprint Tasks</v-toolbar-title>
            <v-spacer></v-spacer>

            <sub-task-progress class="mr-4" :task="rootTask"></sub-task-progress>
            <sub-tasks-menu :task="rootTask"></sub-tasks-menu>
          </v-toolbar>

          <v-divider></v-divider>

          <!-- TASK LIST -->
          <sub-task-list v-if="tasksLoaded" :task="rootTask"></sub-task-list>

          <!-- TASKS LOADING -->
          <loading v-else></loading>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SubTasksMenu from "@/components/menu/SubTasksMenu";
import SubTaskProgress from "@/components/task/SubTaskProgress";
import SubTaskList from "@/components/task/SubTaskList";
import Loading from "@/components/Loading";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    SubTasksMenu,
    SubTaskProgress,
    SubTaskList,
    Loading
  },
  computed: {
    ...mapState(["tasksLoaded"]),
    ...mapGetters(["sprintTrees"]),
    tasks() {
      return this.sprintTrees;
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