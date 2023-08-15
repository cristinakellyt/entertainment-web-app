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
  padding-top: pxToRem(40);
  background-color: bisque;
}
</style>
