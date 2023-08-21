import { defineStore } from 'pinia'
import data from '@/data.json'

export const useAvailableFilmsStore = defineStore('availableFilmsStore', {
  state: () => ({
    availableFilms: data,
    movieList: [],
    tvSeriesList: [],
    bookmarkedFilmsList: [],
    trendingFilmsList: [],
    notTrendingFilmsList: []
  }),
  getters: {
    getAvailableFilms() {
      return this.availableFilms
    }
  },

  actions: {
    filterMovies() {
      return (this.movieList = this.availableFilms.filter((films) => films.category === 'Movie'))
    },

    filterTvSeries() {
      return (this.tvSeriesList = this.availableFilms.filter(
        (films) => films.category === 'TV Series'
      ))
    },

    bookmarked() {
      return (this.bookmarkedFilmsList = this.availableFilms.filter((films) => films.isBookmarked))
    },

    trendingFilms() {
      return (this.trendingFilmsList = this.availableFilms.filter((films) => films.isTrending))
    },

    notTrendingFilms() {
      return (this.notTrendingFilmsList = this.availableFilms.filter((films) => !films.isTrending))
    }
  }
})
