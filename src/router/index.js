import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Service from '../views/Services.vue'
import Clients from '../views/Clients.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 {
   path: "/service" ,
   component : Service
 },
 {
   path: "/clients",
   component: Clients
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
