<template>
  <v-container v-if="user">
    <v-row justify="center">
      <v-col xl="4" lg="6" md="8" cols="12">
        <v-card>
          <!-- USER INFO -->
          <v-list-item class="py-2">
            <v-list-item-avatar>
              <v-img :src="user.photoURL"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">{{ user.displayName }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn small depressed color="primary" @click="signOut">Sign out</v-btn>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>

          <!-- ACTIONS -->
          <v-list>
            <v-list-item
              v-for="(action, index) in actions"
              :key="index"
              @click="() => $emit(action.emit)"
            >
              <v-list-item-icon>
                <v-icon>{{ action.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ action.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ action.subtitle }}</v-list-item-subtitle>
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
  data() {
    return {
      actions: [
        {
          title: "Import data",
          subtitle: "From json",
          icon: "mdi-upload",
          emit: "import-data"
        },
        {
          title: "Export data",
          subtitle: "To json",
          icon: "mdi-download",
          emit: "export-data"
        },
        {
          title: "Delete account",
          subtitle: "Permanently deletes all data",
          icon: "mdi-delete",
          emit: "delete-account"
        }
      ]
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["signOut"])
  }
};
</script>