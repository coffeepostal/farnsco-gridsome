// Import main css
import '~/assets/style/index.scss'

// Add FontAwesome to project
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(
  faTwitter,
  faInstagram,
  faAt
)

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add FontAwesome to project
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('font-awesome-layers', FontAwesomeLayers)
  Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
}
