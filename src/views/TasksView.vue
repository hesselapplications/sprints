<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title class="title">Tasks</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn small outlined color="primary">
              <v-icon left>mdi-plus</v-icon>Task
            </v-btn>
          </v-toolbar>

          <v-divider></v-divider>

          <tasks :tasks="tasks"></tasks>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Tasks from "@/components/task/Tasks";
import { mapGetters } from "vuex";

export default {
  components: {
    Tasks
  },
  computed: {
    ...mapGetters(["getTaskChildren"]),
    tasks() {
      return this.getTaskChildren(null);
    }
  }
};
</script>