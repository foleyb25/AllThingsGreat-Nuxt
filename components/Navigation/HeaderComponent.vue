<template>
    <header>
      <nav class="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-500">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-gray-300 hover:text-white mr-4">
            <img src="~/assets/images/logo-80s-dark-bg.svg" alt="Logo" class="w-full h-full rounded-full">

          </NuxtLink>
          <span class="text-xl font-semibold text-white ml-2"></span>
        </div>
        <ul class="flex">
          <li><NuxtLink to="/about" class="text-gray-300 hover:text-white mr-4"><font-awesome-icon :icon="['fab', 'twitter-square']" size="2x"/></NuxtLink></li>
          <li><NuxtLink to="/posts/1" class="text-gray-300 hover:text-white mr-4"><font-awesome-icon :icon="['fab', 'discord']" size="2x"/></NuxtLink></li>
          <li><NuxtLink to="/posts/2" class="text-gray-300 hover:text-white"><font-awesome-icon :icon="['fab', 'instagram-square']" size="2x"/></NuxtLink></li>
        </ul>
      </nav>
    </header>
  </template>