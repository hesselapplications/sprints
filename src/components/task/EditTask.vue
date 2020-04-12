<template>
  <v-container fluid>
    <v-row dense>
      <!-- NAME -->
      <v-col lg="8" md="9" sm="8" cols="7">
        <v-text-field
          v-model="editTask.name"
          label="Name"
          hide-details
          outlined
        ></v-text-field>
      </v-col>

      <!-- DUE DATE -->
      <v-col lg="4" md="3" sm="4" cols="5">
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