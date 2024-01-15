<template>
  <div class="base-width">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.base-width {
  max-width: $max-width;
  margin: 0 auto;
  padding: pxToRem(32) 0 pxToRem(32) pxToRem(32);
}

@include media-query($tablet) {
  .base-width {
    padding: pxToRem(32) 0;
  }
}

@include media-query($mobile-medium) {
  .base-width {
    padding: pxToRem(32) pxToRem(16);
  }
}
</style>
