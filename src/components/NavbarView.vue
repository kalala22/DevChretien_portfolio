
<script setup>

import { ref } from 'vue'

const isMenuOpen = ref(false);

// Fonction pour basculer l'état du menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const links = ref([
  { name: 'Accueil', url: '#' },
  { name: 'A propos', url: '#' },
  { name: 'Projets', url: '#' },
  { name: 'Compétences', url: '#' },
  { name: 'Contact', url: '#' },
])
</script>

<template>
  <header class="bg-secondary sticky top-0 z-50 shadow-md">
    <!-- 
      Conteneur principal avec une largeur max et centré.
      Le padding est maintenant responsive : petit sur mobile, plus grand sur desktop.
    -->
    <nav class="flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      
      <!-- Logo à gauche (ne change pas) -->
      <div>
        <a href="#" class="text-2xl font-bold text-white">
          <span class="text-red-600">Dev</span>Chretien
        </a>
      </div>
    
      <!-- Liens de navigation pour le bureau (Desktop) -->
      <!-- 'hidden md:flex' : caché sur mobile, devient un flex container à partir de la taille 'md' -->
      <div class="hidden md:flex items-center space-x-8">
        <div v-for="link in links" :key="link.name" class="text-primary text-lg border-b-2 border-transparent hover:border-red-600 transition-colors duration-300">
          <a href="#">{{ link.name }}</a>
        </div>
      </div>

      <!-- Bouton Hamburger pour le mobile -->
      <!-- 'md:hidden' : visible uniquement sur les écrans plus petits que 'md' -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-primary focus:outline-none">
          <!-- Icône Hamburger (s'affiche si le menu est fermé) -->
          <!-- <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg> -->
          <!-- Icône Fermer 'X' (s'affiche si le menu est ouvert) -->
          <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg> -->
          <div v-if="!isMenuOpen" class="text-2xl">
            <!-- Icône Hamburger -->
           <font-awesome-icon icon="bars" />
          </div>
          
        </button>
      </div>

    </nav>

    <!-- <div v-else class="w-6 h-6">
            <font-awesome-icon icon="x" />
          </div> -->

    <!-- Menu Mobile en plein écran (Overlay) -->
    <!-- 'v-if="isMenuOpen"' : ce bloc n'existe dans le DOM que si le menu est ouvert -->
    <div v-if="isMenuOpen" class="md:hidden fixed inset-0 bg-secondary z-40 flex flex-col items-center justify-center space-y-8">
      <div v-for="link in links" :key="link.name" class="text-primary text-3xl font-bold">
        <!-- Cliquer sur un lien ferme aussi le menu -->
          <div class="absolute top-4 right-4">
            <button @click="toggleMenu" class="text-primary focus:outline-none">
              <font-awesome-icon icon="x" />
            </button> 
         </div>
        <a href="#" @click="toggleMenu">{{ link.name }}</a>
      </div>
      
    </div>
    
  </header>
</template>
