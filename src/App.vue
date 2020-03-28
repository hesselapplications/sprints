<template>
  <v-app>
    <!-- NAVIGATION -->
    <app-navigation v-if="$vuetify.breakpoint.lgAndUp" />

    <!-- CONTENT -->
    <v-content transition="slide-x-transition" class="grey lighten-2">
      <v-container fluid class="app-container">
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
import { mapActions } from 'vuex'

export default {
  components: {
    AppNavigation,
    BottomNav
  },
  methods: {
    ...mapActions(["bindFirestore", "unbindFirestore"])
  },
  created() {
    this.bindFirestore();
  },
  beforeDestroy() {
    this.unbindFirestore();
  }
};
</script>
<style scoped>
.app-container {
  padding: 0px;
}
</style>
