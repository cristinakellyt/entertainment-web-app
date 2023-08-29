<template>
  <div class="flex-column-gap">
    <SearchBar
      :size="screenSizeStore.isMobile ? 'small' : 'large'"
      :placeholderSearchFor="pageContent().search.placeholder"
      @onSearch="onSearch"
    />

    <FilteredFilms
      v-if="filmSearched"
      :searchFor="filmSearched"
      :filterBy="pageContent().search.filterBy"
      :key="filmSearched"
    ></FilteredFilms>

    <div v-else class="flex-column-gap">
      <FilteredFilms
        v-for="movie in pageContent().mainContent"
        :filterBy="movie.filterBy"
        :isCarrousel="movie.isCarrousel"
        :key="movie.title"
      >
        {{ movie.title }}</FilteredFilms
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useScreenSizeStore } from '@/stores/screenSizeStore'
import { usePageContentStore } from '@/stores/pageContentStore'

import SearchBar from '@/components/ui/SearchBar.vue'
import FilteredFilms from '@/components/FilteredFilms.vue'

const route = useRoute()
const screenSizeStore = useScreenSizeStore()
const pageContentStore = usePageContentStore()

const filmSearched = ref()

const onSearch = (searchKey) => {
  return (filmSearched.value = searchKey)
}

const pageContent = () => {
  return pageContentStore.fetchPageContent(route.params.data)
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.flex-column-gap {
  display: flex;
  flex-direction: column;
  gap: pxToRem(35);
}
</style>
