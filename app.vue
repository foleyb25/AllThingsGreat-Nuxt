<template>
  <div class="bg-gradient-to-r from-gray-900 to-gray-500">
    <!-- <VitePwaManifest/> -->
    <!-- These head attributes can also be defined reactively in setup -->

    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children=""></Style>
    </Head>
    <NuxtLayout>
      <main
        class="main-content relative overflow-hidden rounded w-full mt-[60px] pb-[100px] pt-4 bg-primary-dark flex flex-row justify-center">
        <img src="./assets/images/waves.svg" class="w-full absolute h-[649px]  left-0 overflow-hidden" alt="">
        <NavigationTopicsComponent class="h-full w-[27%] mr-4 shadow-2xl z-[1] rounded bg-white hidden sm:block" />
        <NuxtPage class="h-screen relative rounded p-4 z-[1] w-[95%] sm:w-[67%] bg-white overflow-y-scroll" />
      </main>

    </NuxtLayout>
    <div class="flex justify-around items-center z-50 bg-white shadow-lg p-2 fixed bottom-0 left-0 right-0 sm:hidden">
      <!-- <NuxtLink to="/" class="flex flex-col items-center w-1/2 border-r border-black">
    <font-awesome-icon :icon="['fas', 'shopping-cart']" />
    Shop
  </NuxtLink> -->
      <NuxtLink to="/" class="flex flex-col items-center w-1/2">
        <font-awesome-icon :icon="['fas', 'globe']" />
        Articles
      </NuxtLink>
      <!-- Repeat for other navigation links -->
    </div>

  </div>
</template>

<script setup>

const title = ref("Nuxt Template")

//Reactive Meta
//usehead() gives you ability to define meta tags on specific pages like a single blog post :og tags
useHead({
  title: 'Nuxt Template',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: (() => {
      return 'test'
    })
  },
  script: [{ children: 'console.log(\'Hello world\')' }]
})


</script>


<style>
/* Transitions for all NuxtPages
Configure the style naming inside of nuxt.config.ts
*/

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

p {
  color: black !important
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