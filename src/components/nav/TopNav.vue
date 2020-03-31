<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/search">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon to="/tasks">
        <v-icon>mdi-playlist-check</v-icon>
      </v-btn>

      <v-btn icon to="/sprints">
        <v-icon>mdi-run-fast</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>