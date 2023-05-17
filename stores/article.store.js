// state management guide: https://blog.logrocket.com/complex-vue-3-state-management-pinia/
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('articleStore', {
    state: () => ({
      allArticles: [],
      article: null,
      pageNumber: 0,
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
      async retrieveArticles(category) {
        const {apiBase} = useRuntimeConfig()
        const data = await useFetch(`${apiBase}/articles/category/${category}/page/${this.pageNumber}`);
        this.pageNumber = this.pageNumber++
        if (data.data) {
            this.allArticles.push(...data.data.value.data)
        }
      },

      async retrieveSingleArticle(slug) {
        const {apiBase} = useRuntimeConfig()
        const data = await useFetch(`${apiBase}/articles/slug/${slug}`);
        if (data.data) {
            this.article = data.data.value.data;
        }
      },

      async resetPageNumber() {
        this.pageNumber = 0
      },

      async resetArticleList() {
        this.allArticles = []
      }
    }
  })