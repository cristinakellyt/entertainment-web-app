import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/app',
      children: [
        {
          path: '',
          component: () => import('@/views/UserPageView.vue')
        },
        {
          path: ':data',
          name: 'overview',
          component: () => import('@/views/UserPageView.vue'),
          props: true
        },
        {
          path: ':data',
          name: 'movies',
          component: () => import('@/views/UserPageView.vue'),
          props: true
        },
        {
          path: ':data',
          name: 'tv-series',
          component: () => import('@/views/UserPageView.vue'),
          props: true
        },
        {
          path: ':data',
          name: 'bookmarked',
          component: () => import('@/views/UserPageView.vue'),
          props: true
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LogInView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUpView.vue')
    }
  ]
})

export default router
