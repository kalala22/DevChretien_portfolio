import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faBars, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faBars, faTimes, faEnvelope, faGithub)

// Enregistrez le composant FontAwesomeIcon globalement

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
