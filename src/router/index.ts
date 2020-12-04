import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PeopleList from '../components/PeopleList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'people',
    component: PeopleList
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
