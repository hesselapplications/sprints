<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" no-gutters>
      <v-col xl="2" lg="4" md="6" sm="8" cols="10">
        <v-card class="text-center">
          <div class="pt-4 pb-2">
            <v-avatar size="48px" color="primary">
              <v-icon size="32px" color="white">mdi-check</v-icon>
            </v-avatar>
          </div>

          <div class="px-4 headline">Subtasker</div>

          <div class="pa-4">
            <div class="separator overline grey--text">Sign in with</div>
            <v-btn class="text-capitalize mt-4" color="grey" block outlined @click="signIn">
              <v-avatar class="mr-2" size="18px">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </v-avatar>Google
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
  methods: {
    ...mapActions(["signIn"])
  }
};
</script>
<style>
.separator {
  display: flex;
  align-items: center;
  text-align: center;
}
.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.separator::before {
  margin-right: 1em;
}
.separator::after {
  margin-left: 1em;
}
</style>