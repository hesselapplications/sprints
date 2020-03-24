<template>
  <v-app>
    <!-- NAVIGATION -->
    <app-navigation v-if="$vuetify.breakpoint.lgAndUp" />

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

    <bottom-nav v-if="$vuetify.breakpoint.mdAndDown"></bottom-nav>
  </v-app>
</template>
<script>
import AppNavigation from "@/components/AppNavigation";
import BottomNav from "@/components/BottomNav";

export default {
  components: {
    AppNavigation,
    BottomNav
  }
};
</script>
