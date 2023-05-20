<template>
    <div class="parallax " :style="{ backgroundImage: `url(${image})`, backgroundPositionY: `${getNuxtPageScrollPosition * (0.0)}px`}">
    <div class="flex flex-col items-start w-full h-full bg-[#111827] text-white bg-opacity-50" style="font-family: 'vcr'">
      <slot></slot>
    </div>
    </div>
  </template>
  
  <script setup>
  import { useAppStateStore } from '@/stores/appstate.store'
import { storeToRefs } from 'pinia';
 import { ref, onMounted, toRefs } from 'vue'

const { getNuxtPageScrollPosition } = storeToRefs(useAppStateStore())
  
  // Props
  const props = defineProps({
    imageSrc: String
  })

 // convert props to reactive references
  const { imageSrc } = toRefs(props)

  // Image
  const image = ref('')

  onMounted( async () => {
    const imgModule = await import(`@/assets/images/${imageSrc.value}.png`)
    image.value = imgModule.default
  })
  
  </script>
  
  <style scoped>
  .parallax {
    height: 100vh;
    border-bottom: 10px solid black;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  </style>
  