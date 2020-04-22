<template>
  <v-dialog v-model="model" max-width="500" persistent :fullscreen="$vuetify.breakpoint.smAndDown">
    <v-card>
      <v-card-title>Import Data</v-card-title>

      <v-divider></v-divider>

      <!-- JSON INPUT -->
      <v-textarea
        class="pt-0 mt-0"
        v-model="json"
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
import firebase from "@/firebase.js";

export default {
  mixins: [vmodel],
  data() {
    return {
      importingData: false,
      exampleData: {
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
      },
      json: null
    };
  },
  computed: {
    exampleJson() {
      return JSON.stringify(this.exampleData, null, "   ");
    }
  },
  watch: {
    model() {
      this.json = this.exampleJson;
    }
  },
  methods: {
    close() {
      this.model = false;
      this.importingData = false;
    },
    async importData() {
      try {
        this.importingData = true;
        var data = JSON.parse(this.json);
        await firebase.batchSave(firebase.tasks, data.tasks);
        this.$root.$emit("showMessage", "Successfully imported data");

      } catch (error) {
        this.$root.$emit("showMessage", "Failed to import data");
      }

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