// state management guide: https://blog.logrocket.com/complex-vue-3-state-management-pinia/
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('articleStore', {
    state: () => ({
      allArticles: null,
      article: null,
    }),

    getters: {
      getAllArticles: (state) => {
        return state.allArticles
      },

      getArticle: (state) => {
        return state.article
      },
    },

    actions: {
      async retrieveAllArticles() {
        const {NUXT_API_SERVER_URL} = useRuntimeConfig()
        const data = await useFetch(`${NUXT_API_SERVER_URL}/articles/`);
        if (data.data) {
            this.allArticles = data.data.value.data;
        }
      },

      async retrieveSingleArticle(slug) {
        const {NUXT_API_SERVER_URL} = useRuntimeConfig()
        const data = await useFetch(`${NUXT_API_SERVER_URL}/articles/slug/${slug}`);
        if (data.data) {
            this.article = data.data.value.data;
        }
      }
    }
  })