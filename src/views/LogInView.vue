<template>
  <h1>Implement LogIn</h1>
  <button class="back-btn" @click="goBack">Back</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.back-btn {
  align-self: flex-start;
  padding: pxToRem(10);
  border: 1px solid $red;
  background-color: transparent;
  color: $red;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
  }
}
</style>
