import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    { path: '/home', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/movies', name: 'movies', component: () => import('@/views/MoviesView.vue') },
    { path: '/tv-series', name: 'tv-series', component: () => import('@/views/TvSeriesView.vue') },
    {
      path: '/bookmarked',
      name: 'bookmarked',
      component: () => import('@/views/BookMarkedView.vue')
    }
  ]
})

export default router
