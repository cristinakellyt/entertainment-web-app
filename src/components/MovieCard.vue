<template>
  <div class="movie-card">
    <div class="hovering">
      <img :src="imageSource" class="movie-image" />
      <div class="movie-play">
        <img src="/icon-play.svg" />
        <span>Play</span>
      </div>
    </div>
    <button class="bookmark" @click="toggleBookmarked">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        :fill="isBookmarked ? '#fff' : 'none'"
      >
        <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E" />
        <path
          d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
          stroke="white"
          stroke-width="1.5"
        />
      </svg>
    </button>

    <div class="movie-description" :class="isCarrousel ? 'carrousel-style' : 'normal-style'">
      <div class="movie-details">
        <p>{{ year }}</p>

        <span> &middot; </span>
        <img v-if="category === 'Movie'" src="/icon-category-movie.svg" />
        <img v-else src="/icon-category-tv.svg" />
        <p>{{ category }}</p>
        <span> &middot; </span>
        <p>{{ rating }}</p>
      </div>
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useScreenSizeStore } from '@/stores/screenSizeStore'
import { ref, watch } from 'vue'

const props = defineProps({
  category: { type: String },
  isBookmarked: { type: Boolean },
  isTrending: { type: Boolean },
  rating: { type: String },
  thumbnail: { type: Object },
  title: { type: String },
  year: { type: Number },
  isCarrousel: { type: Boolean }
})

const emit = defineEmits(['toggleBookmark'])
const screenSizeStore = useScreenSizeStore()

const imageSource = ref(null)

watch(
  () => screenSizeStore.isMobile,
  () => {
    if (props.isTrending && !screenSizeStore.isMobile && props.isCarrousel) {
      imageSource.value = props.thumbnail.trending.large
    } else if (props.isTrending && screenSizeStore.isMobile && props.isCarrousel) {
      imageSource.value = props.thumbnail.trending.small
    } else if (
      (!props.isTrending && !screenSizeStore.isMobile) ||
      (props.isTrending && !screenSizeStore.isMobile)
    ) {
      imageSource.value = props.thumbnail.regular.large
    } else if (
      (!props.isTrending && screenSizeStore.isMobile) ||
      (props.isTrending && screenSizeStore.isMobile)
    ) {
      imageSource.value = props.thumbnail.regular.small
    }
  },
  { immediate: true }
)

const toggleBookmarked = () => {
  emit('toggleBookmark', props.title)
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.movie-card {
  position: relative;
}
.movie-image {
  position: relative;
}

.movie-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  display: flex;
  align-items: center;
  gap: pxToRem(10);
  pointer-events: none;
  border-radius: pxToRem(28);
  padding: pxToRem(5) pxToRem(15);
}

.hovering {
  position: relative;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
  border-radius: pxToRem(8);
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;

  &:hover .movie-image {
    z-index: -40;
  }

  &:hover .movie-play {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.25);
    pointer-events: all;
  }
}

.bookmark {
  position: absolute;
  top: pxToRem(16);
  right: pxToRem(16);
  border-radius: 50px;
  cursor: pointer;
  background: none;
  border: none;
}

.movie-description {
  display: flex;
  flex-direction: column;
}

.movie-details {
  display: flex;
  align-items: center;
  gap: pxToRem(10);
}

.carrousel-style {
  position: absolute;
  bottom: 10%;
  left: 5%;
  & p {
    @extend %body-medium;
  }

  & h3 {
    @extend %heading-small;
  }
}

.normal-style {
  & p {
    @extend %body-small;
  }

  & h3 {
    @extend %heading-extra-small;
  }
}
</style>
