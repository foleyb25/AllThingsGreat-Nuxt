import { useAppStateStore } from '~/stores/appstate.store';

export default defineNuxtRouteMiddleware( (to, from) => {
  const {setUrl} = useAppStateStore()
  setUrl(to.path)
})