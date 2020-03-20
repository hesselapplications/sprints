<template>
  <v-menu left bottom>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <!-- ADD TO SPRINT -->
      <!-- <v-list-item @click="() => {}">
        <v-list-item-title>Add to sprint</v-list-item-title>
      </v-list-item> -->

      <!-- DELETE -->
      <v-list-item @click="() => {}">
        <v-list-item-title class="red--text">Delete</v-list-item-title>
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