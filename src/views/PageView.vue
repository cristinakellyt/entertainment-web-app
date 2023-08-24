<template>
  <SearchBar
    :size="screenSizeStore.isMobile ? 'small' : 'large'"
    :placeholderSearchFor="data.search.placeholder || 'testing'"
    @onSearch="onSearch"
  />

  <FilteredFilms
    v-if="filmSearched"
    :searchFor="filmSearched"
    :filterBy="data.search.filterBy"
    :key="filmSearched"
  ></FilteredFilms>

  <div v-else class="main-content">
    <FilteredFilms
      v-for="movie in data.mainContent"
      :filterBy="movie.filterBy"
      :isCarrousel="movie.isCarrousel"
      :key="movie.title"
    >
      {{ movie.title }}</FilteredFilms
    >
  </div>
</template>

<script setup>
import SearchBar from '@/components/ui/SearchBar.vue'
import FilteredFilms from '@/components/FilteredFilms.vue'
import { ref } from 'vue'
import { useScreenSizeStore } from '@/stores/screenSizeStore'

const screenSizeStore = useScreenSizeStore()

const filmSearched = ref()

const onSearch = (searchKey) => {
  filmSearched.value = searchKey
  return filmSearched
}

defineProps({ data: { type: Object } })
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.main-content {
  display: flex;
  flex-direction: column;
  gap: pxToRem(35);
}
</style>
