<template>
  <div>
    <!-- INCOMPLETE -->
    <v-list dense v-if="hasIncompleteChildren">
      <task-list-item v-for="task in incompleteChildren" :key="task.id" :task="task"></task-list-item>
    </v-list>

    <v-divider v-if="showDivider"></v-divider>

    <!-- COMPLETE -->
    <v-list dense v-if="hasCompleteChildren">
      <v-list-group prepend-icon="mdi-playlist-check">
        <template v-slot:activator>
          <v-list-item-title>Completed</v-list-item-title>
        </template>
        <task-list-item v-for="task in completeChildren" :key="task.id" :task="task"></task-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
import TaskListItem from "@/components/task/TaskListItem";
import taskUtils from "@/taskUtils.js";

export default {
  components: {
    TaskListItem
  },
  props: {
    task: Object
  },
  computed: {
    completeChildren() {
      return taskUtils.getCompleteChildren(this.task);
    },
    incompleteChildren() {
      return taskUtils.getIncompleteChildren(this.task);
    },
    hasCompleteChildren() {
      return this.completeChildren.length > 0;
    },
    hasIncompleteChildren() {
      return this.incompleteChildren.length > 0;
    },
    showDivider() {
      return this.hasCompleteChildren && this.hasIncompleteChildren;
    }
  }
};
</script>