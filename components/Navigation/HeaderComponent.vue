<template>
    <header>
      <nav class="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-500">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-gray-300 hover:text-white mr-4">
            <img src="@/assets/images/logo-80s-dark-bg.svg" alt="Logo" class="w-full h-full rounded-full">

          </NuxtLink>
          <span class="text-xl font-semibold text-white ml-2"></span>
        </div>
        <ul class="flex text-xs sm:text-base">
          <li class="m-2" v-for="link in socialLinks" :key="link.name">
            <NuxtLink :to="link.url" target="_blank" class="text-gray-300 hover:text-white mr-4">
              <font-awesome-icon :icon="['fab', link.icon]" size="2x"/>
            </NuxtLink>
          </li>
          <li class="m-2"><button  @click="toggleMenu" class="sm:hidden text-[#111827] hover:text-white"><font-awesome-icon :icon="['fas', 'bars']" size="2x"/></button></li>
        </ul>
      </nav>
      <ul id="navLinks" class="flex-row justify-center items-center hidden sm:flex">
          <NavigationLinksComponent/>
      </ul>
    </header>
  </template>

  <script setup>

const props = defineProps( [
  'toggleMenu'
])

const socialLinks = [
{
    name: 'Twitter',
    url: 'https://twitter.com/AllThingsG83856',
    icon: 'twitter-square'
  },
  {
    name: 'Discord',
    url: 'https://www.discord.com/',
    icon: 'discord'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/itsallthingsgreat/',
    icon: 'instagram-square'
  }

]


</script>

<style>
#navLinks > * {
  margin-left: 4vw;
}
</style>