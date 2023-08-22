<template>
  <SearchBar
    :size="screenSizeStore.isMobile ? 'small' : 'large'"
    placeholderSearchFor="bookmarked shows"
    @onSearch="onSearch"
  />

  <FilteredFilms
    v-if="filmSearched"
    :searchFor="filmSearched"
    filterBy="bookmarked"
    :key="filmSearched"
  ></FilteredFilms>

  <FilteredFilms v-else filterBy="bookmarked"> Bookmarked </FilteredFilms>
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
