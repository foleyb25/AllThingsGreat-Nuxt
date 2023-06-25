<template>
    <div class="p-4 max-h-screen bg-gray-50 overflow-scroll-y shadow-2xl">
        <div class="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <transition-group :css="false" @enter="onEnter">
                <div v-if="getAllArticles.length > 0" v-for="(article, index) in getAllArticles" :key="article._id" :data-index="index">
                    <NuxtLink :to="`/articles/${article.slug}`" class="flex justify-center items-center">
                        <ArticleComponent :article="article" class="font-sans aspect-[14/15] w-[90%] shadow-2xl">
                        </ArticleComponent>
                    </NuxtLink>
                </div>
                <div v-else-if="!getIsLoading && !getError" class="flex justify-center items-center mt-4">
                    <div>No Articles To Show For This Category</div>
                </div>
            </transition-group>
        </div>
        <div v-if="getIsLoading" class="flex mt-8 justify-center items-center">
            <SpinnerComponent />
        </div>
        <div v-else-if="getError" class="mt-8 w-full flex justify-center items-center">
            <button v-if="getHasMore" @click="paginate"
                class="bg-[#111827] hover:bg-[#6b7280] text-white font-bold py-2 px-4 rounded">
                Retry
            </button>
        </div>
        <div v-else class="mt-8 w-full flex justify-center items-center">
            <button v-if="getHasMore" @click="paginate"
                class="bg-[#111827] hover:bg-[#6b7280] text-white font-bold py-2 px-4 rounded">
                Load More
            </button>
        </div>
    </div>
</template>
  
<script setup>
import { useArticleStore } from '@/stores/article.store'
import { useAppStateStore } from '@/stores/appstate.store'
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap';

const route = useRoute()
const { retrieveArticles, resetState } = useArticleStore()
const { preserveState } = useAppStateStore()
const { getAllArticles, getHasMore, getIsLoading, getError } = storeToRefs(useArticleStore())
const { getIsPreserveState } = storeToRefs(useAppStateStore())

onMounted(async () => {
    await nextTick()
    if (!getIsPreserveState.value) {
        await resetState()
        await retrieveArticles(route.params.category)
    }
    //Since this is a top level route we are going to unpreserve the state
    await preserveState(false)
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
  
  
  
