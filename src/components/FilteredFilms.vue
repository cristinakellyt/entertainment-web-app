<template>
  <h2 class="heading-secondary"><slot>Name</slot></h2>

  <div :class="isCarrousel ? 'carrousel' : 'grid-layout'">
    <MovieCard
      v-for="movie in filteredFilms"
      :key="movie.title"
      :category="movie.category"
      :isBookmarked="movie.isBookmarked"
      :isTrending="movie.isTrending"
      :thumbnail="movie.thumbnail"
      :title="movie.title"
      :rating="movie.rating"
      :year="movie.year"
      :isCarrousel="isCarrousel"
      :class="isCarrousel ? 'carrousel-card' : 'movie-card'"
    />
  </div>
</template>

<script setup>
import MovieCard from '@/components/MovieCard.vue'
import { ref, onMounted } from 'vue'
import { useAvailableFilmsStore } from '@/stores/availableFilmsStore'

const props = defineProps({ filterBy: { type: String }, isCarrousel: { type: Boolean } })

const availableFilmsStore = useAvailableFilmsStore()
const filteredFilms = ref()

onMounted(() => {
  availableFilmsStore.getAvailableFilms
  filterAvailableFilms(props.filterBy)
})

const filterAvailableFilms = (filterKey) => {
  if (filterKey === 'movies') {
    filteredFilms.value = availableFilmsStore.filterMovies()
  } else if (filterKey === 'trending') {
    filteredFilms.value = availableFilmsStore.trendingFilms()
  } else if (filterKey === 'not-trending') {
    filteredFilms.value = availableFilmsStore.notTrendingFilms()
  } else if (filterKey === 'tv-series') {
    filteredFilms.value = availableFilmsStore.filterTvSeries()
  } else if (filterKey === 'bookmarked') {
    filteredFilms.value = availableFilmsStore.bookmarked()
  }

  return filteredFilms.value
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';
.carrousel {
  display: flex;
  gap: pxToRem(40);

  &-card {
    width: pxToRem(470);
    height: pxToRem(230);
  }
}

.heading-secondary {
  @extend %heading-large;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(4, 280px);
  gap: pxToRem(40);
}
</style>
