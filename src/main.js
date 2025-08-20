import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faX, faBars, faTimes, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faX, faBars, faTimes, faEnvelope, faGithub, faDownload)

// Enregistrez le composant FontAwesomeIcon globalement

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
