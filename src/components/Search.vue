<template>
  <v-text-field
    v-model="model"
    label="Search"
    hide-details
    solo
    prepend-inner-icon="mdi-magnify"
    background-color="grey lighten-3"
    flat
  ></v-text-field>
</template>

<script>
import vmodel from "@/mixins/vmodel.js";

export default {
  mixins: [vmodel]
};
</script>