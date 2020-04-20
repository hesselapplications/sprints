<template>
  <v-dialog v-model="model" max-width="500" persistent :fullscreen="$vuetify.breakpoint.smAndDown">
    <v-card>
      <v-card-title>Export Data</v-card-title>

      <v-divider></v-divider>

      <!-- DATA OUTPUT -->
      <v-textarea class="pt-0 mt-0" :value="data" autofocus readonly hide-details></v-textarea>

      <v-card-actions>
        <v-spacer></v-spacer>
        <!-- CLOSE -->
        <v-btn color="grey" text @click="model = false">Close</v-btn>

        <!-- COPY DATA -->
        <v-btn color="primary" depressed @click="copyData">
          <v-icon left>mdi-content-copy</v-icon>Copy
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import copy from "copy-to-clipboard";
import vmodel from "@/mixins/vmodel.js";
import { mapState } from "vuex";

export default {
  mixins: [vmodel],
  computed: {
    ...mapState(["tasks"]),
    data() {
      return JSON.stringify(
        {
          tasks: this.tasks
        },
        null,
        "   "
      );
    }
  },
  methods: {
    copyData() {
      copy(this.data);
      this.model = false;
    }
  }
};
</script>
<style>
textarea {
  color: rgba(0, 0, 0, 0.38);
}
</style>