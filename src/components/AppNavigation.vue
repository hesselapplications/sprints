<template>
  <div>
    <v-app-bar color="primary" dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>{{$route.name}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="tasks">
        <v-icon>mdi-playlist-check</v-icon>
      </v-btn>

      <!-- <v-btn icon to="sprints">
        <v-icon>mdi-run-fast</v-icon>
      </v-btn> -->

      <!-- <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>