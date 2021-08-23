import { createRouter, createWebHistory } from 'vue-router'
import Intro from "../pages/Intro"
import Home from "../pages/Home"
import Attention from "../pages/Attention.vue"
import MessagePage from "@/pages/MessagePage.vue"
import ContactsMob from "@/pages/ContactsMob.vue"
import CasePage from "@/pages/CasePage.vue"
import Hello from "@/pages/Hello.vue"

const routes = [
  {
    path: '/hello',
    component: Hello
  },
  {
    path: '/cases',
    component: CasePage
  },
  {
    path: '/contacts',
    component: ContactsMob
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/intro',
    component: Intro
  },
  {
    path: '/',
    component: Attention
  },
  {
    path: '/msg',
    component: MessagePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
