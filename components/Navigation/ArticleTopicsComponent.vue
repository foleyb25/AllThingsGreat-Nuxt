<template>
  <div>
    <aside aria-label="Sidebar" class="w-full text-white sm:text-black">
      <div class="overflow-y-auto py-4 px-3 rounded ">
        <ul class="divide-y divide-gray-200 sm:divide-opacity-0">
          <li>
            <NuxtLink class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white" :to="{ path: '/category/allthingsgreat' }">
              <div @click="$emit('linkClicked')" class="cursor-pointer">All Things Great</div>
            </NuxtLink>
          </li>
          <li>

            <NuxtLink class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" :to="{ path: '/category/combatsports' }">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Combat Sports</div>
            </NuxtLink>

          </li>
          <li>

            <NuxtLink class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" :to="{ path: '/category/collegefootball' }">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Cryptocurrency</div>
            </NuxtLink>
          </li>
          <li>

            <NuxtLink class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" :to="{ path: '/category/ait' }">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Technology and A.I.</div>
            </NuxtLink>
          </li>
          <li>

            <NuxtLink class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" :to="{ path: '/category/healthandfitness' }">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Health and Fitness</div>
            </NuxtLink>

          </li>
          <li>

            <NuxtLink class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" :to="{ path: '/category/extraordinary' }">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Extraordinary</div>
            </NuxtLink>
          </li>
          <li>

            <NuxtLink class="menu-link block py-2 px-3 hover:bg-gray-700  sm:hover:bg-white rounded" :to="{ path: '/category/matchupanalysis' }">
              <div @click="$emit('linkClicked')" class="cursor-pointer">Matchup Analysis</div>
            </NuxtLink>
          </li>

        </ul>
      </div>
    </aside>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
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


 