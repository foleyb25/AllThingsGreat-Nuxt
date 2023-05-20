<template>
  <div>
    <NavigationHeaderComponent :toggleMenu="toggleMenu"/>
    <NavigationSlideComponent v-on:toggleMenu="toggleMenu" class="block sm:hidden" :isOpen="isOpen" >
      <NavigationArticleTopicsComponent v-if="isOpen && (routeCategory === 'category' || routeCategory === 'articles')" @linkClicked="toggleMenu" />
      <NavigationAboutTopicsComponent v-if="isOpen && routeCategory === 'about'" @linkClicked="toggleMenu" />
    </NavigationSlideComponent>
    <slot :routeCategory="routeCategory"/>
    <NavigationFooterComponent class="hidden sm:flex" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';

const isOpen = ref(false)
const route = useRoute();

function extractFirstDirectory(path) {
  if (path === '/') {
    return 'category'
  }
    const pathParts = path.split('/');
    return pathParts[1]; // because split() returns an array that starts with an empty string
}

const routeCategory = ref(extractFirstDirectory(route.fullPath));

watch(() => route.fullPath, (newVal, oldVal) => {
  routeCategory.value = extractFirstDirectory(newVal);
});

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}






</script>