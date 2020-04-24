import {
  mapState,
  mapGetters
} from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["taskTrees"]),
    links() {
      if (!this.user) {
        return []
      }

      var links = [];

      links.push({
        to: "/tasks",
        label: "Tasks",
        icon: "mdi-playlist-check"
      });

      if (this.taskTrees.length > 0) {
        links.push({
          to: "/search",
          label: "Search",
          icon: "mdi-magnify"
        });
      }

      links.push({
        to: "/sprints",
        label: "Sprints",
        icon: "mdi-run-fast"
      });

      links.push({
        to: "/account",
        label: "Account",
        icon: "mdi-account"
      });

      return links;
    }
  }
}