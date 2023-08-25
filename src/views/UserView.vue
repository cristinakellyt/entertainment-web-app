<template>
  <UserPageView :contentPageKeywords="pageContent()" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePageContentStore } from '@/stores/pageContentStore'
import UserPageView from '@/views/UserPageView.vue'

const route = useRoute()
const pageContentStore = usePageContentStore()

const pageContent = () => {
  return pageContentStore.fetchPageContent(route.params.data)
}
</script>
