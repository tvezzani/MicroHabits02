import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlahView from '../views/BlahView.vue'
import MoviesView from '../views/MoviesView.vue'
import DashboardView from '../views/DashboardView.vue'
import TrackView from '../views/TrackView.vue'
import MyGoalsView from '../views/MyGoalsView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blah',
    name: 'blah',
    component: BlahView
  },  
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/track',
    name: 'track',
    component: TrackView
  },
  {
    path: '/my-goals',
    name: 'my-goals',
    component: MyGoalsView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
