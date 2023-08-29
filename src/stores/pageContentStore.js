import { defineStore } from 'pinia'

export const usePageContentStore = defineStore('pageContentStore', {
  state: () => ({
    navPages: {
      overview: {
        search: {
          placeholder: 'movies and TV Series',
          filterBy: 'all'
        },
        mainContent: [
          {
            filterBy: 'trending',
            title: 'Trending',
            isCarrousel: true
          },
          {
            filterBy: 'not-trending',
            title: 'Recommended',
            isCarrousel: false
          }
        ]
      },
      movies: {
        search: {
          placeholder: 'movies',
          filterBy: 'movies'
        },
        mainContent: [
          {
            filterBy: 'movies',
            title: 'Movies',
            isCarrousel: false
          }
        ]
      },
      series: {
        search: {
          placeholder: 'TV Series',
          filterBy: 'tv-series'
        },
        mainContent: [
          {
            filterBy: 'tv-series',
            title: 'TV Series',
            isCarrousel: false
          }
        ]
      },
      bookmarked: {
        search: {
          placeholder: 'bookmarked shows',
          filterBy: 'bookmarked'
        },
        mainContent: [
          {
            filterBy: 'bookmarked-movies',
            title: 'Bookmarked Movies',
            isCarrousel: false
          },
          {
            filterBy: 'bookmarked-tv-series',
            title: 'Bookmarked TV Series',
            isCarrousel: false
          }
        ]
      }
    },
    pageView: null
  }),
  actions: {
    fetchPageContent(dataKey) {
      if (dataKey === 'bookmark') {
        this.pageView = this.navPages.bookmarked
      } else if (dataKey === 'tv-series') {
        this.pageView = this.navPages.series
      } else if (dataKey === 'movies') {
        this.pageView = this.navPages.movies
      } else if (dataKey === 'overview') {
        this.pageView = this.navPages.overview
      } else if (!dataKey) {
        throw Error('missing parameters')
      }
      return this.pageView
    }
  }
})
