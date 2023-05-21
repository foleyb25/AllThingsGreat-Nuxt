// state management guide: https://blog.logrocket.com/complex-vue-3-state-management-pinia/
import { defineStore } from 'pinia'

export const useAppStateStore = defineStore('appStateStore', {
    state: () => ({
        nuxtPageScrollPosition: 0,
        isPreserveState: false,
    }),

    getters: {
        getNuxtPageScrollPosition(state) {
            return state.nuxtPageScrollPosition
        },

        getIsPreserveState: (state) => {
            return state.isPreserveState
        }
    },

    actions: {
        setNuxtPageScrollPosition(position) {
            this.nuxtPageScrollPosition = position
        },

        //used for routing. Sometimes I want to keep the articles when user returns
        async preserveState(boolean) {
            this.isPreserveState = boolean
        },
    }
})