<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          text
          class="text-capitalize"
          :to="link.to"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.label}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
<script>
import nav from "@/mixins/nav.js";

export default {
  mixins: [nav]
};
</script>