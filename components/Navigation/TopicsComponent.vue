<template>
   <div>
     <aside aria-label="Sidebar">
       <div class="overflow-y-auto py-4 px-3 rounded">
         <ul class="space-y-2">
            <li>
             <div class="cursor-pointer">
               <NuxtLink :to="{ path: '/category/allthingsgreat' }">All Things Great</NuxtLink>
             </div>
           </li>
           <li>
             <div class="cursor-pointer">
               <NuxtLink :to="{ path: '/category/combatsports' }">Combat Sports</NuxtLink>
             </div>
           </li>
           <li>
             <div class="cursor-pointer">
               <NuxtLink :to="{ path: '/category/cryptocurrency' }">Cryptocurrency</NuxtLink>
             </div>
           </li>
           <li>
             <div class="cursor-pointer">
               <NuxtLink :to="{ path: '/category/ait' }">Technology and A.I.</NuxtLink>
             </div>
           </li>
           <li>
             <div class="cursor-pointer">
               <NuxtLink :to="{ path: '/category/healthandfitness' }">Health and Fitness</NuxtLink>
             </div>
           </li>
           <li>
             <div class="cursor-pointer">
               <NuxtLink :to="{ path: '/category/extraordinary' }">Extraordinary</NuxtLink>
             </div>
           </li>
           <li>
             <div class="cursor-pointer">
               <NuxtLink :to="{ path: '/category/matchupanalysis' }">Matchup Analysis</NuxtLink>
             </div>
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
 