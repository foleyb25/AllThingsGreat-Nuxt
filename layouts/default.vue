<template>
  <div>
    <NavigationHeaderComponent :toggleMenu="toggleMenu"/>
    <NavigationSlideComponent v-on:toggleMenu="toggleMenu" class="block sm:hidden" :isOpen="isOpen" >
      <NavigationTopicsComponent v-if="isOpen" @linkClicked="toggleMenu" />
    </NavigationSlideComponent>
    <slot />
    <NavigationFooterComponent class="hidden sm:flex" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

</script>