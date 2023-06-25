import { useAppStateStore } from '~/stores/appstate.store';

export default defineNuxtRouteMiddleware( (to, from) => {
  const appStateStore = useAppStateStore()
  appStateStore.setUrl(to.path)
})