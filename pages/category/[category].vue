<template>
  <div class="p-4 max-h-screen bg-gray-50 overflow-y-scroll shadow-2xl">
    <div v-if="getIsLoading" class="mt-8 flex justify-center items-center">
      <SpinnerComponent />
    </div>
    <div v-else-if="getAllArticles.length > 0">
      <ArticleListComponent :articles="getAllArticles"/>
    </div>
    <div v-else class="flex justify-center items-center mt-4">
      <div>No Articles To Show For This Category</div>
    </div>

    <div v-if="getError" class="mt-8 w-full flex justify-center items-center">
      <button v-if="getHasMore" @click="paginate"
        class="bg-[#111827] hover:bg-[#6b7280] text-white font-bold py-2 px-4 rounded">
        Retry
      </button>
    </div>
    <div v-if="getHasMore" class="mt-8 w-full flex justify-center items-center">
      <button @click="paginate" class="bg-[#111827] hover:bg-[#6b7280] text-white font-bold py-2 px-4 rounded">
        Load More
      </button>
    </div>

  </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/article.store'
import { useAppStateStore } from '@/stores/appstate.store'
import { storeToRefs } from 'pinia';
import { onBeforeMount, nextTick } from 'vue'


const route = useRoute()
const { retrieveArticles, resetState } = useArticleStore()
const { preserveState } = useAppStateStore()
const { getAllArticles, getHasMore, getIsLoading, getError } = storeToRefs(useArticleStore())
const { getIsPreserveState } = storeToRefs(useAppStateStore())

onBeforeMount(async () => {
  await nextTick()
  if (!getIsPreserveState.value) {
    await resetState()
    await retrieveArticles(route.params.category)
  }
  //Since this is a top level route we are going to unpreserve the state
  await preserveState(false)
})

const paginate = async () => {
  await retrieveArticles(undefined);
}
</script>




  
  
