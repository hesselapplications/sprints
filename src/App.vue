<template>
  <v-app>
    <!-- TOP NAV -->
    <top-nav v-if="$vuetify.breakpoint.lgAndUp" />

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

    <!-- BOTTOM NAV -->
    <bottom-nav v-if="$vuetify.breakpoint.mdAndDown"></bottom-nav>
  </v-app>
</template>
<script>
import TopNav from "@/components/nav/TopNav";
import BottomNav from "@/components/nav/BottomNav";
import { mapActions } from 'vuex'

export default {
  components: {
    TopNav,
    BottomNav
  },
  methods: {
    ...mapActions(["bindFirestore", "unbindFirestore"])
  },
  watch: {
    '$route' (to) {
      document.title = to.name || 'Subtasker';
    }
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
