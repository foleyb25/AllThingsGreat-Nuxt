<template>
  <div class="p-4">

    <!-- Back Button -->
    <button class="sticky top-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded-full z-50" @click="goBack">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <div class="relative">
      <header class="grid grid-cols-2 gap-5 border-b border-black">
        <div class="flex items-center text-md sm:text-md md:text-lg lg:text-xl xl:text-xl">
          <img :src="getArticle.writer.profileImageUrl" alt="Author's Avatar" class="w-20 h-20 rounded-full mr-2" />
          <h4 class="font-bold">{{ getArticle.writer.nickName }}</h4>
        </div>

        <div class="flex flex-col md:flex-row lg:justify-between text-xs sm:text-sm md:text-xs lg:text-lg xl:text-xl">
          <div class="flex flex-col md:flex-row lg:flex-col lg:mb-4">
            <div class="m-2"><strong>Published:</strong> <i class="text-gray-800">{{ formatDate(getArticle.createdAt) }}</i></div>
            <div class="m-2"><strong>Updated:</strong> <i class="text-gray-800">{{
              formatDate(getArticle.updatedAt) }}</i></div>
          </div>

          <p class="m-2"><strong>Read Time:</strong> <i class="text-gray-800"> {{ getArticle.estimatedReadTime }}
            minutes</i></p>
        </div>



        <div class="flex justify-start">
          <!-- Replace with actual social share buttons -->
          <button class="text-white rounded">
            <font-awesome-icon icon="fa-brands fa-twitter-square" size="2x" class="text-[#1DA1F2]" />
          </button>
        </div>

      </header>
      <header class="grid grid-cols-3 gap-5 border-b border-black text-xs sm:text-xs md:text-sm lg:text-xl xl:text-xl">
        <div class="flex items-center justify-center">
          Content: {{ getArticle.evaluation.content }}/5
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffff00" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </span>
        </div>
        <div class="flex items-center justify-center">
          Structure: {{ getArticle.evaluation.structure }}/5
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffff00" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </span>
        </div>
        <div class="flex items-center justify-center">
          Organization: {{ getArticle.evaluation.organization }}/5
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffff00" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4 lg:w-6 lg:h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </span>
        </div>
      </header>
      <header class="flex flex-row justify-center mt-4">
        <div class="w-full bg-gradient-to-r rounded from-[#007FFF] to-[#FF073A] relative text-center"> Smut
          <div class="absolute top-0 mt-5 bg-black bg-opacity-75 h-full w-2 rounded"
            :style="{ left: (getArticle.evaluation.smut) * 10 + '%' }">
            <div class="mt-5 flex justify-center">{{ getArticle.evaluation.smut }}/10</div>
          </div>
        </div>
      </header>
      <div class="relative mt-12">
        <img :src="getArticle.imageUrl" alt="Blog image" class="rounded-xl w-full aspect-[3/2] object-cover" />
        <div class="rounded-xl absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 class="absolute inset-0 flex items-center justify-center text-white text-2xl p-5">
          <div id="typedtext" class="bg-black bg-opacity-40 text-white text-md sm:text-lg md:text-xl lg:text-3xl xl:text-4xl" style="font-family: 'vcr'" v-html="typedText">
          </div>
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

const { slug } = useRoute().params

const { retrieveSingleArticle } = useArticleStore()

await retrieveSingleArticle(slug)

const { getArticle } = storeToRefs(useArticleStore())

const formatDate = (timestamp) => {
  return moment(timestamp).fromNow()
}

const goBack = () => {
  router.back();
};

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
    console.log("IS THIS INFINITE?")
    setTimeout(typewriter, iSpeed.value);
  }
}


onMounted(typewriter); // Call typewriter when the component is mounted.



</script>

