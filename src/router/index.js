import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../pages/Accueil.vue'
import Stage from '../pages/Stage.vue'
import Alternance from '../pages/Alternance.vue'
import BUT1 from '../pages/BUT1.vue'
import BUT2 from '../pages/BUT2.vue'
import BUT3 from '../pages/BUT3.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', component: Accueil },
  { path: '/stage', component: Stage },
  { path: '/alternance', component: Alternance },
  { path: '/but1', component: BUT1 },
  { path: '/but2', component: BUT2 },
  { path: '/but3', component: BUT3 },
  { path: '/contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory((import.meta.env.BASE_URL)),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})


export default router
