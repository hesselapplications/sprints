<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="3" lg="4" md="6" cols="12">
        <v-card>
          <div class="py-4 title text-center">Sign In</div>
          <v-divider></v-divider>
          <div class="px-4 py-2">
            <v-btn
              v-for="(provider, index) in providers"
              :key="index"
              class="text-capitalize my-4"
              :color="provider.color"
              block
              dark
              @click="signIn"
            >
              <v-icon left>{{ provider.icon }}</v-icon>
              {{ provider.name }}
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      providers: [
        {
          name: "Google",
          icon: "mdi-google",
          color: "primary"
        },
        {
          name: "Facebook",
          icon: "mdi-facebook",
          color: "#3B5998"
        },
        {
          name: "Twitter",
          icon: "mdi-twitter",
          color: "#00ACEE"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["signIn"])
  }
};
</script>