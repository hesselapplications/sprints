import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/tasks"
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () => import("../views/Tasks.vue")
  },
  {
    path: "/sprints",
    name: "Sprints",
    component: () => import("../views/Sprints.vue")
  },
  {
    path: "/sprints/new",
    name: "New Sprint",
    component: () => import("../views/EditSprint.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
