<script setup>
import { ref, onMounted, watch } from 'vue'

const isMenuOpen = ref(false)

// Fonction pour basculer l'état du menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const links = ref([
  { name: 'Accueil', href: '#home' },
  { name: 'A propos', href: '#about' },
  { name: 'Compétences', href: '#competence' },
  { name: 'Projets', href: '#project' },
  { name: 'Contact', href: '#contact' },
])

// Variable réactive pour stocker le thème actuel
const theme = ref('light')

// Fonction pour basculer entre les thèmes
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

// Mettre à jour l'attribut data-theme sur l'élément <html> lorsque le thème change
watch(theme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme) // Enregistre le thème dans le localStorage. [2, 4]
})

// Au chargement du composant, vérifie s'il y a un thème sauvegardé dans le localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    theme.value = savedTheme
  } else {
    // Si aucun thème n'est sauvegardé, utilise le thème clair par défaut
    theme.value = 'light'
  }
  document.documentElement.setAttribute('data-theme', theme.value)
})
</script>

<template>
  <header class="sticky top-0 z-50 shadow-sm bg-base-100 md:px-[15%]">
    <!-- 
      Conteneur principal avec une largeur max et centré.
      Le padding est maintenant responsive : petit sur mobile, plus grand sur desktop.
    -->
    <nav class="flex items-center justify-between w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <!-- Logo à gauche (ne change pas) -->
      <div>
        <a href="#" class="text-2xl font-bold neutral">
          <span class="text-red-600">Dev</span>Chretien
        </a>
      </div>

      <!-- Liens de navigation pour le bureau (Desktop) -->
      <!-- 'hidden md:flex' : caché sur mobile, devient un flex container à partir de la taille 'md' -->
      <div class="hidden md:flex items-center font-semibold space-x-8">
        <div
          v-for="link in links"
          :key="link.name"
          class="text-lg border-b-2 border-transparent hover:border-red-600 transition-colors duration-300"
        >
          <a :href="link.href">{{ link.name }}</a>
        </div>
        <div class="flex items-center">
          <label class="swap swap-rotate">
            <!-- Le checkbox invisible qui gère l'état -->
            <input type="checkbox" :checked="theme === 'dark'" @change="toggleTheme" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sun swap-off fill-current w-7 h-7 text-base-content"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-moon-star-icon swap-on fill-current w-7 h-7 text-base-content"
            >
              <path d="M18 5h4" />
              <path d="M20 3v4" />
              <path
                d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
              />
            </svg>
          </label>
        </div>
      </div>

      <!-- Bouton Hamburger pour le mobile -->
      <!-- 'md:hidden' : visible uniquement sur les écrans plus petits que 'md' -->
      <div class="md:hidden flex flex-row-reverse gap-5 items-center">
        <button @click="toggleMenu" class="neutral focus:outline-none">
          <div class="text-3xl">
            <!-- Icône Hamburger -->
            <font-awesome-icon :icon="isMenuOpen ? 'x' : 'bars'" />
          </div>
        </button>
        <div class="flex items-center">
          <label class="swap swap-rotate">
            <!-- Le checkbox invisible qui gère l'état -->
            <input type="checkbox" :checked="theme === 'dark'" @change="toggleTheme" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sun swap-off fill-current w-7 h-7 text-base-content"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-moon-star-icon swap-on fill-current w-7 h-7 text-base-content"
            >
              <path d="M18 5h4" />
              <path d="M20 3v4" />
              <path
                d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
              />
            </svg>
          </label>
        </div>
      </div>
    </nav>

    <!-- Menu Mobile en plein écran (Overlay) -->
    <!-- 'v-if="isMenuOpen"' : ce bloc n'existe dans le DOM que si le menu est ouvert -->
    <transition name="slide-down">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-base-100 fixed top-16 left-0 w-full h-[calc(100%-40px)] flex flex-col items-center justify-center gap-5"
      >
        <div v-for="link in links" :key="link.name" class="text-3xl font-bold">
          <!-- Cliquer sur un lien ferme aussi le menu -->
          <!-- <div class="absolute top-4 right-4">
            <button @click="toggleMenu" class="text-primary focus:outline-none">
              <font-awesome-icon icon="x" />
            </button>
          </div> -->
          <a :href="link.href" class="text-3xl font-bold" @click="toggleMenu">
            {{ link.name }}
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Définit la durée et la courbe de vitesse pour l'entrée et la sortie */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s ease-out;
}

/* 
  État de DÉPART pour l'entrée (le menu est caché en haut et invisible)
  État de FIN pour la sortie (le menu retourne en haut et disparaît)
*/
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

/* 
  État de FIN pour l'entrée (le menu est à sa place et visible)
  État de DÉPART pour la sortie
*/
.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
