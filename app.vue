<template>
  <div>
    <!-- These head attributes can also be defined reactively in setup -->
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children=""></Style>
    </Head>
    <NuxtLayout>
      <main class="main-content relative overflow-hidden rounded w-[90%] mt-[60px] pb-4 pt-4 bg-primary-dark flex flex-row justify-center">
        <img src="./assets/images/waves.svg" class="w-full absolute h-[649px]  left-0 overflow-hidden" alt="">
        <NavigationTopicsComponent class="h-full w-[27%] mr-4 shadow-2xl z-[1] rounded bg-white"/>
        <NuxtPage class="h-screen rounded z-[1] w-[67%] bg-white"/>
      </main>
    </NuxtLayout>
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
  script: [ { children: 'console.log(\'Hello world\')' } ]
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
   .fade-enter-active, .fade-leave-active {
      transition-duration: .25s;
   }
   .fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      transform: translate(0, 100px);
      transition-duration: .25s;
   }

   .main-content {
    font-family: 'Futura';
   }
</style>