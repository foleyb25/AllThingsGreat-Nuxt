<template>
    <ul class="flex justify-center items-center z-50 bg-white shadow-lg p-2 fixed bottom-0 left-0 right-0">
      <li class="w-1/2 flex items-center justify-center border-r border-black">
    <NuxtLink to="/" class="tab-link" :class="articlesClass">
      <font-awesome-icon :icon="['fas', 'globe']"></font-awesome-icon>
      Articles
    </NuxtLink>
  </li>
  <li class="w-1/2 flex items-center justify-center border-r border-black">
    <NuxtLink to="/about/main" class="tab-link" :class="aboutClass">
      <font-awesome-icon :icon="['fas', 'address-card']" ></font-awesome-icon>
      About
    </NuxtLink>
  </li>
    </ul>
</template>

<script setup>
import { useAppStateStore } from '@/stores/appstate.store'
import { storeToRefs } from 'pinia';


//url set in appstate.global.js middleware
const { getUrl } = storeToRefs(useAppStateStore())


//highlight tab based on url paths
const articlesClass = computed(() => {
  return getUrl.value === '/' || getUrl.value.startsWith('/category') || getUrl.value.startsWith('/articles')
    ? 'text-[#40e0d0] flex flex-col items-center justify-center w-1/2'
    : 'text-[#111827] flex flex-col items-center justify-center w-1/2'
})

const aboutClass = computed(() => {
  return getUrl.value.startsWith('/about')
    ? 'text-[#40e0d0] flex flex-col items-center justify-center w-1/2'
    : 'text-[#111827] flex flex-col items-center justify-center w-1/2'
})
</script>

<style>
.tab-link {
  transition: color 0.3s ease;
}
</style>