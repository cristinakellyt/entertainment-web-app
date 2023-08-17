<template>
  <BaseWidth>
    <div class="layout">
      <NavSideBar />
      <div class="main-content">
        <SearchBar :size="screenSizeStore.isMobile ? 'small' : 'large'" />
        <router-view></router-view>
      </div>
    </div>
  </BaseWidth>
</template>

<script setup>
import BaseWidth from '@/components/ui/BaseWidth.vue'
import NavSideBar from '@/components/layout/NavSideBar.vue'
import SearchBar from '@/components/ui/SearchBar.vue'
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
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: pxToRem(35);
  margin: pxToRem(32) 0;
}

@media only screen and (max-width: 48em) {
  .layout {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
