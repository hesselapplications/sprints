import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/tasks"
  },
  {
    path: "/tasks/:id",
    name: "Edit Task",
    component: () => import("../views/EditTaskView.vue"),
    props: true
  },
  {
    path: "/tasks",
    name: "All Tasks",
    component: () => import("../views/TasksView.vue")
  },
  {
    path: "/sprints",
    name: "Sprints",
    component: () => import("../views/SprintsView.vue")
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/SearchView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
