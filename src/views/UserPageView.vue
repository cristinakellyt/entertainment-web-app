<template>
  <div class="flex-column-gap">
    <SearchBar
      :size="screenSizeStore.isMobile ? 'small' : 'large'"
      :placeholderSearchFor="contentPageKeywords.search.placeholder"
      @onSearch="onSearch"
    />

    <FilteredFilms
      v-if="filmSearched"
      :searchFor="filmSearched"
      :filterBy="contentPageKeywords.search.filterBy"
      :key="filmSearched"
    ></FilteredFilms>

    <div v-else class="flex-column-gap">
      <FilteredFilms
        v-for="movie in contentPageKeywords.mainContent"
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
import { useScreenSizeStore } from '@/stores/screenSizeStore'
import SearchBar from '@/components/ui/SearchBar.vue'
import FilteredFilms from '@/components/FilteredFilms.vue'

const screenSizeStore = useScreenSizeStore()

const filmSearched = ref()

defineProps({ contentPageKeywords: { type: Object } })

const onSearch = (searchKey) => {
  return (filmSearched.value = searchKey)
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
