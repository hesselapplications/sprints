import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
    links() {
      if (!this.user) {
        return []
      }

      return [
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
        },
        {
          to: "/account",
          label: "Account",
          icon: "mdi-account"
        }
      ];
    }
  }
}