<template>
  <v-dialog v-if="model" :value="model" max-width="500px" persistent>
    <v-card>
        <v-card-title>
            Edit Task
        </v-card-title>
      <v-card-text>
        <v-text-field v-model="model.name" label="Name"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey" text @click="close">Close</v-btn>
        <v-btn color="primary" depressed @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import vmodel from "@/mixins/vmodel.js";

export default {
  mixins: [vmodel],
  methods: {
    close() {
      this.model = null;
    },
    save() {
      this.$emit("save", this.model);
      this.model = null;
    }
  }
};
</script>