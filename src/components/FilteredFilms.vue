<template>
  <h2 v-if="isSearching" class="heading-secondary">
    Found {{ numberOfSearchResult }} results for '{{ searchFor }}'
  </h2>
  <h2 v-else class="heading-secondary"><slot>Name</slot></h2>

  <div :class="isCarrousel ? 'carrousel-scroll' : ''">
    <ul :class="isCarrousel ? 'carrousel' : 'grid-layout'">
      <MovieCard
        @toggleBookmark="changeBookmark"
        v-for="movie in filteredFilms"
        :key="movie.title"
        :category="movie.category"
        :isBookmarked="movie.isBookmarked"
        :isTrending="movie.isTrending"
        :thumbnail="movie.thumbnail"
        :title="movie.title"
        :rating="movie.rating"
        :year="movie.year"
        :isCarrousel="isCarrousel"
        :class="isCarrousel ? 'carrousel-card' : 'movie-card'"
      />
    </ul>
  </div>
</template>

<script setup>
import MovieCard from '@/components/MovieCard.vue'
import { ref, onMounted } from 'vue'
import { useAvailableFilmsStore } from '@/stores/availableFilmsStore'

const props = defineProps({
  filterBy: { type: String },
  isCarrousel: { type: Boolean },
  searchFor: { type: String }
})

const availableFilmsStore = useAvailableFilmsStore()
const filteredFilms = ref()
const isSearching = ref(false)
const numberOfSearchResult = ref()

onMounted(() => {
  filterAvailableFilms(props.filterBy)
})

const filterAvailableFilms = (filterKey) => {
  filteredFilms.value = availableFilmsStore.filterBy(filterKey)

  if (props.searchFor) {
    isSearching.value = true
    filteredFilms.value = filteredFilms.value.filter((films) =>
      films.title.toLowerCase().includes(props.searchFor.toLowerCase())
    )
    numberOfSearchResult.value = filteredFilms.value.length
  }
}

const changeBookmark = (film) => {
  availableFilmsStore.toggleBookmarked(film)
  filteredFilms.value = availableFilmsStore.filterBy(props.filterBy)
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';
.carrousel {
  display: flex;
  gap: pxToRem(40);
  width: fit-content;

  &-scroll {
    overflow: scroll;
    cursor: pointer;

    &::-webkit-scrollbar {
      width: 0;
      height: pxToRem(5);
      background-color: $pure-white;
      border-radius: pxToRem(10);
    }

    &::-webkit-scrollbar-thumb {
      background-color: $red;
      border-radius: pxToRem(10);
    }
  }

  &-card {
    width: pxToRem(470);
    height: pxToRem(230);
  }
}

.movie-card {
  max-width: pxToRem(293);
}

.heading-secondary {
  @extend %heading-large;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(pxToRem(232), max-content));
  gap: pxToRem(40);
}

@include media-query($tablet) {
  .grid-layout {
    grid-template-columns: repeat(auto-fit, minmax(pxToRem(180), max-content));
    gap: pxToRem(29);
    justify-content: center;
  }

  .carrousel {
    gap: pxToRem(29);

    &-card {
      width: pxToRem(350);
      height: pxToRem(170);
    }
  }
}

@include media-query($mobile-large) {
  .grid-layout {
    grid-template-columns: repeat(auto-fit, minmax(pxToRem(128), max-content));
    gap: pxToRem(16);
  }

  .heading-secondary {
    font-size: pxToRem(20);
  }

  .carrousel {
    gap: pxToRem(16);

    &-card {
      width: pxToRem(240);
      height: pxToRem(140);
    }
  }
}
</style>
