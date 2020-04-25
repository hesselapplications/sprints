<template>
  <div>
    <!-- INCOMPLETE -->
    <v-list v-if="hasIncompleteChildren" class="py-0" dense>
      <task-list-item v-for="task in incompleteChildren" :key="task.id" :task="task"></task-list-item>
    </v-list>
    <empty-state v-else class="pa-4" icon="mdi-sofa" title="All Done!" subtitle="Sit back and relax"></empty-state>

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
import EmptyState from "@/components/EmptyState";
import TaskListItem from "@/components/task/TaskListItem";
import taskUtils from "@/taskUtils.js";
import _ from "lodash";

export default {
  components: {
    EmptyState,
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