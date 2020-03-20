<template>
  <v-text-field
    v-model="name"
    :label="label"
    hide-details
    solo
    background-color="grey lighten-3"
    flat
    @keydown.enter="createTask"
  >
    <template v-slot:append>
      <v-fade-transition>
        <v-btn v-show="name" icon color="primary" @click="createTask">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fade-transition>
    </template>
  </v-text-field>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    parentId: String,
    label: String
  },
  data() {
    return {
      name: null
    };
  },
  methods: {
    ...mapMutations(["saveTask"]),
    createTask() {
      if (this.name) {
        var task = {
          id: null,
          parentId: this.parentId,
          complete: false,
          dueDate: null,
          name: this.name
        };

        this.saveTask(task);
        this.name = null;
      }
    }
  }
};
</script>