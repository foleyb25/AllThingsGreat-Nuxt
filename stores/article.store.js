// state management guide: https://blog.logrocket.com/complex-vue-3-state-management-pinia/
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('articleStore', {
  state: () => ({
    allArticles: [],
    article: null,
    pageNumber: 0,
    hasMore: true,
    isLoading: false,
    isArticleLoading: false,
    error: null,
  }),

  getters: {
    getAllArticles: (state) => {
      return state.allArticles
    },

    getArticle: (state) => {
      return state.article
    },

    getHasMore: (state) => {
      return state.hasMore
    },

    getIsLoading: (state) => {
      return state.isLoading
    },

    getError: (state) => {
      return state.error
    },
  },

  actions: {
    async retrieveArticles(category) {
      try {
        const { apiBase } = useRuntimeConfig()
        this.isLoading = true
        const data = await useFetch(`${apiBase}/articles/category/${category}/page/${this.pageNumber}`);
        this.isLoading = false
        if (data.data) {
          this.allArticles.push(...data.data.value.data)
          this.allArticles.sort( (a, b) => {
            return a - b;
          })
          this.hasMore = data.data.value.hasMore
          this.pageNumber = this.pageNumber + 1
        }
      } catch (e) {
        this.error = e.message
      }

    },

    async retrieveSingleArticle(slug) {
      try {
        const { apiBase } = useRuntimeConfig()
        this.isArticleLoading = true
        const data = await useFetch(`${apiBase}/articles/slug/${slug}`);
        this.isArticleLoading = false
        if (data.data) {
          this.article = data.data.value.data;
        }
      } catch (e) {
        this.error = e.message
      }

    },

    async resetState() {
        this.pageNumber = 0
        this.allArticles = []
        this.hasMore = true;
        this.isLoading = false
        this.error = null;      
    },
  }
})