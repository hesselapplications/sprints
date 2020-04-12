<template>
  <v-text-field v-model="name" :label="label" hide-details outlined @keydown.enter="createTask">
    <template v-slot:append>
      <v-fade-transition>
        <v-icon v-show="name" color="primary" @click="createTask">mdi-plus</v-icon>
      </v-fade-transition>
    </template>
  </v-text-field>
</template>

<script>
import { mapActions } from "vuex";

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
    ...mapActions(["saveTask"]),
    createTask() {
      if (this.name) {
        var task = {
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