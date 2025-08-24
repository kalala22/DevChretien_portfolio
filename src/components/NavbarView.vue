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
  <header class="bg-secondary sticky top-0 z-50 shadow-md">
    <!-- 
      Conteneur principal avec une largeur max et centré.
      Le padding est maintenant responsive : petit sur mobile, plus grand sur desktop.
    -->
    <nav
      class="flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
    >
      <!-- Logo à gauche (ne change pas) -->
      <div>
        <a href="#" class="text-2xl font-bold text-white">
          <span class="text-red-600">Dev</span>Chretien
        </a>
      </div>

      <div class="">
        <!-- Espace réservé pour aligner le logo et le bouton hamburger -->
        <label class="swap swap-rotate">
          <input type="checkbox" class="toggle" :checked="theme === 'dark'" @change="toggleTheme" />
          <!-- Optionnel : ajoutez des icônes de soleil et de lune pour un meilleur visuel -->
          <svg
            class="swap-on fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29l.71-.71a1,1,0,0,0-1.41-1.41l-.71.71A1,1,0,0,0,5.64,7.05ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM20,12a1,1,0,0,0-1-1H18a1,1,0,0,0,0,2h1A1,1,0,0,0,20,12ZM17,5.64a1,1,0,0,0,.71-.29l.71-.71a1,1,0,1,0-1.41-1.41l-.71.71a1,1,0,0,0,0,1.41A1,1,0,0,0,17,5.64ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
            />
          </svg>
          <svg
            class="swap-off fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13.5A1,1,0,0,0,20.5,12,9,9,0,0,1,12,3a9,9,0,0,0,9,9,1,1,0,0,0,1-1A1,1,0,0,0,21.64,13.5ZM12,21A9,9,0,0,1,3,12,9,9,0,0,0,12,21Z"
            />
          </svg>
        </label>
      </div>

      <!-- Liens de navigation pour le bureau (Desktop) -->
      <!-- 'hidden md:flex' : caché sur mobile, devient un flex container à partir de la taille 'md' -->
      <div class="hidden md:flex items-center space-x-8">
        <div
          v-for="link in links"
          :key="link.name"
          class="text-primary text-lg border-b-2 border-transparent hover:border-red-600 transition-colors duration-300"
        >
          <a :href="link.href">{{ link.name }}</a>
        </div>
      </div>

      <!-- Bouton Hamburger pour le mobile -->
      <!-- 'md:hidden' : visible uniquement sur les écrans plus petits que 'md' -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-primary focus:outline-none">
          <div class="text-3xl">
            <!-- Icône Hamburger -->
            <font-awesome-icon :icon="isMenuOpen ? 'x' : 'bars'" />
          </div>
        </button>
      </div>
    </nav>

    <!-- Menu Mobile en plein écran (Overlay) -->
    <!-- 'v-if="isMenuOpen"' : ce bloc n'existe dans le DOM que si le menu est ouvert -->
    <transition name="fade-in">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-secondary fixed top-50 left-0 w-full h-[calc(100%-40px)] flex flex-col items-center justify-center gap-5"
      >
        <div v-for="link in links" :key="link.name" class="text-primary text-3xl font-bold">
          <!-- Cliquer sur un lien ferme aussi le menu -->
          <!-- <div class="absolute top-4 right-4">
            <button @click="toggleMenu" class="text-primary focus:outline-none">
              <font-awesome-icon icon="x" />
            </button>
          </div> -->
          <a :href="link.href" class="text-primary text-3xl font-bold" @click="toggleMenu">
            {{ link.name }}
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<style>
.fade-in-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* L'état de FIN de l'animation */
.fade-in-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

/* La durée et la courbe de l'animation */
.fade-in-enter-active {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Une transition avec un petit effet "ressort" */
}
</style>
