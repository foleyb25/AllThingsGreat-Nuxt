<template>
    <li>
        <button :disabled="getLinksDisabled" class="block font-semibold text-gray-300 hover:text-white mb-2" @click="handleLinkClick('/')">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Articles</div>
          </button>
    </li>
    <li>
        <button :disabled="getLinksDisabled" class="block font-semibold text-gray-300 hover:text-white mb-2" @click="handleLinkClick('/about/main')">
            About
          </button>
    </li>
    <!-- <li>
        <NuxtLink to="/store" class="block font-semibold text-gray-300 hover:text-white mb-2">Store</NuxtLink>
    </li> -->
</template>

<script setup>
import { useAppStateStore } from '@/stores/appstate.store'
import { storeToRefs } from 'pinia';

const router = useRouter();

//url set in appstate.global.js middleware
const { getLinksDisabled } = storeToRefs(useAppStateStore())

const handleLinkClick = (route) =>{
  router.push({ path: route });
}

</script>