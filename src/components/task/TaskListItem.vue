<template>
  <v-list-item @click="goToTask">
    <v-list-item-action>
      <v-checkbox @click.stop="toggleComplete" v-model="task.complete" :disabled="hasChildren"></v-checkbox>
    </v-list-item-action>

    <v-list-item-content :class="classes">
      <v-list-item-title>
        {{task.name}}
      </v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <task-counter v-if="hasChildren" :numTasks="numChildren"></task-counter>
    </v-list-item-action>

    <v-list-item-action>
      <sub-tasks-menu v-if="hasChildren" :task="task"></sub-tasks-menu>
      <task-menu v-else :task="task"></task-menu>
    </v-list-item-action>
  </v-list-item>
</template>
<script>
import TaskCounter from "@/components/task/TaskCounter";
import TaskMenu from "@/components/task/TaskMenu";
import SubTasksMenu from "@/components/task/SubTasksMenu";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    TaskCounter,
    TaskMenu,
    SubTasksMenu
  },
  props: {
    task: Object
  },
  computed: {
    ...mapGetters(["getTaskNumChildren"]),
    numChildren() {
      return this.getTaskNumChildren(this.task.id);
    },
    hasChildren() {
      return this.numChildren > 0
    },
    classes() {
      return {
        complete: this.task.complete,
        "grey--text text--lighten-1": this.task.complete
      };
    }
  },
  methods: {
    ...mapMutations(["markIdsComplete"]),
    toggleComplete() {
      var ids = [this.task.id];
      var complete = !this.task.complete;
      this.markIdsComplete({ ids, complete });
    },
    goToTask() {
      this.$router.push(`/tasks/${this.task.id}`);
    }
  }
};
</script>
<style scoped>
.complete {
  text-decoration: line-through;
}
</style>