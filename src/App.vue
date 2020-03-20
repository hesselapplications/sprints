<template>
  <v-app>
    <!-- NAVIGATION -->
    <app-navigation />

    <!-- CONTENT -->
    <v-content transition="slide-x-transition" class="grey lighten-2">
      <v-container fluid>
        <v-row justify="center" no-gutters>
          <v-col>
            <router-view :key="$route.fullPath" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import AppNavigation from "@/components/AppNavigation";

export default {
  components: {
    AppNavigation
  }
};
</script>
