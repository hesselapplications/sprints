<template>
  <v-container fluid>
    <v-row dense>
      <!-- NAME -->
      <v-col cols="8">
        <v-text-field
          v-model="task.name"
          label="Name"
          hide-details
          outlined
          @change="saveTask(task)"
        ></v-text-field>
      </v-col>

      <!-- DUE DATE -->
      <v-col cols="4">
        <date-picker v-model="task.dueDate" placeholder="Due Date" clearable></date-picker>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DatePicker from "@/components/DatePicker";
import { mapActions } from "vuex";

export default {
  components: {
    DatePicker
  },
  props: {
    task: Object
  },
  methods: {
    ...mapActions(["saveTask"])
  }
};
</script>