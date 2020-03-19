<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="6" lg="8" md="10" cols="12">
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