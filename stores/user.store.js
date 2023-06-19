// state management guide: https://blog.logrocket.com/complex-vue-3-state-management-pinia/
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    isLoading: false,
    error: null,
  }),

  getters: {
    getIsLoading: (state) => {
        return state.isLoading
      },
  
      getError: (state) => {
        return state.error
      },
  },

  actions: {
    async submitJobApplication(formObject) {
        try {
          const { public: {apiBase} } = useRuntimeConfig()
          this.error = null
          this.isLoading = true      
          const { data } = await useFetch(`${apiBase}/users/application/submit`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObject),
          }).fetch();
      
          console.log(data, ": Data")
          this.isLoading = false
        } catch (e) {
          this.error = e.message
        }
      }
  }
})