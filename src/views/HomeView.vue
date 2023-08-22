<template>
  <SearchBar
    :size="screenSizeStore.isMobile ? 'small' : 'large'"
    placeholderSearchFor="movies and TV Series"
    @onSearch="onSearch"
  />

  <FilteredFilms
    v-if="filmSearched"
    :searchFor="filmSearched"
    filterBy="all"
    :key="filmSearched"
  ></FilteredFilms>

  <div v-else class="main-content">
    <FilteredFilms filterBy="trending" :isCarrousel="true"> Trending </FilteredFilms>
    <FilteredFilms filterBy="not-trending"> Recommended </FilteredFilms>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from '@/components/ui/SearchBar.vue'

import FilteredFilms from '@/components/FilteredFilms.vue'
import { useScreenSizeStore } from '@/stores/screenSizeStore'

const screenSizeStore = useScreenSizeStore()

const filmSearched = ref()

const onSearch = (searchKey) => {
  filmSearched.value = searchKey
  return filmSearched
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.main-content {
  display: flex;
  flex-direction: column;
  gap: pxToRem(35);
}
</style>
