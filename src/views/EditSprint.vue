<template>
  <v-container>
    <v-row>
      <!-- BACKLOG -->
      <v-col cols="6">
        <v-card>
          <v-card-title>Backlog</v-card-title>
          <v-divider></v-divider>
          <v-treeview
            dense
            selectable
            open-all
            v-model="selectedIds"
            selected-color="primary"
            :items="items"
            open-on-click
            rounded
          ></v-treeview>
        </v-card>
      </v-col>

      <!-- CURRENT SPRINT -->
      <v-col cols="6">
        <v-card>
          <v-card-title>Current Sprint</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-treeview
              ref="currentSprint"
              open-all
              dense
              :items="selectedItems"
              open-on-click
              rounded
            ></v-treeview>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showComplete: true,
      selectedIds: []
    };
  },
  watch: {
    selectedItems() {
      this.$refs.currentSprint.updateAll(true);
    }
  },
  computed: {
    ...mapGetters(["getItems", "getSubTree"]),
    items() {
      var excludeComplete = true;
      return this.getItems(excludeComplete);
    },
    selectedItems() {
      return this.getSubTree(this.selectedIds);
    }
  }
};
</script>