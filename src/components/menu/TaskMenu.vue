<template>
  <base-menu
    :title="task.name"
    :options="options"
    @delete-task="deleteTask(task)"
    @add-to-sprint="addToSprint(task)"
    @remove-from-sprint="removeFromSprint(task)"
  ></base-menu>
</template>
<script>
import BaseMenu from "@/components/menu/BaseMenu";
import { mapActions } from "vuex";

export default {
  components: {
    BaseMenu
  },
  props: {
    task: Object
  },
  data() {
    return {};
  },
  computed: {
    options() {
      var options = [];

      if (this.task.inSprint) {
        options.push({
          text: "Remove from sprint",
          emit: "remove-from-sprint",
          class: null
        });
      } else {
        options.push({
          text: "Add to sprint",
          emit: "add-to-sprint",
          class: null
        });
      }

      options.push({
        text: "Delete",
        emit: "delete-task",
        class: "red--text"
      });

      return options;
    }
  },
  methods: {
    ...mapActions(["deleteTask", "addToSprint", "removeFromSprint"])
  }
};
</script>