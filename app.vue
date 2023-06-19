<template>
  <div class="bg-gradient-to-r from-gray-900 to-gray-500">
    <!-- <VitePwaManifest/> -->
    <!-- These head attributes can also be defined reactively in setup -->

    <Head>
    </Head>
    <NuxtLayout v-slot:default="{ routeCategory }">
      <main
        class="main-content relative overflow-hidden rounded w-full pb-[75px] pt-4 bg-primary-dark flex flex-row justify-center">
        <img src="./assets/images/waves.svg" class="w-full absolute h-[649px]  left-0 overflow-hidden" alt="">
        <div class="relative h-full w-[27%] mr-4 shadow-2xl z-[1] rounded bg-white overflow-hidden hidden sm:block">
          <NavigationArticleTopicsComponent v-if="routeCategory === 'category' || routeCategory === 'articles'" class=" w-full h-full " />
          <NavigationAboutTopicsComponent v-if="routeCategory === 'about'" class=" w-full h-full" />
        </div>
        <div ref="scrollContainer" class="h-screen/60 sm:h-screen relative rounded z-[1] w-[95%] sm:w-[67%] bg-white overflow-y-scroll">
        <NuxtPage class="w-full h-full" />
        </div>
      </main>
    </NuxtLayout>
    <NavigationMobileLinksComponent class="sm:hidden"/>
    

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useAppStateStore } from '@/stores/appstate.store'

const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
const userInput = ref([]);

const { setNuxtPageScrollPosition } = useAppStateStore()

const scrollContainer = ref(null)
const handleScroll = () => {
  setNuxtPageScrollPosition(scrollContainer.value.scrollTop)
}

function onKeydown(event) {
  userInput.value.push(event.key);

  // If the user input is longer than the Konami code, remove the first element
  if (userInput.value.length > konamiCode.length) {
    userInput.value.shift();
  }

  // Check if the user input matches the Konami code
  if (JSON.stringify(userInput.value) === JSON.stringify(konamiCode)) {
    console.log('Konami code entered!'); // Or trigger any event you want here
    userInput.value = []; // Reset the user input
  }
}

onMounted(() => {
  nextTick(() => {
      scrollContainer.value.addEventListener('scroll', handleScroll)
  })
  window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  nextTick(() => {
      scrollContainer.value.addEventListener('scroll', handleScroll)
  })
  window.removeEventListener('keydown', onKeydown);
});

</script>


<style>
/* Transitions for all NuxtPages
Configure the style naming inside of nuxt.config.ts
*/

.move-enter-active,
.move-leave-active {
  transition: transform 1s ease;
}

.move-enter,
.move-leave-to {
  transform: translateX(-100%);
}

.move-enter-to,
.move-leave {
  transform: translateX(0);
}


.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: .25s;
}

.fade-enter-from,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  transform: translate(0, 100px);
  transition-duration: .25s;
}

.main-content {
  font-family: 'Futura';
}</style>