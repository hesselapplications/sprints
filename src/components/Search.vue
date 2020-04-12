<template>
  <v-text-field
    v-model="model"
    label="Search"
    hide-details
    prepend-inner-icon="mdi-magnify"
    single-line
    outlined
    flat
  ></v-text-field>
</template>

<script>
import vmodel from "@/mixins/vmodel.js";

export default {
  mixins: [vmodel]
};
</script>