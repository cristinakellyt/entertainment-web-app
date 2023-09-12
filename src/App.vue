<template>
  <BaseWidth>
    <NavSideBar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </BaseWidth>
</template>

<script setup>
import BaseWidth from '@/components/ui/BaseWidth.vue'
import NavSideBar from '@/components/layout/NavSideBar.vue'
import { useScreenSizeStore } from '@/stores/screenSizeStore'

const screenSizeStore = useScreenSizeStore()
screenSizeStore.initResponsive()
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.layout {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: pxToRem(32);
  overflow: hidden;
}

.main-content {
  margin: pxToRem(32) pxToRem(16) 0 0;
  padding-left: calc(pxToRem(96) + pxToRem(36));
}

@media only screen and (max-width: 48em) {
  .layout {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .main-content {
    margin: pxToRem(98) 0;
    padding-left: pxToRem(25);
    padding-right: pxToRem(25);
  }
}

@media only screen and (max-width: 23.438em) {
  .main-content {
    margin: pxToRem(50) 0;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
