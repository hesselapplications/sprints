<template>
  <base-menu
    :title="task.name"
    :options="options"
    @delete-all="deleteTask(task)"
    @delete-completed="deleteCompleted(task)"
    @mark-all-complete="markAllComplete(true)"
    @mark-all-incomplete="markAllComplete(false)"
  ></base-menu>
</template>
<script>
import BaseMenu from "@/components/menu/BaseMenu";
import taskUtils from "@/taskUtils.js";
import { mapActions } from "vuex";

export default {
  components: {
    BaseMenu
  },
  props: {
    task: Object
  },
  computed: {
    numSubTasks() {
      return taskUtils.getNumLeafNodes(this.task);
    },
    options() {
      var options = [];
      if (taskUtils.hasIncompleteChildren(this.task)) {
        options.push({
          text: "Mark all complete",
          emit: "mark-all-complete",
          class: null
        });
      }

      if (taskUtils.hasCompleteChildren(this.task)) {
        options.push({
          text: "Mark all incomplete",
          emit: "mark-all-incomplete",
          class: null
        });

        options.push({
          text: "Delete completed",
          emit: "delete-completed",
          class: "red--text"
        });
      }

      if (taskUtils.hasChildren(this.task)) {
        options.push({
          text: "Delete all",
          emit: "delete-all",
          class: "red--text"
        });
      }

      // {
      //   text: "Add to sprint",
      //   emit: "add-to-sprint",
      //   class: null
      // },

      return options;
    }
  },
  methods: {
    ...mapActions(["deleteTask", "deleteCompleted", "markComplete"]),
    markAllComplete(complete) {
      var payload = {
        task: this.task,
        complete: complete
      };

      this.markComplete(payload);
    }
  }
};
</script>