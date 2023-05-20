// state management guide: https://blog.logrocket.com/complex-vue-3-state-management-pinia/
import { defineStore } from 'pinia'

export const useAppStateStore = defineStore('appStateStore', {
    state: () => ({
      nuxtPageScrollPosition: 0
    }),

    getters: {
        getNuxtPageScrollPosition(state) {
            return state.nuxtPageScrollPosition
          }
    },

    actions: {
        setNuxtPageScrollPosition(position) {
            this.nuxtPageScrollPosition = position
          }

    }
})