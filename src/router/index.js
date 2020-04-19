import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/sprints"
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
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: () => import("../views/SignInView.vue")
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/AccountView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
