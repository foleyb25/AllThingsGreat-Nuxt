<template>
   <div>
     <aside aria-label="Sidebar">
       <div class="overflow-y-auto py-4 px-3 rounded">
         <ul class="space-y-2">
            <li>
             <div class="cursor-pointer">
               <NuxtLink to="/articles/great">All Things Great</NuxtLink>
             </div>
           </li>
           <li>
             <div class="cursor-pointer">
               <NuxtLink to="/articles/great">Combat Sports</NuxtLink>
             </div>
           </li>
           <li>
             <div class="cursor-pointer">
               <NuxtLink to="/articles/great">Cryptocurrency</NuxtLink>
             </div>
           </li>
           <li>
             <div class="cursor-pointer">
               <NuxtLink to="/articles/great">Technology and A.I.</NuxtLink>
             </div>
           </li>
           <li>
             <div class="cursor-pointer">
               <NuxtLink to="/articles/great">History</NuxtLink>
             </div>
           </li>
           <li>
             <div class="cursor-pointer">
               <NuxtLink to="/articles/great">Matchup Analysis</NuxtLink>
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
 