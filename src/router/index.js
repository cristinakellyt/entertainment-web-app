import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/user',
      name: 'home',
      component: () => import('@/views/UserView.vue'),
      children: [
        {
          path: 'overview/:data',
          name: 'overview',
          component: () => import('@/views/UserView.vue'),
          props: true
        },
        {
          path: 'movies/:data',
          name: 'movies',
          component: () => import('@/views/UserView.vue'),
          props: true
        },
        {
          path: 'tv-series/:data',
          name: 'tv-series',
          component: () => import('@/views/UserView.vue'),
          props: true
        },
        {
          path: 'bookmarked/:data',
          name: 'bookmarked',
          component: () => import('@/views/UserView.vue'),
          props: true
        }
      ]
    }
  ]
})

export default router
