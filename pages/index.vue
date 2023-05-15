<template>
  <div class=" max-h-screen bg-gray-50 overflow-scroll shadow-2xl">
      <div class="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <div v-for="article in getAllArticles" :key="article._id">
            <NuxtLink :to="`/articles/${article.slug}`" class="flex justify-center items-center">
              <ArticleComponent :article="article" class="font-sans aspect-[14/15] w-[90%] shadow-2xl"></ArticleComponent>
            </NuxtLink>
          </div>
      </div>
  </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/article.store'
import { storeToRefs } from 'pinia';

const { retrieveAllArticles } = useArticleStore()

await retrieveAllArticles()

const { getAllArticles } = storeToRefs(useArticleStore())



</script>


