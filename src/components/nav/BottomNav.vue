<template>
  <v-bottom-navigation shift grow background-color="primary" dark app>
    <v-btn to="/tasks">
      <span>Tasks</span>
      <v-icon>mdi-playlist-check</v-icon>
    </v-btn>

    <v-btn to="/search">
      <span>Search</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn to="/sprints">
      <span>Sprint</span>
      <v-icon>mdi-run-fast</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {};
</script>