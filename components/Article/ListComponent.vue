<template>
    <div 
      class="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      <transition-group :css="false" @enter="onEnter">
        <div v-for="(article, index) in articles" :key="article._id" :data-index="index">
          <NuxtLink :to="`/articles/${article.slug}`" class="flex justify-center items-center">
            <ArticleComponent :article="article" class="font-sans aspect-[14/15] w-[90%] shadow-2xl"></ArticleComponent>
          </NuxtLink>
        </div>
      </transition-group>
    </div>
</template>

<script setup>
import gsap from "gsap";

defineProps({
    articles: {
        required: true,
    }
})


function onEnter(el, done) {
  gsap.fromTo(
    el,
    {
      opacity: 0.01,
      scale: 0.01,
    },
    {
      scale: 1,
      opacity: 1,
      delay: el.dataset.index * 0.15,
      onComplete: done,
    }
  );
}
</script>
