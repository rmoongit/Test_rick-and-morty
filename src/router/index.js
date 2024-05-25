import {createRouter, createWebHashHistory} from 'vue-router'
import GlobalPage from '@/views/GlobalPage'

const routes = [
  {
    path: '/',
    name: 'page',
    component: GlobalPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
