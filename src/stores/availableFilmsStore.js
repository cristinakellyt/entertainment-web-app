import { defineStore } from 'pinia'
import data from '@/data.json'

if (localStorage.getItem('availableFilms') === null) {
  localStorage.setItem('availableFilms', JSON.stringify(data))
}

export const useAvailableFilmsStore = defineStore('availableFilmsStore', {
  state: () => ({
    availableFilms: JSON.parse(localStorage.getItem('availableFilms')),
    filteredFilms: []
  }),
  getters: {
    getAvailableFilms() {
      return this.availableFilms
    }
  },
  actions: {
    filterBy(filterKey) {
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
      const selectedFilm = this.availableFilms.find((films) => films.title === title)
      selectedFilm.isBookmarked = !selectedFilm.isBookmarked

      // Get the current data from localStorage
      const localStorageData = JSON.parse(localStorage.getItem('availableFilms')) || []

      // Find the index of the selected movie in localStorageData
      const localStorageFilm = localStorageData.find((films) => films.title === title)
      localStorageFilm.isBookmarked = !localStorageFilm.isBookmarked

      // Update the data in localStorage
      localStorage.setItem('availableFilms', JSON.stringify(localStorageData))
    }
  }
})
