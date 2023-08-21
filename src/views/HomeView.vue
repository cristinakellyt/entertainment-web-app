<template>
  <h2 class="heading-secondary">Trending</h2>

  <div class="carrousel">
    <MovieCard
      v-for="movie in trending"
      :key="movie.title"
      :category="movie.category"
      :isBookmarked="movie.isBookmarked"
      :isTrending="movie.isTrending"
      :thumbnail="movie.thumbnail"
      :title="movie.title"
      :rating="movie.rating"
      :year="movie.year"
      class="carrousel-card"
    />
  </div>

  <h2 class="heading-secondary">Recommended</h2>
  <div class="grid-layout">
    <MovieCard
      v-for="movie in isNotTrending"
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

const trending = ref()
const isNotTrending = ref()

onMounted(() => isTrending())

const isTrending = () => {
  trending.value = data.filter((data) => data.isTrending)
  isNotTrending.value = data.filter((data) => !data.isTrending)
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
