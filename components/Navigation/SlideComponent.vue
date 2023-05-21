<!-- Slide.vue -->
<template>
    <div>
    <Transition name="fade">
      <div v-if="props.isOpen" @click="toggleMenu" class="z-[49] fixed inset-0 w-screen h-screen bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
    </Transition>
      <Transition name="slide">
      <div v-if="props.isOpen" class="z-50 w-[60%] h-full fixed left-0 top-0 bg-[#111827] overflow-auto">
        <NuxtLink to="/">
        <img @click="toggleMenu" src="~/assets/images/logo-80s-dark-bg.svg" alt="Logo" class="w-full mt-10 rounded-full">
        </NuxtLink>
        <slot/>
      </div>
    </Transition>
  </div>
  </template>
  
  <script setup>
import { defineEmits } from 'vue'

  const props = defineProps( [
    'isOpen'
  ])

  const emit = defineEmits( [
    'toggleMenu'
  ])

  const toggleMenu = () => {
    emit('toggleMenu', {})
  }

  </script>
  
  <style scoped>
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}
.slide-enter-active {
  transition: transform .3s ease;
}
.slide-leave-active {
  transition: transform .3s ease;
}

  .fade-enter-from,
.fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0);
  transform: translateY(0)
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  backdrop-filter: blur(5px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease, backdrop-filter .3s ease;
}
  </style>
  