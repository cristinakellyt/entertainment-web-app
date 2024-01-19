<template>
  <BaseWidth>
    <NavSideBar />
    <div class="main-content">
      <div class="flex-column-gap">
        <SearchBar
          :size="screenSize"
          :placeholderSearchFor="initializeData.search.placeholder"
          @onSearch="searchVideo"
        />

        <FilteredFilms
          v-if="filmSearched"
          :searchFor="filmSearched"
          :filterBy="initializeData.search.filterBy"
          :key="filmSearched"
        ></FilteredFilms>

        <div v-else class="flex-column-gap">
          <FilteredFilms
            v-for="movie in initializeData.mainContent"
            :filterBy="movie.filterBy"
            :isCarrousel="movie.isCarrousel"
            :key="movie.title"
          >
            {{ movie.title }}</FilteredFilms
          >
        </div>
      </div>
    </div>
  </BaseWidth>
</template>

<script setup>
import NavSideBar from '@/components/layout/NavSideBar.vue'
import BaseWidth from '@/components/ui/BaseWidth.vue'
import { computed, onBeforeMount, ref } from 'vue'
import { useScreenSizeStore } from '@/stores/screenSizeStore'
import { usePageContentStore } from '@/stores/pageContentStore'
import SearchBar from '@/components/ui/SearchBar.vue'
import FilteredFilms from '@/components/FilteredFilms.vue'

const screenSizeStore = useScreenSizeStore()
const pageContentStore = usePageContentStore()
const initializeData = ref({})

const filmSearched = ref()

const screenSize = computed(() => (screenSizeStore.isMobile ? 'small' : 'large'))

const searchVideo = (searchKey) => {
  filmSearched.value = searchKey
}

onBeforeMount(() => {
  initializeData.value = pageContentStore.getPageContent
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.flex-column-gap {
  display: flex;
  flex-direction: column;
  gap: pxToRem(35);
  overflow: hidden;
}

.main-content {
  margin: pxToRem(32) pxToRem(16) 0 0;
  padding-left: calc(pxToRem(96) + pxToRem(36));
}

@include media-query($tablet) {
  .main-content {
    margin: pxToRem(98) 0;
    padding-left: pxToRem(25);
    padding-right: pxToRem(25);
  }
}

@include media-query($mobile-large) {
  .flex-column-gap {
    gap: pxToRem(20);
  }
}

@include media-query($mobile-medium) {
  .main-content {
    margin: pxToRem(50) 0;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
