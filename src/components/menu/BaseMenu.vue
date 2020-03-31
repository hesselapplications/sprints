<template>
  <v-menu v-if="$vuetify.breakpoint.lgAndUp" left bottom>
    <template v-slot:activator="{ on }">
      <v-btn small icon v-on="on">
        <v-icon color="grey lighten-1">mdi-dots-horizontal</v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item v-for="(option, index) in options" :key="index" @click="emit(option)">
        <v-list-item-title :class="option.class">{{ option.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  <v-bottom-sheet v-else v-model="sheet" inset>
    <template v-slot:activator="{ on }">
      <v-btn small icon v-on="on">
        <v-icon color="grey lighten-1">mdi-dots-horizontal</v-icon>
      </v-btn>
    </template>
    <v-sheet>
      <v-card-title class="subtitle-1 grey--text">{{ title }}</v-card-title>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(option, index) in options" :key="index" @click="emit(option)">
          <v-list-item-title :class="option.class">{{ option.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-bottom-sheet>
</template>
<script>
export default {
  props: {
    title: String,
    options: Array
  },
  data() {
    return {
      sheet: false
    };
  },
  methods: {
    emit(option) {
      this.$emit(option.emit);
      this.sheet = false;
    }
  }
};
</script>