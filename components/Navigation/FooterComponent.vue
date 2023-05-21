<template>
    <footer class="px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-500 text-gray-300 flex justify-between">
       <div class="w-1/4">
         <img src="@/assets/images/logo-80s-dark-bg.svg" alt="Logo" class="w-full h-full rounded-full">
       </div>
       <div class="w-1/4">
         <div class="border-b border-gray-700 mb-4 pb-4">
           <h3 class="text-xl font-bold uppercase tracking-wide">Navigation</h3>
         </div>
         <ul>
          <NavigationLinksComponent/>
         </ul>
       </div>
     </footer>
</template>