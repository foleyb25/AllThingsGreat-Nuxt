<template>
  <div>
    <aside aria-label="Sidebar" class="w-full text-white sm:text-black">
      <div class="overflow-y-auto py-4 px-3 rounded ">
        <ul class="divide-y divide-gray-200 sm:divide-opacity-0">
          <li>

            <button :disabled="getLinksDisabled" class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" @click="handleLinkClick('/category/allthingsgreat')">
              <div @click="$emit('linkClicked')" class="cursor-pointer">All Things Great</div>
          </button>

          </li>
          <li>

            <button :disabled="getLinksDisabled" class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" @click="handleLinkClick('/category/combatsports')">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Combat Sports</div>
          </button>

          </li>
          <li>

            <button :disabled="getLinksDisabled" class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" @click="handleLinkClick('/category/collegefootball')">
              <div @click="$emit('linkClicked')" class="cursor-pointer">College Football</div>
          </button>

          </li>
          <li>

            <button :disabled="getLinksDisabled" class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" @click="handleLinkClick('/category/ait')">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Technology</div>
          </button>

          </li>
          <li>

            <button :disabled="getLinksDisabled" class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" @click="handleLinkClick('/category/healthandfitness')">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Health and Fitness</div>
          </button>

          </li>
          <li>


            <button :disabled="getLinksDisabled" class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" @click="handleLinkClick('/category/extraordinary')">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Extraordinary</div>
          </button>

          </li>
          <li>

            <button :disabled="getLinksDisabled" class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" @click="handleLinkClick('/category/matchupanalysis')">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Matchup Analysis</div>
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


 