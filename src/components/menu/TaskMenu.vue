<template>
  <base-menu :title="task.name" :options="options" @delete-task="deleteTask"></base-menu>
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
    return {
      options: [
        // {
        //   text: "Add to sprint",
        //   emit: "add-to-sprint",
        //   class: null
        // },
        {
          text: "Delete",
          emit: "delete-task",
          class: "red--text"
        }
      ]
    }
  },
  methods: {
    ...mapActions(["deleteIds"]),
    deleteTask() {
      this.deleteIds([this.task.id]);
    }
  }
};
</script>