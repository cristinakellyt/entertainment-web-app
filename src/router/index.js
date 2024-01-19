import { createRouter, createWebHistory } from 'vue-router'
import { usePageContentStore } from '@/stores/pageContentStore'

const loadPageContent = async (page) => {
  const pageContentStore = usePageContentStore()
  pageContentStore.fetchPageContent(page)
}

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
          redirect: 'app/overview',
          component: () => import('@/views/UserPageView.vue')
        },
        {
          path: 'overview',
          name: 'overview',
          component: () => import('@/views/UserPageView.vue'),
          beforeEnter: (to, from, next) => {
            loadPageContent('overview')
            next()
          }
        },
        {
          path: 'movies',
          name: 'movies',
          component: () => import('@/views/UserPageView.vue'),
          beforeEnter: (to, from, next) => {
            loadPageContent('movies')
            next()
          }
        },
        {
          path: 'tv-series',
          name: 'tv-series',
          component: () => import('@/views/UserPageView.vue'),
          beforeEnter: (to, from, next) => {
            loadPageContent('tv-series')
            next()
          }
        },
        {
          path: 'bookmarked',
          name: 'bookmarked',
          component: () => import('@/views/UserPageView.vue'),
          beforeEnter: (to, from, next) => {
            loadPageContent('bookmarked')
            next()
          }
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
