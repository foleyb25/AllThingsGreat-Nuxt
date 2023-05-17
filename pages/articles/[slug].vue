<template>
    <div>
    
        <!-- Back Button -->
  <button class="sticky top-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded-full z-50" @click="goBack">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <div class="relative">
        <header class="grid grid-cols-2 gap-5 border-b border-black">
    <div class="flex items-center">
      <img :src="getArticle.writer.profileImageUrl" alt="Author's Avatar" class="w-12 h-12 rounded-full mr-2"/>
      <h4 class="font-bold">{{ getArticle.writer.nickName }}</h4>
    </div>

    <div class="flex justify-between">
      <p>Published: {{ formatDate(getArticle.createdAt) }} | Last Updated: {{ formatDate(getArticle.updatedAt) }}</p>
      <p>Estimated reading time: {{ 120 }} minutes</p>
    </div>

    <div class="flex justify-start">
      <!-- Replace with actual social share buttons -->      
      <button class="text-white rounded">
    <font-awesome-icon icon="fa-brands fa-twitter-square" size="2x" class="text-[#1DA1F2]" />
  </button>
    </div>

    <div class="flex justify-end">
      <p>Likes: {{ 11 }} </p>
      <p>Dislikes: {{ 2 }}</p>
    </div>
  </header>
  <header class="grid grid-cols-3 gap-5 border-b border-black">
    <div>Content:</div>
    <div>Structure: </div>
    <div>Organization: </div>
  </header>
  <header class="flex flex-row justify-center">
    <div>Smut:</div>
  </header>
  <div class="relative">
    <img :src="getArticle.imageUrl" alt="Blog image" class="rounded-xl w-full aspect-[3/2] object-cover" />
    <div class="rounded-xl absolute inset-0 bg-black bg-opacity-60"></div>
    <h1 class="absolute inset-0 flex items-center justify-center text-white text-2xl p-5">
        <div id="typedtext" class="bg-black bg-opacity-40 text-white"  style="font-family: 'vcr'" v-html="typedText"></div>
</h1>
  </div>
  <div v-html="getArticle.bodyHTML" class="flex flex-col justify-center items-center"></div>
</div>
    </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/article.store'
import { storeToRefs } from 'pinia';
import { ref, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const moment = (await import('moment')).default

const {slug} = useRoute().params

const { retrieveSingleArticle } = useArticleStore()

await retrieveSingleArticle(slug)

const { getArticle } = storeToRefs(useArticleStore())

const formatDate = (timestamp) => {
    return moment(timestamp).fromNow()
}

const goBack = () => {
  router.back();
};

let cursor = ref('_');  // underscore initially
let typedText = ref(''); // This will hold the text that's displayed in the template.
let aText = ref([getArticle.value.title]) // The lines of text to display.
let iIndex = ref(0); // The current index in aText.
let iArrLength = ref(aText.value[iIndex.value].length); // The length of the current line.
let iTextPos = ref(0); // The current position within the line.
let iScrollAt = ref(20); // The number of lines to scroll at a time.
let iSpeed = ref(30); // The speed of the typewriter.

watchEffect(() => {
  // Update iArrLength when iIndex changes.
  iArrLength.value = aText.value[iIndex.value]?.length;
});

function typewriter() {
  let iRow = Math.max(0, iIndex.value - iScrollAt.value);
  typedText.value = '';
  
  while (iRow < iIndex.value) {
    typedText.value += aText.value[iRow++] + '\n';
  }
  
  typedText.value += aText.value[iIndex.value].substring(0, iTextPos.value) + '<div class="cursor"></div>';
  
  if (iTextPos.value++ == iArrLength.value) {
    iTextPos.value = 0;
    iIndex.value++;
    
    if (iIndex.value != aText.value.length) {
      iArrLength.value = aText.value[iIndex.value].length;
      setTimeout(typewriter, 500);
    } 
  } else {
    setTimeout(typewriter, iSpeed.value);
  }
}


onMounted(typewriter); // Call typewriter when the component is mounted.



</script>

