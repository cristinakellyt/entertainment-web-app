<template>
  <RouterView :key="$route.fullPath" />
</template>

<script setup>
import { useScreenSizeStore } from '@/stores/screenSizeStore'
import { RouterView } from 'vue-router'

const screenSizeStore = useScreenSizeStore()
screenSizeStore.initResponsive()
</script>
