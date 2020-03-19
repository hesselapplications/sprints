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
    component: () => import("../views/Tasks.vue")
  },
  {
    path: "/sprints",
    component: () => import("../views/Sprints.vue")
  },
  {
    path: "/sprints/new",
    component: () => import("../views/EditSprint.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
