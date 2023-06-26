<template>
    <div>
      <aside aria-label="Sidebar" class="w-full text-white sm:text-black">
        <div class="overflow-y-auto py-4 px-3 rounded ">
          <ul class="divide-y divide-gray-200 sm:divide-opacity-0">
            <li>
              <button :disabled="getLinksDisabled" class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" @click="handleLinkClick('/about/main')">
              <div @click="$emit('linkClicked')" class="cursor-pointer">About</div>
          </button>

            </li>
            <li>
              <button :disabled="getLinksDisabled" class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" @click="handleLinkClick('/about/recruitment')">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Become a Writer</div>
          </button>

            </li>
          </ul>
        </div>
      </aside>
    </div>
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
  
  <style scoped>
  .menu-link::after {
    content: '';
    top: 0;
    left: 0;
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width .3s;
  }
  .menu-link:hover::after {
    width: 100%;
  }
  </style>
  
  
   