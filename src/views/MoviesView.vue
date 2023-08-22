<template>
  <SearchBar
    :size="screenSizeStore.isMobile ? 'small' : 'large'"
    placeholderSearchFor="movies"
    @onSearch="onSearch"
  />

  <FilteredFilms
    v-if="filmSearched"
    :searchFor="filmSearched"
    filterBy="movies"
    :key="filmSearched"
  ></FilteredFilms>

  <FilteredFilms v-else filterBy="movies"> Movies </FilteredFilms>
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
