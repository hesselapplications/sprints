<template>
  <v-menu left bottom>
    <template v-slot:activator="{ on }">
      <v-btn small icon v-on="on">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <!-- MARK ALL SUBTASKS COMPLETE -->
      <v-list-item @click="() => {}">
        <v-list-item-title>Mark all complete</v-list-item-title>
      </v-list-item>

      <!-- MARK ALL SUBTASKS INCOMPLETE -->
      <v-list-item @click="() => {}">
        <v-list-item-title>Mark all incomplete</v-list-item-title>
      </v-list-item>

      <!-- ADD TO SPRINT -->
      <v-list-item @click="() => {}">
        <v-list-item-title>Add to sprint</v-list-item-title>
      </v-list-item>

      <!-- DELETE -->
      <v-list-item @click="() => {}">
        <v-list-item-title class="red--text">Delete</v-list-item-title>
      </v-list-item>

      <!-- DELETE COMPLETE -->
      <v-list-item @click="() => {}">
        <v-list-item-title class="red--text">Delete completed</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  props: {
    task: Object
  }
};
</script>