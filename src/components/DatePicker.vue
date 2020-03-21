<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    min-width="290px"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :value="formattedDate"
        :label="placeholder"
        hide-details
        solo
        flat
        background-color="grey lighten-3"
        readonly
        v-on="on"
        @change="saveTask(task)"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable :min="min" :max="max" color="primary">
      <v-fade-transition>
        <v-btn
          v-show="date != null && clearable"
          text
          color="grey darken-1"
          @click="model = null; menu = false"
        >Clear</v-btn>
      </v-fade-transition>
      <v-spacer />
      <v-btn text color="primary" @click="model = date; menu = false">Ok</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import moment from "moment";
import vmodel from "@/mixins/vmodel.js";
import _ from "lodash";

export default {
  mixins: [vmodel],
  props: {
    itemName: String,
    min: String,
    max: String,
    clearable: Boolean,
    placeholder: String,
    disabled: Boolean
  },
  data() {
    return {
      menu: false,
      date: null
    };
  },
  computed: {
    formattedDate: {
      get() {
        return this.model === null
          ? this.placeholder
          : moment(this.model).format("MMM Do YYYY");
      },
      set(date) {
        this.model = date;
      }
    }
  },
  watch: {
    menu() {
      this.date = _.cloneDeep(this.model);
    }
  }
};
</script>
<style scoped>
.datepicker-btn:disabled {
  color: rgba(0, 0, 0, 0.5) !important;
}
</style>
