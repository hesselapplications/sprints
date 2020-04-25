<template>
  <div>
    <!-- RESULTS -->
    <v-treeview
      v-show="hasResults"
      ref="results"
      :search="search"
      :items="results"
      dense
      hoverable
      activatable
      @update:active="ids => $router.push(`/tasks/${ids[0]}`)"
    >
      <template v-slot:label="{ item }">
        <span v-html="highlight(item.name)" />
      </template>
    </v-treeview>

    <!-- NO RESULTS -->
    <empty-state
      v-show="!hasResults"
      icon="mdi-magnify"
      title="No results found"
      subtitle="Try a different query"
    ></empty-state>
  </div>
</template>
<script>
import EmptyState from "@/components/EmptyState";
import _ from "lodash";

export default {
  components: {
    EmptyState
  },
  props: {
    search: String,
    results: Array
  },
  computed: {
    searching() {
      return this.search != null && this.search.length > 0;
    },
    hasResults() {
      return this.searching && this.results.length > 0;
    }
  },
  watch: {
    results: {
      deep: true,
      handler() {
        // FIXME Doesn't open all when deleting chars from a search
        this.$refs.results.updateAll(true);
      }
    }
  },
  methods: {
    highlight(taskName) {
      var isMatch = _.includes(_.toLower(taskName), _.toLower(this.search));
      if (!isMatch) {
        return taskName;
      }

      return taskName.replace(
        new RegExp(this.search, "gi"),
        search => "<mark>" + search + "</mark>"
      );
    }
  }
};
</script>
<style scoped>
* >>> mark {
  background-color: #fff59d;
}
</style>