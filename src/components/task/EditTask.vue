<template>
  <v-container fluid>
    <v-row dense>
      <!-- NAME -->
      <v-col cols="8">
        <v-text-field
          v-model="editTask.name"
          label="Name"
          hide-details
          outlined
        ></v-text-field>
      </v-col>

      <!-- DUE DATE -->
      <v-col cols="4">
        <date-picker v-model="editTask.dueDate" placeholder="Due Date" clearable></date-picker>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DatePicker from "@/components/DatePicker";
import _ from "lodash";
import { mapActions } from "vuex";

export default {
  components: {
    DatePicker
  },
  props: {
    task: Object
  },
  data() {
    return {
      editTask: _.cloneDeep(this.task)
    }
  },
  methods: {
    ...mapActions(["saveTask"])
  },
  beforeDestroy() {
    this.saveTask(this.editTask);
  }
};
</script>