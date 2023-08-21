<template>
  <FilteredFilms filterBy="trending" :isCarrousel="true"> Trending </FilteredFilms>
  <FilteredFilms filterBy="not-trending"> Recommended </FilteredFilms>
</template>

<script setup>
import FilteredFilms from '@/components/FilteredFilms.vue'
</script>
