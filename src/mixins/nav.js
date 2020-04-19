import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
    links() {
      var links = [
        {
          to: "/tasks",
          label: "Tasks",
          icon: "mdi-playlist-check"
        },
        {
          to: "/search",
          label: "Search",
          icon: "mdi-magnify"
        },
        {
          to: "/sprints",
          label: "Sprints",
          icon: "mdi-run-fast"
        }
      ];

      if (this.user) {
        links.push({
          to: "/account",
          label: "Account",
          icon: "mdi-account"
        });

      } else {
        links.push({
          to: "/sign-in",
          label: "Sign In",
          icon: "mdi-login-variant"
        });
      }

      return links;
    }
  },
  methods: {
    ...mapActions(["signIn"])
  }
}