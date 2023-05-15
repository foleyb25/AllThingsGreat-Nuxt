<template>
    <div>
      <NavigationHeaderComponent />
      <slot/>
      <NavigationFooterComponent class="hidden sm:flex" />
    </div>
  </template>