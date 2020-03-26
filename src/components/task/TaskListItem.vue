<template>
  <v-list-item @click="goToTask">
    <v-list-item-action>
      <v-icon v-if="hasSubTasks" color="grey lighten-1">mdi-subdirectory-arrow-right</v-icon>
      <v-checkbox
        v-else
        @click.stop="toggleComplete(task.id)"
        v-model="task.complete"
        color="light-green"
      ></v-checkbox>
    </v-list-item-action>

    <v-list-item-content :class="classes">
      <v-list-item-title>{{task.name}}</v-list-item-title>
    </v-list-item-content>

    <v-list-item-action class="mr-4">
      <sub-task-progress v-if="hasSubTasks" :task="task"></sub-task-progress>
    </v-list-item-action>

    <v-list-item-action>
      <task-counter v-if="hasSubTasks" :numTasks="numSubTasks"></task-counter>
    </v-list-item-action>

    <v-list-item-action>
      <sub-tasks-menu v-if="hasSubTasks" :task="task"></sub-tasks-menu>
      <task-menu v-else :task="task"></task-menu>
    </v-list-item-action>
  </v-list-item>
</template>
<script>
import TaskCounter from "@/components/task/TaskCounter";
import SubTaskProgress from "@/components/task/SubTaskProgress";
import TaskMenu from "@/components/menu/TaskMenu";
import SubTasksMenu from "@/components/menu/SubTasksMenu";
import { mapMutations } from "vuex";
import taskUtils from "@/taskUtils.js";

export default {
  components: {
    TaskCounter,
    TaskMenu,
    SubTaskProgress,
    SubTasksMenu
  },
  props: {
    task: Object
  },
  computed: {
    numSubTasks() {
      return taskUtils.getNumLeafNodes(this.task);
    },
    hasSubTasks() {
      return this.numSubTasks > 0;
    },
    classes() {
      return {
        "complete": this.task.complete
      };
    }
  },
  methods: {
    ...mapMutations(["toggleComplete"]),
    goToTask() {
      this.$router.push(`/tasks/${this.task.id}`);
    }
  }
};
</script>
<style scoped>
.complete {
  color: #9e9e9e;
  text-decoration: line-through;
}
</style>