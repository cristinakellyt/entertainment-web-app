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
      children: [
        {
          path: '',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'overview/:data',
          name: 'overview',
          component: () => import('@/views/UserPageView.vue'),
          props: true
        },
        {
          path: 'movies/:data',
          name: 'movies',
          component: () => import('@/views/UserPageView.vue'),
          props: true
        },
        {
          path: 'tv-series/:data',
          name: 'tv-series',
          component: () => import('@/views/UserPageView.vue'),
          props: true
        },
        {
          path: 'bookmarked/:data',
          name: 'bookmarked',
          component: () => import('@/views/UserPageView.vue'),
          props: true
        }
      ]
    }
  ]
})

export default router
