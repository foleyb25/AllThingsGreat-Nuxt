<template>
  <div class="overflow-y-scroll">
    <!-- Back Button -->
    <button class="sticky top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full z-50" @click="goBack">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <div class="relative p-4">
      <header class="grid grid-cols-2 gap-5 border-b border-black">
        <div class="flex items-center text-md sm:text-md md:text-lg lg:text-xl xl:text-xl">
          <img :src="getArticle?.writer.profileImageUrl" alt="Author's Avatar" class="w-20 h-20 rounded-full mr-2" />
          <h4 class="font-bold">{{ getArticle.writer.nickName }}</h4>
        </div>

        <div class="flex flex-col md:flex-row lg:justify-between text-xs sm:text-sm md:text-xs lg:text-lg xl:text-xl">
          <div class="flex flex-col md:flex-row lg:flex-col lg:mb-4">
            <div class="m-2"><strong>Published:</strong> <i class="text-gray-800">{{ formatDate(getArticle?.createdAt) }}</i></div>
            <div class="m-2"><strong>Updated:</strong> <i class="text-gray-800">{{
              formatDate(getArticle?.updatedAt) }}</i></div>
          </div>

          <p class="m-2"><strong>Read Time:</strong> <i class="text-gray-800"> {{ getArticle?.estimatedReadTime }}
            minutes</i></p>
        </div>



        <!-- <div class="flex justify-start">
          <button class="text-white rounded">
            <font-awesome-icon icon="fa-brands fa-twitter-square" size="2x" class="text-[#1DA1F2]" />
          </button>
        </div> -->

      </header>
      <div ref="target" class="relative mt-12">
        <img :src="getArticle?.imageUrl" alt="Blog image" class="rounded-xl w-full aspect-[3/2] object-cover" />
        <div class="rounded-xl absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 class="absolute inset-0 flex items-center justify-center text-white text-2xl p-5">
          <div id="typedtext" class="bg-black bg-opacity-40 text-white text-md sm:text-lg md:text-xl lg:text-3xl xl:text-4xl" style="font-family: 'vcr'" v-html="typedText">
          </div>
        </h1>
      </div>
      <div class="relative article-content" v-html="getArticle?.bodyHTML"></div>
    </div>
  </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/article.store'
import { useAppStateStore } from '@/stores/appstate.store'
import { storeToRefs } from 'pinia';
import { ref, onMounted, onUpdated } from 'vue';

const description = ref(''); // This will hold the description
const pageTitle = ref('');
const pageImageUrl = ref('');


definePageMeta({
  //retrieves single article
  middleware: ['article']
})


const router = useRouter();

const moment = (await import('moment')).default

const { preserveState} = useAppStateStore()

const { getArticle, getAllArticles } = storeToRefs(useArticleStore())

function getFirstPTagText(htmlString) {
  if (typeof window === 'undefined') {
    return ''; // or some default value for server side
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');
  const firstPTag = doc.querySelector('p');
  return firstPTag ? firstPTag.textContent : '';
}

const firstPText = getFirstPTagText(getArticle.bodyHTML)

useHead( () => ({
  title: `${pageTitle.value}`,
  meta: [
    // Basic meta tags
    { hid: 'description', name: 'description', content: description.value },
    //open graph
            { hid: 'og:title', property: 'og:title', content: pageTitle.value },
            { hid: 'og:description', property: 'og:description', content: description.value },
            { hid: 'og:image', property: 'og:image', content: pageImageUrl.value},

    // twitter card
    { name: 'twitter:card', content: 'summary_large_image' },  // or 'summary'
        { name: 'twitter:site', content: '@_bfoley' },
    { hid: "twitter:title", name: "twitter:title", content: pageTitle.value },
            { hid: 'twitter:description', name: 'twitter:description', content: description.value },
            { hid: "twitter:image", name: "twitter:image", content: pageImageUrl.value},
  ],
  
}))

const formatDate = (timestamp) => {
  return moment(timestamp).fromNow()
}

const goBack = async () => {
  if (getAllArticles.value.length > 0) {
    await preserveState(true)
  }
  router.back();
};




const target = ref(null)

//initiates typewriter animation
const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        typewriter();
      }
    },
  );

let typedText = ref(''); 
let aText = ref([getArticle?.value.title]) 
let iIndex = ref(0); 
let iTextPos = ref(0); 
let iScrollAt = ref(20); 
let iSpeed = ref(30);
let timer = ref(null); // Keep track of setTimeout

async function typewriter() {
  let iRow = Math.max(0, iIndex.value - iScrollAt.value);
  typedText.value = '';

  while (iRow < iIndex.value) {
    typedText.value += aText.value[iRow++] + '\n';
  }

  typedText.value += aText.value[iIndex.value].substring(0, iTextPos.value) + '<div class="cursor"></div>';

  if (iTextPos.value++ == aText.value[iIndex.value]?.length) {
    iTextPos.value = 0;
    iIndex.value++;

    if (iIndex.value != aText.value.length) {
      timer.value = setTimeout(typewriter, 500);
    }
  } else {
    timer.value = setTimeout(typewriter, iSpeed.value);
  }
}

// Clear the timeout when the component is unmounted
onBeforeUnmount(() => {
  if (timer.value) {
    clearTimeout(timer.value);
  }
});

onMounted(() => {
  description.value = getFirstPTagText(getArticle.value.bodyHTML);
  pageTitle.value = getArticle.value.title;
  pageImageUrl.value = getArticle.value.imageUrl;
	loadTwitterWidget();
  loadInstagramWidget();
});

onUpdated(() => {
  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load();
  }
  loadInstagramWidget();
});

const loadTwitterWidget = () => {
  if (!window.twttr) {
    let script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.head.appendChild(script);
  }
};

const loadInstagramWidget = () => {
  // Remove existing Instagram embed script
  let existingScript = document.getElementById('instagram-embed-script');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new Instagram embed script
  let script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.id = 'instagram-embed-script';
  script.src = "//www.instagram.com/embed.js";
  document.body.appendChild(script);
};

</script>

<style lang="scss">
.article-content {

  .twitter-tweet {
    @apply mx-auto;
    margin-top: 40px !important;
    max-width: 100%;
  }

  iframe {
    max-width: 100%;
    @apply mx-auto aspect-video w-full lg:w-2/3;
    display: block !important;

  }

  iframe.instagram-media {
    margin-left: auto !important;
    margin-right: auto !important;
    
  }

  img {
    @apply mx-auto my-12;
    max-width: 100% !important;
  }

  p {
    @apply text-left m-1;
  }

  h1 {
    @apply text-4xl font-bold m-1;
  }

  h2 {
    @apply text-3xl font-semibold m-1;
  }

  h3 {
    @apply text-2xl font-semibold m-1;
  }

  h4 {
    @apply text-xl font-semibold m-1;
  }

  h5 {
    @apply text-lg font-medium m-1;
  }

  h6 {
    @apply text-base font-medium m-1;
  }

  /* Add your additional styles here */
}
</style>

