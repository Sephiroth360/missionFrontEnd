import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sabores from '../views/sabores.vue'
import Adornos from '../views/adornos.vue'
import Seleccion from '../views/seleccion.vue'
import Ordenes from '../views/ordenes.vue'
import Pastelero from '../views/pastelero.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sabores',
    name: 'sabores',
    component: Sabores
  },
  {
    path: '/adornos',
    name: 'adornos',
    component: Adornos
  },
  {
  path: '/seleccion',
  name: 'seleccion',
  component: Seleccion
},
{
  path: '/ordenes',
  name: 'ordenes',
  component: Ordenes
},
{
  path: '/pastelero',
  name: 'pastelero',
  component: Pastelero
},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
