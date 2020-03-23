<template>
  <v-menu left bottom>
    <template v-slot:activator="{ on }">
      <v-btn small icon v-on="on">
        <v-icon color="grey lighten-1">mdi-dots-horizontal</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <!-- ADD TO SPRINT -->
      <!-- <v-list-item @click="() => {}">
        <v-list-item-title>Add to sprint</v-list-item-title>
      </v-list-item> -->

      <!-- DELETE -->
      <v-list-item @click="deleteTask">
        <v-list-item-title class="red--text">Delete</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: {
    task: Object
  },
  methods: {
    ...mapMutations(["deleteIds"]),
    deleteTask() {
      this.deleteIds([this.task.id]);
    }
  }
};
</script>