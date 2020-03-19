<template>
  <div>
    <v-treeview :search="search" dense selected-color="primary" :items="items" open-on-click>
      <!-- PREPREND -->
      <template v-slot:prepend="{item}">
        <v-btn class="subtask" v-if="!hasChildren(item)" icon @click.stop="toggleComplete(item)">
          <v-icon small :color="item.complete ? 'light-green' : 'grey'">mdi-check-bold</v-icon>
        </v-btn>
        <v-chip
          v-else
          dark
          x-small
          class="px-2"
          disabled
          color="primary"
        >{{getLeafChildren(item).length}}</v-chip>
      </template>

      <!-- LABEL -->
      <template v-slot:label="{item}">
        <div
          :class="{'complete': item.complete, 'task': true}"
          @click.stop="edit(item)"
        >{{item.name}}</div>
      </template>

      <!-- APPEND -->
      <template v-slot:append="{item}">
        <sub-task-progress v-if="hasChildren(item)" class="mr-2" :item="item"></sub-task-progress>
        <task-menu :item="item"></task-menu>
      </template>
    </v-treeview>

    <edit-task-dialog v-model="editItem" @save="saveItem"></edit-task-dialog>
  </div>
</template>
<script>
import itemUtils from "@/mixins/itemUtils.js";
import TaskMenu from "@/components/tasks/TaskMenu";
import EditTaskDialog from "@/components/EditTaskDialog";
import SubTaskProgress from "@/components/SubTaskProgress";
import _ from "lodash";
import { mapMutations } from "vuex";

export default {
  mixins: [itemUtils],
  components: {
    TaskMenu,
    EditTaskDialog,
    SubTaskProgress
  },
  props: {
    search: String,
    items: Array
  },
  data() {
    return {
      editItem: null
    };
  },
  methods: {
    ...mapMutations(["saveItem", "markIdsComplete", "deleteIds"]),
    edit(item) {
      this.editItem = _.cloneDeep(item);
    },
    toggleComplete(item) {
      if (item.children.length == 0) {
        this.$store.commit("toggleComplete", item.id);
      } else {
        var allChildrenComplete = this.allChildrenComplete(item);
        if (allChildrenComplete) {
          this.$store.commit("toggleComplete", item.id);
        }
      }
    },

    hasIncompleteChildren(item) {
      return this.getLeafChildren(item).some(child => !child.complete);
    },
    markAllComplete(item, complete) {
      var ids = this.getLeafChildren(item).map(item => item.id);
      this.markIdsComplete({ ids, complete });
    },

    immeadiateChildrenComplete(item) {
      var children = item.children;
      if (!children.length > 0) {
        return true;
      }
      return item.children.every(child => child.complete);
    },
    allChildrenComplete(item) {
      var immeadiateChildrenComplete = this.immeadiateChildrenComplete(item);
      if (!immeadiateChildrenComplete) {
        return false;
      }

      item.children.forEach(child => {
        var allChildrenComplete = this.allChildrenComplete(child);
        if (!allChildrenComplete) {
          return false;
        }
      });

      return true;
    }
  }
};
</script>
<style>
.complete {
  text-decoration: line-through;
  color: #ccc;
  position: relative;
}

/* Horizontal line */
.v-treeview-node--leaf:not(:last-child) .v-treeview-node__content::after {
    content: '';
    display: block;
    position: absolute;
    width: 8px;
    height: 2px;
    margin-left: -14px;
    background: #e9ebf0;
}

/* Vertical line */
.v-treeview-node--leaf:not(:last-child) .v-treeview-node__content::before {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    background: #e9ebf0;
    height: 100%;
    margin-left: -14px;
}

/* Last leaf node curve */
.v-treeview-node--leaf:last-child .v-treeview-node__content::before {
    content: '';
    display: block;
    position: absolute;
    width: 8px;
    height: 50%;
    border-bottom-left-radius: 6px;
    border-left: 2px solid #e9ebf0;
    border-bottom: 2px solid #e9ebf0;
    margin-left: -14px;
    margin-top: 0;
    top: 0;
    background: 0 0;
}

.task {
  display: inline-block;
}

.task:hover {
  color: #7e57c2;
  text-decoration: underline;
}
</style>