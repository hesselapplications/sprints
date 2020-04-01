<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <!-- SEARCH -->
          <search class="pa-4" v-model="search"></search>

          <v-divider></v-divider>

          <!-- RESULTS -->
          <v-treeview v-if="tasksLoaded" ref="results" class="py-4" :search="search" :items="taskTrees" open-on-click>
            <template v-slot:append="{ item }">
              <v-btn icon :to="`/tasks/${item.id}`" color="grey lighten-1">
                <v-icon>mdi-menu-right</v-icon>
              </v-btn>
            </template>
          </v-treeview>

          <!-- TASKS LOADING -->
          <loading v-else></loading>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Search from "@/components/Search";
import Loading from "@/components/Loading";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    Search,
    Loading
  },
  data() {
    return {
      search: null
    };
  },
  watch: {
    search(search) {
      var searching = search.length > 0;
      if (this.tasksLoaded) {
        this.$refs.results.updateAll(searching);
      }
    }
  },
  computed: {
    ...mapState(["tasksLoaded"]),
    ...mapGetters(["taskTrees"])
  }
};
</script>