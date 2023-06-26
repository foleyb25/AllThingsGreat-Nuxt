import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitterSquare, faDiscord, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faShoppingCart, faBars, faAddressCard, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitterSquare, faDiscord, faInstagramSquare, faGlobe, faShoppingCart, faBars, faAddressCard, faChevronDown)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})