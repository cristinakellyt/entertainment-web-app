<template>
  <h2 class="heading-secondary">Bookmarked</h2>
  <div class="grid-layout">
    <MovieCard
      v-for="movie in bookmarkedList"
      :key="movie.title"
      :category="movie.category"
      :isBookmarked="movie.isBookmarked"
      :isTrending="movie.isTrending"
      :thumbnail="movie.thumbnail"
      :title="movie.title"
      :rating="movie.rating"
      :year="movie.year"
      class="movie-card"
    />
  </div>
</template>

<script setup>
import MovieCard from '@/components/MovieCard.vue'
import data from '@/data.json'
import { ref, onMounted } from 'vue'
console.log(data)

const bookmarkedList = ref()

onMounted(() => bookmarked())

const bookmarked = () => {
  bookmarkedList.value = data.filter((data) => data.isBookmarked)
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';
.carrousel {
  display: flex;
  gap: pxToRem(40);

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
