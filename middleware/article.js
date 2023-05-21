import { useArticleStore } from '~/stores/article.store';

export default defineNuxtRouteMiddleware( async (to, from) => {
  const articleStore = useArticleStore()
  await articleStore.retrieveSingleArticle(to.params.slug)
})