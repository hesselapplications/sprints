<template>
  <v-app>
    <!-- TOP NAV -->
    <top-nav v-if="$vuetify.breakpoint.lgAndUp" />

    <!-- CONTENT -->
    <v-content transition="slide-x-transition" class="grey lighten-2">
      <router-view :key="$route.fullPath" />
    </v-content>

    <!-- MESSAGES -->
    <v-snackbar v-model="snackbar" left :timeout="3000">
      {{ snackbarMessage }}
      <v-btn dark text @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <!-- BOTTOM NAV -->
    <bottom-nav v-if="user && $vuetify.breakpoint.mdAndDown"></bottom-nav>
  </v-app>
</template>
<script>
import TopNav from "@/components/nav/TopNav";
import BottomNav from "@/components/nav/BottomNav";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    TopNav,
    BottomNav
  },
  data() {
    return {
      snackbar: false,
      snackbarMessage: ""
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["unbindFirestore"])
  },
  watch: {
    $route(to) {
      document.title = to.name || "Subtasker";
    }
  },
  created() {
    this.$root.$on("showMessage", snackbarMessage => {
      this.snackbar = false;
      this.snackbarMessage = snackbarMessage;
      this.snackbar = true;
    });
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
