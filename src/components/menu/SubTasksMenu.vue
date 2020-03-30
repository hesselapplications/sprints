<template>
  <base-menu
    :title="task.name"
    :options="options"
    @delete-all="deleteTask(task)"
    @delete-completed="deleteCompleted(task)"
    @mark-all-complete="markAllComplete(true)"
    @mark-all-incomplete="markAllComplete(false)"
  >
    <template v-slot:title="{ title }">
      {{ title }}
      <task-counter class="ml-3" :numTasks="numSubTasks"></task-counter>
    </template>
  </base-menu>
</template>
<script>
import BaseMenu from "@/components/menu/BaseMenu";
import TaskCounter from "@/components/task/TaskCounter";
import taskUtils from "@/taskUtils.js";
import { mapActions } from "vuex";

export default {
  components: {
    BaseMenu,
    TaskCounter
  },
  props: {
    task: Object
  },
  data() {
    return {
      options: [
        {
          text: "Mark all complete",
          emit: "mark-all-complete",
          class: null
        },
        {
          text: "Mark all incomplete",
          emit: "mark-all-incomplete",
          class: null
        },
        // {
        //   text: "Add to sprint",
        //   emit: "add-to-sprint",
        //   class: null
        // },
        {
          text: "Delete completed",
          emit: "delete-completed",
          class: "red--text"
        },
        {
          text: "Delete all",
          emit: "delete-all",
          class: "red--text"
        }
      ]
    };
  },
  computed: {
    numSubTasks() {
      return taskUtils.getNumLeafNodes(this.task);
    }
  },
  methods: {
    ...mapActions(["deleteTask", "deleteCompleted", "markComplete"]),
    markAllComplete(complete) {
      var payload = {
        task: this.task,
        complete: complete
      };

      this.markComplete(payload)
    }
  }
};
</script>