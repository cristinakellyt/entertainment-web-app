import { defineStore } from 'pinia'
import data from '@/data.json'

export const useAvailableFilmsStore = defineStore('availableFilmsStore', {
  state: () => ({
    availableFilms: data,
    filteredFilms: []
  }),
  getters: {
    getAvailableFilms() {
      return this.availableFilms
    }
  },
  actions: {
    getListOf(filterKey) {
      if (filterKey === 'all') {
        this.filteredFilms = this.availableFilms
      } else if (filterKey === 'movies') {
        this.filteredFilms = this.availableFilms.filter((films) => films.category === 'Movie')
      } else if (filterKey === 'trending') {
        this.filteredFilms = this.availableFilms.filter((films) => films.isTrending)
      } else if (filterKey === 'not-trending') {
        this.filteredFilms = this.availableFilms.filter((films) => !films.isTrending)
      } else if (filterKey === 'tv-series') {
        this.filteredFilms = this.availableFilms.filter((films) => films.category === 'TV Series')
      } else if (filterKey === 'bookmarked') {
        this.filteredFilms = this.availableFilms.filter((films) => films.isBookmarked)
      } else if (filterKey === 'bookmarked-movies') {
        this.filteredFilms = this.availableFilms.filter(
          (films) => films.isBookmarked && films.category === 'Movie'
        )
      } else if (filterKey === 'bookmarked-tv-series') {
        this.filteredFilms = this.availableFilms.filter(
          (films) => films.isBookmarked && films.category === 'TV Series'
        )
      }
      return this.filteredFilms
    },

    toggleBookmarked(title) {
      const selectedMovie = this.availableFilms.find((films) => films.title === title)
      selectedMovie.isBookmarked = !selectedMovie.isBookmarked
    }
  }
})
