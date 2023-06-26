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
          const {data, error} = await useFetch(`${apiBase}/users/application/submit`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObject),
          })
          this.isLoading = false
          if (error.value) {
            this.error = error.value
          } else {
            return data
          }
          
        } catch (e) {
          this.isLoading = false
          this.error = e.message
        }
      }
  }
})