import { useArticleStore } from '~/stores/article.store';

export default defineNuxtRouteMiddleware( async (to, from) => {
  console.log('running global middleware')
  const articleStore = useArticleStore()
  await articleStore.retrieveSingleArticle(to.params.slug)
})