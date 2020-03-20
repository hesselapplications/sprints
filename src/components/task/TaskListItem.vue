<template>
  <v-list-item @click="goToTask">
    <v-list-item-action>
      <v-chip small v-if="numChildren > 0" color="primary">{{numChildren}}</v-chip>
      <v-checkbox v-else @click.stop="toggleComplete" v-model="task.complete"></v-checkbox>
    </v-list-item-action>

    <v-list-item-content :class="classes">
      <v-list-item-title>{{task.name}}</v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <task-menu :task="task"></task-menu>
    </v-list-item-action>
  </v-list-item>
</template>
<script>
import TaskMenu from "@/components/task/TaskMenu";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { TaskMenu },
  props: {
    task: Object
  },
  computed: {
    ...mapGetters(["getTaskNumChildren"]),
    numChildren() {
        return this.getTaskNumChildren(this.task.id);
    },
    classes() {
      return {
        "complete": this.task.complete,
        "grey--text text--lighten-1": this.task.complete
      }
    }
  },
  methods: {
    ...mapMutations(["markIdsComplete"]),
    toggleComplete() {
      var ids = [this.task.id];
      var complete = !this.task.complete;
      this.markIdsComplete({ids, complete});
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