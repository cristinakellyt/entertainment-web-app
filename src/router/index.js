import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),

      children: [
        {
          path: 'movies/:data',
          name: 'movies',
          component: () => import('@/views/HomeView.vue'),
          props: true
        },
        {
          path: 'user/:data',
          name: 'user',
          component: () => import('@/views/HomeView.vue'),
          props: true
        },
        {
          path: 'tv-series/:data',
          name: 'tv-series',
          component: () => import('@/views/HomeView.vue'),
          props: true
        },
        {
          path: 'bookmarked/:data',
          name: 'bookmarked',
          component: () => import('@/views/HomeView.vue'),
          props: true
        }
      ]
    }
  ]
})

export default router
