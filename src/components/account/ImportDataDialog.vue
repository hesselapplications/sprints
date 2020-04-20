<template>
  <v-dialog v-model="model" max-width="500" persistent :fullscreen="$vuetify.breakpoint.smAndDown">
    <v-card>
      <v-card-title>Import Data</v-card-title>

      <v-divider></v-divider>

      <!-- DATA INPUT -->
      <v-textarea
        class="pt-0 mt-0"
        v-model="data"
        :placeholder="placeholder"
        :readonly="importingData"
        autofocus
        hide-details
        rows="16"
        :loading="importingData"
      ></v-textarea>

      <v-card-actions>
        <v-spacer></v-spacer>
        <!-- CLOSE -->
        <v-btn color="grey" text @click="close">Close</v-btn>

        <!-- IMPORT DATA -->
        <v-btn color="primary" depressed @click="importData">
          <v-icon left>mdi-upload</v-icon>Import
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import vmodel from "@/mixins/vmodel.js";

export default {
  mixins: [vmodel],
  data() {
    return {
      importingData: false,
      data: null,
      dataFormat: {
        tasks: [
          {
            id: "1",
            parentId: null,
            name: "Parent task",
            dueDate: "yyyy-mm-dd"
          },
          {
            id: "2",
            parentId: "1",
            name: "Child task",
            dueDate: "yyyy-mm-dd"
          }
        ]
      }
    };
  },
  computed: {
    placeholder() {
      return JSON.stringify(this.dataFormat, null, "   ");
    }
  },
  methods: {
    close() {
      this.model = false;
      this.data = null;
      this.importingData = false;
    },
    async importData() {
      this.importingData = true;
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.close();
    }
  }
};
</script>
<style>
textarea {
  padding: 16px !important;
}
</style>