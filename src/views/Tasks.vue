<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title class="title">Backlog</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn small outlined color="primary">
              <v-icon left>mdi-plus</v-icon>Task
            </v-btn>
          </v-toolbar>
          <v-divider></v-divider>
          <task-search class="ma-4" v-model="search"></task-search>
          <tasks :items="getItems" :search="search"></tasks>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>Current Sprint</v-card-title>
          <v-divider></v-divider>
          <v-card-text>x, y, z</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TaskSearch from "@/components/tasks/TaskSearch";
import Tasks from "@/components/Tasks";
import { mapGetters } from "vuex";

export default {
  components: {
    TaskSearch,
    Tasks
  },
  data() {
    return {
      search: null,
      showComplete: true
    };
  },
  computed: {
    ...mapGetters(["getItems"])
  }
};
</script>