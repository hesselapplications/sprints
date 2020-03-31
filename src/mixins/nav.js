export default {
  data() {
    return {
      links: [
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
      ]
    };
  }
}