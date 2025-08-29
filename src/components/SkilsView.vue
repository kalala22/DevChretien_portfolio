<script setup>
import canvaIcon from '@/assets/skils_icons/canva.png'
import adonisIcon from '@/assets/skils_icons/adonis.png'
import illustratorIcon from '@/assets/skils_icons/illustrator.png'
import photoshopIcon from '@/assets/skils_icons/photoshop.png'
import figmaIcon from '@/assets/skils_icons/figma.png'
import tailwindIcon from '@/assets/skils_icons/tailwind.png'
import vuejsIcon from '@/assets/skils_icons/vue.png'
import jsIcon from '@/assets/skils_icons/js.png'
import htmlIcon from '@/assets/skils_icons/html.png'
import cssIcon from '@/assets/skils_icons/css.png'
import nodejsIcon from '@/assets/skils_icons/nodejs.png'
import githubIcon from '@/assets/skils_icons/github.png'
import vscodeIcon from '@/assets/skils_icons/vscode.png'
import postgresqlIcon from '@/assets/skils_icons/postgresql.png'
import viteIcon from '@/assets/skils_icons/vite.png'
import typescriptIcon from '@/assets/skils_icons/typescript.png'
import netlifyIcon from '@/assets/skils_icons/netlify.png'

import { computed, ref } from 'vue'

const listTechno = ref([
  {
    name: 'HTML',
    icon: htmlIcon,
    niveau: 'Expert',
    color: '#E34F26',
    links: 'https://developer.mozilla.org/fr/docs/Web/HTML',
    category: 'Frontend',
  },
  {
    name: 'CSS',
    icon: cssIcon,
    niveau: 'Expert',
    color: '#264DE4',
    links: 'https://developer.mozilla.org/fr/docs/Web/CSS',
    category: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: tailwindIcon,
    niveau: 'Intermédiaire',
    color: '#38BDF8',
    links: 'https://tailwindcss.com/',
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    icon: jsIcon,
    niveau: 'Intermédiaire',
    color: '#F7DF1E',
    links: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
    category: 'Frontend',
  },
  {
    name: 'Vue.js',
    icon: vuejsIcon,
    niveau: 'Intermédiaire',
    color: '#4FC08D',
    links: 'https://vuejs.org/',
    category: 'Frontend',
  },
  {
    name: 'AdonisJS',
    icon: adonisIcon,
    niveau: 'Débutant',
    color: '#5A46FF',
    links: 'https://adonisjs.com/',
    category: 'Backend',
  },
  {
    name: 'Node.js',
    icon: nodejsIcon,
    niveau: 'Débutant',
    color: '#339933',
    links: 'https://nodejs.org/en/',
    category: 'Backend',
  },
  {
    name: 'Figma',
    icon: figmaIcon,
    niveau: 'Expert',
    color: '#F04343',
    links: 'https://www.figma.com/',
    category: 'UI/UX Design',
  },
  {
    name: 'Photoshop',
    icon: photoshopIcon,
    niveau: 'Intermédiaire',
    color: '#31A8FF',
    links: 'https://www.adobe.com/fr/products/photoshop.html',
    category: 'UI/UX Design',
  },
  {
    name: 'Illustrator',
    icon: illustratorIcon,
    niveau: 'Intermédiaire',
    color: '#FF7C00',
    links: 'https://www.adobe.com/fr/products/illustrator.html',
    category: 'UI/UX Design',
  },
  {
    name: 'Canva',
    icon: canvaIcon,
    niveau: 'Intermédiaire',
    color: '#00C4CC',
    links: 'https://www.canva.com/',
    category: 'UI/UX Design',
  },
  {
    name: 'GitHub',
    icon: githubIcon,
    niveau: 'Intermédiaire',
    color: '#181717',
    links: 'https://www.github.com/',
    category: 'Outils',
  },
  {
    name: 'VS Code',
    icon: vscodeIcon,
    niveau: 'Expert',
    color: '#007ACC',
    links: 'https://code.visualstudio.com/',
    category: 'Outils',
  },
  {
    name: 'PostgreSql',
    icon: postgresqlIcon,
    niveau: 'Intermediere',
    color: '#007ACC',
    links: 'https://code.visualstudio.com/',
    category: 'Base de données',
  },
  {
    name: 'ViteJs',
    icon: viteIcon,
    niveau: 'Debutant',
    color: '#FBC02D',
    links: 'https://code.visualstudio.com/',
    category: 'Frontend',
  },
  {
    name: 'Typescript',
    icon: typescriptIcon,
    niveau: 'Debutant',
    color: '#1976D2',
    links: 'https://code.visualstudio.com/',
    category: 'Frontend',
  },
  {
    name: 'Netlify',
    icon: netlifyIcon,
    niveau: 'Intermédiaire',
    color: '#014847',
    links: 'https://code.visualstudio.com/',
    category: 'Outils',
  },
])

const listToolsName = ref([
  'Toutes',
  'Frontend',
  'Backend',
  'Base de données',
  'UI/UX Design',
  'Outils',
])

const hexToRgba = (hex, alpha = 1) => {
  // Gère les formats courts (#F00) et longs (#FF0000)
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) {
    return 'rgba(0, 0, 0, 0.1)' // Retourne une couleur par défaut en cas d'erreur
  }

  const r = parseInt(result[1], 16)
  const g = parseInt(result[2], 16)
  const b = parseInt(result[3], 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const activeFilter = ref('Toutes')

const setFilter = (filterName) => {
  activeFilter.value = filterName
}
const filterdTechno = computed(() => {
  if (activeFilter.value === 'Toutes') {
    return listTechno.value
  }
  return listTechno.value.filter((techno) => techno.category === activeFilter.value)
})
</script>

<template>
  <div class="max-w-6xl mx-auto p-6 md:max-w-7xl text-center">
    <h2 class="text-2xl font-bold text-center mb-10">Technologies que j'utilise</h2>
    <div v-for="tool in listToolsName" :key="tool" class="inline-block mr-4 mb-4">
      <button
        @click="setFilter(tool)"
        :class="{
          'bg-red-700 text-white': activeFilter === tool,
          'bg-base-300': activeFilter !== tool,
        }"
        class="px-4 py-2 neutral text-decoration font-semibold rounded-full transition duration-300 ease-in-out"
      >
        {{ tool }}
      </button>
    </div>

    <!-- Card -->
    <div class="">
      <!-- Grille d'icônes -->
      <transition-group
        tag="div"
        name="list"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10"
      >
        <div
          v-for="techno in filterdTechno"
          :key="techno.name"
          class="flex flex-col items-center group"
        >
          <div
            class="h-2 w-2 rounded-full relative top-4 right-1 left-12 bg-green-500 animate-pulse"
          ></div>
          <div
            class="w-40 h-40 absolute border border-base-200 flex items-center justify-center rounded-lg shadow-md hover:shadow-lg hover:scale-[1.1] transition-transform duration-300 ease-in-out cursor-pointer"
          ></div>
          <div
            class="p-4 rounded-full hover:scale-[1.1] transition-transform duration-300 ease-in-out"
          >
            <div
              :style="{
                background: hexToRgba(techno.color, 0.15),
              }"
              class="rounded-full w-16 h-16 flex items-center justify-center"
            >
              <a :href="techno.links" target="_blank" rel="noopener noreferrer">
                <img :src="techno.icon" :alt="techno.name" class="w-9 h-9 object-contain" />
              </a>
            </div>
          </div>
          <div class="relative h-12 flex flex-col items-center justify-start text-center">
            <p
              class="absolute font-semibold transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            >
              {{ techno.name }}
            </p>
            <p
              class="absolute text-sm font-semibold p-1 bg-green-600/20 opacity-0 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:opacity-100 rounded-xl group-hover:translate-y-0"
            >
              {{ techno.niveau }}
            </p>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style>
/* 
  1. Classes pour l'animation d'entrée et de sortie (fade + scale)
*/

/* État de départ pour l'entrée, état final pour la sortie */
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

/* État final pour l'entrée, état de départ pour la sortie */
.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Définit la durée et la courbe de la transition pour l'entrée/sortie */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

/* 
  2. Classe pour l'animation de mouvement (la magie de la fluidité !)
*/

/* Définit la durée de la transition pour les éléments qui changent de place */
.list-move {
  transition: transform 0.5s ease;
}

/* 
  3. Assure que les éléments qui partent ne perturbent pas le layout
     pendant que les autres bougent.
*/
.list-leave-active {
  position: absolute;
}
</style>
