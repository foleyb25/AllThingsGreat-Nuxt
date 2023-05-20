<template>
    <div class="p-4 max-h-screen bg-gray-50 overflow-scroll shadow-2xl">
        <div class="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <transition-group :css="false" @enter="onEnter">
                <div v-for="(article, index) in getAllArticles" :key="article._id" :data-index="index">
                    <NuxtLink :to="`/articles/${article.slug}`" class="flex justify-center items-center">
                        <ArticleComponent :article="article" class="font-sans aspect-[14/15] w-[90%] shadow-2xl">
                        </ArticleComponent>
                    </NuxtLink>
                </div>
            </transition-group>
            <button @click="paginate">Load More</button>
        </div>
    </div>
</template>
  
<script setup>
import { useArticleStore } from '@/stores/article.store'
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap';

const route = useRoute()
const { retrieveArticles, resetPageNumber, resetArticleList } = useArticleStore()
const { getAllArticles } = storeToRefs(useArticleStore())


onMounted(async () => {
    await nextTick()
    await resetPageNumber();
    await resetArticleList();
    await retrieveArticles(route.params.category);
})

const paginate = async () => {
    await retrieveArticles(route.params.category);
}

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
  
  
  
