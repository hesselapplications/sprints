<template>
  <div>
    <!-- INCOMPLETE -->
    <v-list v-if="hasIncompleteChildren" class="py-0" dense>
      <task-list-item v-for="task in incompleteChildren" :key="task.id" :task="task"></task-list-item>
    </v-list>
    <div v-else class="pa-4 text-center">
      <v-avatar color="primary lighten-5" size="80px">
        <v-icon color="primary lighten-1" size="48px">mdi-sofa</v-icon>
      </v-avatar>
      <div class="pt-2">
        <div class="title">All done!</div>
        <div class="caption">Sit back and relax</div>
      </div>
    </div>

    <v-divider></v-divider>

    <!-- COMPLETE -->
    <v-list v-if="hasCompleteChildren" class="py-0" dense>
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
import _ from "lodash";

export default {
  components: {
    TaskListItem
  },
  props: {
    task: Object
  },
  computed: {
    completeChildren() {
      return this.sort(
        taskUtils.getChildren(this.task).filter(task => task.complete)
      );
    },
    incompleteChildren() {
      return this.sort(
        taskUtils.getChildren(this.task).filter(task => !task.complete)
      );
    },
    hasCompleteChildren() {
      return this.completeChildren.length > 0;
    },
    hasIncompleteChildren() {
      return this.incompleteChildren.length > 0;
    }
  },
  methods: {
    sort(tasks) {
      return _.sortBy(tasks, task => !taskUtils.hasChildren(task));
    }
  }
};
</script>