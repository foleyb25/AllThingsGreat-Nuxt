<template>
    <div class="ml-4 max-h-screen bg-gray-50 overflow-scroll shadow-2xl">
        <div class="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <h1>Entertainment</h1>
            <div v-for="article in state.articles" class="h-full w-full flex justify-center items-center">
                <ArticleComponent :article="article" class="font-sans aspect-[14/15] mt-2 mb-2 w-[90%] shadow-2xl"></ArticleComponent>
            </div>
        </div>
    </div>
</template>

<script setup>
import ArticleComponent from '../../components/ArticleComponent.vue'
import { reactive } from 'vue';


const state = reactive({
articles: []
})
</script>