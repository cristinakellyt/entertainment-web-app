<template>
  <div :class="`search-bar ${size}`">
    <img :class="`search-icon ${size}`" src="@/assets/icon-search.svg" />
    <input :class="`${size}`" type="text" placeholder="Search for movies or TV series" />
  </div>
</template>

<script setup>
defineProps({
  size: String
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.search-bar {
  display: flex;

  &.large {
    gap: pxToRem(20);
  }

  &.small {
    gap: pxToRem(16);
  }
}

input {
  width: 100%;
  font-family: 'Outfit', sans-serif;
  color: $pure-white;
  font-weight: 300;
  background-color: transparent;
  caret-color: $red;
  border: none;
  border-bottom: 1px solid transparent;

  &.large {
    padding-bottom: pxToRem(10);
    font-size: pxToRem(24);
  }

  &.small {
    font-size: pxToRem(16);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid $pure-white;
  }

  &::placeholder {
    color: inherit;
    opacity: 0.4979;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
}

.search-icon {
  &.large {
    width: pxToRem(32);
    height: pxToRem(32);
  }

  &.small {
    width: pxToRem(24);
    height: pxToRem(24);
  }
}
</style>
