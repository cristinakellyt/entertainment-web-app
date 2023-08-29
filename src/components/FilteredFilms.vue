<template>
  <h2 v-if="isSearching" class="heading-secondary">
    Found {{ numberOfSearchResult }} results for '{{ searchFor }}'
  </h2>
  <h2 v-else class="heading-secondary"><slot>Name</slot></h2>

  <div :class="isCarrousel ? 'carrousel' : 'grid-layout'">
    <MovieCard
      @toggleBookmark="changeBookmark"
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

const props = defineProps({
  filterBy: { type: String },
  isCarrousel: { type: Boolean },
  searchFor: { type: String }
})

const availableFilmsStore = useAvailableFilmsStore()
const filteredFilms = ref()
const isSearching = ref(false)
const numberOfSearchResult = ref()

onMounted(() => {
  filterAvailableFilms(props.filterBy)
})

const filterAvailableFilms = (filterKey) => {
  filteredFilms.value = availableFilmsStore.filterBy(filterKey)

  if (props.searchFor) {
    isSearching.value = true
    filteredFilms.value = filteredFilms.value.filter((films) =>
      films.title.toLowerCase().includes(props.searchFor.toLowerCase())
    )
    numberOfSearchResult.value = filteredFilms.value.length
  }
}

const changeBookmark = (film) => {
  availableFilmsStore.toggleBookmarked(film)
  filteredFilms.value = availableFilmsStore.filterBy(props.filterBy)
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';
.carrousel {
  display: flex;
  gap: pxToRem(40);
  white-space: nowrap;

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