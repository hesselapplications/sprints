import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "@/firebase.js";

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/tasks"
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: () => import("../views/SignInView.vue")
  },
  {
    path: "/account",
    name: "Account",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/AccountView.vue")
  },
  {
    path: "/tasks/:id",
    name: "Edit Task",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/EditTaskView.vue"),
    props: true
  },
  {
    path: "/tasks",
    name: "All Tasks",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/TasksView.vue")
  },
  {
    path: "/sprints",
    name: "Sprints",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/SprintsView.vue")
  },
  {
    path: "/search",
    name: "Search",
    meta: {
      requiresAuth: true
    },
    component: () => import("../views/SearchView.vue")
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth);
  const userSignedIn = await firebase.userSignedIn();
  if (requiresAuth && !userSignedIn) {
    next("sign-in");

  } else if (to.name == "Sign In" && userSignedIn) {
    next("/")

  } else {
    next();
  }
});

export default router