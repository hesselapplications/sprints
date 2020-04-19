<template>
  <v-bottom-navigation shift grow background-color="primary" dark app>
    <v-btn v-for="(link, index) in links" :key="index" :to="link.to">
      <span>{{link.label}}</span>
      <v-icon>{{link.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
import nav from "@/mixins/nav.js";

export default {
  mixins: [nav]
};
</script>