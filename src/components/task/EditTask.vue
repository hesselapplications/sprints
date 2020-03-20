<template>
  <v-card-text>
    <v-text-field @change="saveTask(task)" v-model="task.name" label="Name"></v-text-field>
  </v-card-text>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    task: Object
  },
  methods: {
    ...mapMutations(["saveTask"])
  }
};
</script>