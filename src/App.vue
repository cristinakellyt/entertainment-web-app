<template>
  <BaseWidth>
    <div class="layout">
      <NavSideBar />
      <div>
        <p>Search</p>
        <router-view></router-view>
      </div>
    </div>
  </BaseWidth>
</template>

<script setup>
import BaseWidth from '@/components/ui/BaseWidth.vue'
import NavSideBar from '@/components/layout/NavSideBar.vue'
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.layout {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
