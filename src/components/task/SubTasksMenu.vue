<template>
  <v-menu left bottom>
    <template v-slot:activator="{ on }">
      <v-btn small icon v-on="on">
        <v-icon color="grey lighten-1">mdi-dots-horizontal</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <!-- MARK ALL COMPLETE -->
      <v-list-item @click="() => {}">
        <v-list-item-title>Mark all complete</v-list-item-title>
      </v-list-item>

      <!-- MARK ALL INCOMPLETE -->
      <v-list-item @click="() => {}">
        <v-list-item-title>Mark all incomplete</v-list-item-title>
      </v-list-item>

      <!-- ADD ALL TO SPRINT -->
      <!-- <v-list-item @click="() => {}">
        <v-list-item-title>Add all to sprint</v-list-item-title>
      </v-list-item> -->

      <!-- DELETE ALL -->
      <v-list-item @click="deleteAll">
        <v-list-item-title class="red--text">Delete all</v-list-item-title>
      </v-list-item>

      <!-- DELETE COMPLETE -->
      <v-list-item @click="() => {}">
        <v-list-item-title class="red--text">Delete completed</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import taskUtils from "@/taskUtils.js"
import { mapMutations } from "vuex";

export default {
  props: {
    task: Object
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