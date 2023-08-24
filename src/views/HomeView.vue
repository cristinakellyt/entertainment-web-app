<template>
  <PageView :data="data" :key="forceRender"> </PageView>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import PageView from '@/views/PageView.vue'

const route = useRoute()
const data = ref(route.params.data ? JSON.parse(route.params.data) : '')

const forceRender = ref(0)

onBeforeRouteUpdate((to, from, next) => {
  if (to.params.data !== from.params.data) {
    forceRender.value += 1
    data.value = JSON.parse(to.params.data)
  }
  next()
})
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.main-content {
  display: flex;
  flex-direction: column;
  gap: pxToRem(35);
}
</style>
