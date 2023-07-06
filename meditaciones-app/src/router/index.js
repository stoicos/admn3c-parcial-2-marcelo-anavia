import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListaView from '../views/ListaView.vue'
import AboutView from '../views/AboutView.vue'
import QuoteView from '../views/QuoteView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/escribir',
    name: 'escribir',
    component: ListaView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/quote',
    name: 'quote',
    component: QuoteView
  },

]

const router = new VueRouter({
  routes
})

export default router
