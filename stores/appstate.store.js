// state management guide: https://blog.logrocket.com/complex-vue-3-state-management-pinia/
import { defineStore } from 'pinia'

export const useAppStateStore = defineStore('appStateStore', {
    state: () => ({
        nuxtPageScrollPosition: 0,
        isPreserveState: false,
        linksDisabled: false,
        url: ''
    }),

    getters: {
        getNuxtPageScrollPosition(state) {
            return state.nuxtPageScrollPosition
        },

        getIsPreserveState: (state) => {
            return state.isPreserveState
        },

        getUrl: (state) => {
            return state.url
        },

        getLinksDisabled: (state) => {
            return state.linksDisabled
        }
    },

    actions: {
        setNuxtPageScrollPosition(position) {
            console.log(position);
            this.nuxtPageScrollPosition = position
        },

        //used for routing. Sometimes I want to keep the articles when user returns
        async preserveState(boolean) {
            this.isPreserveState = boolean
        },

        setUrl(url) {
            this.url = url
        },

        async setLinksDisabled(isDisabled) {
            this.linksDisabled = isDisabled
        }

        
    }
})