<template>
  <v-container v-if="user">
    <v-row justify="center">
      <v-col xl="4" lg="6" md="8" cols="12">
        <v-card>
          <!-- USER INFO -->
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="user.photoURL"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ user.displayName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <!-- ACTIONS -->
          <v-list>
            <v-list-item @click="signOut">
              <v-list-item-icon>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Sign out</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="() => {}">
              <v-list-item-icon>
                <v-icon>mdi-upload</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Import data</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="() => {}">
              <v-list-item-icon>
                <v-icon>mdi-download</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Export data</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="() => {}">
              <v-list-item-icon>
                <v-icon color="error">mdi-delete</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="error--text">Delete account</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["signOut"])
  }
};
</script>