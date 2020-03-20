<template>
  <v-slide-group class="mx-4">
    <v-breadcrumbs class="px-0" :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </v-slide-group>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    id: String
  },
  computed: {
    ...mapGetters(["getTaskPath"]),
    breadcrumbs() {
      var root = {
        text: "All Tasks",
        to: "/"
      };

      var breadcrumbs = this.getTaskPath(this.id).map(task => ({
        text: task.name,
        to: `/tasks/${task.id}`
      }));

      breadcrumbs.unshift(root);
      return breadcrumbs;
    }
  }
};
</script>