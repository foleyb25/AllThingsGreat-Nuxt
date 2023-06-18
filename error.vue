<template>
    <div class="mt-24 flex flex-col justify-center items-center w-full">
      <img class="w-48 rounded-md" src="@/assets/images/80smiamivicelandscape.png" alt="">
      <p class="mt-8 text-7xl font-bold">{{error.statusCode}}</p>
      <p class="mt-8 text-6xl">Ooops.</p>
      <p class="mt-8">{{error.message}}</p>
      <button class="btn my-8 bg-black text-white p-4 rounded-xl" @click="handleError">Go Home...</button>
    </div>
  </template>
  
  <script setup>
    defineProps({
      error: Object
    })
    const handleError = () => clearError({ redirect: '/' })
  </script>