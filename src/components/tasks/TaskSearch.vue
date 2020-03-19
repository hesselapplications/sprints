<template>
  <v-text-field
    v-model="model"
    label="Search"
    solo
    dense
    prepend-inner-icon="mdi-magnify"
    clearable
    hide-details
  ></v-text-field>
</template>
<script>
import vmodel from "@/mixins/vmodel.js";

export default {
  mixins: [vmodel]
};
</script>