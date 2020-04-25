<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <!-- SEARCH -->
          <search-box class="pa-4" v-model="search"></search-box>

          <!-- RESULTS -->
          <search-results
            v-if="tasksLoaded"
            v-show="search"
            class="pb-4"
            :search="search"
            :results="results"
          ></search-results>

          <!-- TASKS LOADING -->
          <loading v-else></loading>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Loading from "@/components/Loading";
import SearchBox from "@/components/search/SearchBox";
import SearchResults from "@/components/search/SearchResults";
import { mapState, mapGetters } from "vuex";
import _ from "lodash";

export default {
  components: {
    Loading,
    SearchBox,
    SearchResults
  },
  data() {
    return {
      search: null
    };
  },
  computed: {
    ...mapState(["tasksLoaded"]),
    ...mapGetters(["taskTrees"]),
    nullSafeSearch() {
      return this.search || "";
    },
    results() {
      return _.cloneDeep(this.taskTrees).filter(this.isNestedMatch);
    }
  },
  methods: {
    isNestedMatch(task) {
      task.children = task.children || [];
      task.children = task.children.filter(this.isNestedMatch);

      var isMatch = _.includes(_.toLower(task.name), _.toLower(this.search));
      var hasMatchingChildren = task.children.length > 0;
      return isMatch || hasMatchingChildren;
    }
  }
};
</script>