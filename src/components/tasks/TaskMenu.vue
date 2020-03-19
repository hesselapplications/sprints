<template>
  <v-menu left bottom>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon small>mdi-dots-horizontal</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <!-- ADD SUBTASK -->
      <v-list-item @click="() => {}">
        <v-list-item-title>Add subtask</v-list-item-title>
      </v-list-item>

      <!-- MARK COMPLETE -->
      <template v-if="hasChildren(item)">
        <v-list-item v-if="hasIncompleteChildren" @click="markAllComplete(true)">
          <v-list-item-title>Mark all complete</v-list-item-title>
        </v-list-item>
        <v-list-item v-else @click="markAllComplete(false)">
          <v-list-item-title>Mark all incomplete</v-list-item-title>
        </v-list-item>
      </template>

      <!-- ADD TO SPRINT -->
      <v-list-item @click="() => {}">
        <v-list-item-title>Add to sprint</v-list-item-title>
      </v-list-item>

      <!-- DELETE -->
      <v-list-item @click="deleteItem">
        <v-list-item-title class="red--text">Delete</v-list-item-title>
      </v-list-item>

      <!-- DELETE COMPLETE -->
      <v-list-item v-if="hasCompletedChildren" @click="deleteItem">
        <v-list-item-title class="red--text">Delete completed</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import itemUtils from "@/mixins/itemUtils.js";
import { mapMutations } from "vuex";

export default {
  mixins: [itemUtils],
  props: {
    item: Object
  },
  computed: {
    hasCompletedChildren() {
      return this.getLeafChildren(this.item).some(child => child.complete);
    },
    hasIncompleteChildren() {
      return this.getLeafChildren(this.item).some(child => !child.complete);
    }
  },
  methods: {
    ...mapMutations(["markIdsComplete", "deleteIds"]),

    deleteItem() {
      var childIds = this.getAllChildren(this.item).map(item => item.id);
      var allIds = [this.item.id].concat(childIds);
      this.deleteIds(allIds);
    },

    markAllComplete(complete) {
      var ids = this.getLeafChildren(this.item).map(child => child.id);
      this.markIdsComplete({ ids, complete });
    }
  }
};
</script>