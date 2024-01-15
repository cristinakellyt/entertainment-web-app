<template>
  <div :class="`search-bar ${size}`">
    <img :class="`search-icon ${size}`" src="/icon-search.svg" />
    <input
      :class="`${size}`"
      type="text"
      :placeholder="`Search for ${placeholderSearchFor}`"
      v-model.trim="searchKey"
      @input="onInputHandler"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  size: String,
  placeholderSearchFor: String
})
const emit = defineEmits(['onSearch'])

const searchKey = ref('')

const onInputHandler = () => {
  emit('onSearch', searchKey.value)
}

watch(
  () => props.placeholderSearchFor,
  () => {
    searchKey.value = ''
    emit('onSearch', searchKey.value)
  }
)
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
  @extend %heading-medium;
  width: 100%;
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
