
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
          
          <div v-if="!isMenuOpen" class="text-2xl">
            <!-- Icône Hamburger -->
           <font-awesome-icon icon="bars" />
          </div>
          
        </button>
      </div>

    </nav>

   

    <!-- Menu Mobile en plein écran (Overlay) -->
    <!-- 'v-if="isMenuOpen"' : ce bloc n'existe dans le DOM que si le menu est ouvert -->
    <transition name="fade-in">
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