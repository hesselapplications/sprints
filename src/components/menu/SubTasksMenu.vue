<template>
  <base-menu :title="task.name" :options="options" @delete-all="deleteAll"></base-menu>
</template>
<script>
import BaseMenu from "@/components/menu/BaseMenu";
import taskUtils from "@/taskUtils.js"
import { mapMutations } from "vuex";

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
    }
  },
  methods: {
    ...mapMutations(["deleteIds"]),
    deleteAll() {
      var ids = taskUtils.flattenTree(this.task).map(task => task.id);
      this.deleteIds(ids);
    }
  }
};
</script>