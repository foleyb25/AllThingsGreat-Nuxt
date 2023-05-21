<template>
    <ul class="flex justify-center items-center z-50 bg-white shadow-lg p-2 fixed bottom-0 left-0 right-0">
      <li class="w-1/2 flex items-center justify-center border-r border-black">
    <NuxtLink to="/" class="flex flex-col items-center justify-center w-1/2">
      <font-awesome-icon :icon="['fas', 'globe']"></font-awesome-icon>
      Articles
    </NuxtLink>
  </li>
  <li class="w-1/2 flex items-center justify-center">
    <NuxtLink to="/about/main" class="flex flex-col items-center justify-center w-1/2">
      <font-awesome-icon :icon="['fas', 'address-card']" ></font-awesome-icon>
      About
    </NuxtLink>
  </li>
    </ul>
</template>