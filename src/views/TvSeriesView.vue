<template>
  <SearchBar
    :size="screenSizeStore.isMobile ? 'small' : 'large'"
    placeholderSearchFor="TV Series"
    @onSearch="onSearch"
  />

  <FilteredFilms
    v-if="filmSearched"
    :searchFor="filmSearched"
    filterBy="tv-series"
    :key="filmSearched"
  ></FilteredFilms>

  <FilteredFilms v-else filterBy="tv-series"> TV Series </FilteredFilms>
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
