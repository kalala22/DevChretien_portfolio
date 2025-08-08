<template>
  <!-- Header components -->
  <header class="flex items-center p-4 bg-gray-800 text-white">
    <div class="flex items-center justify-between w-full">
      <!-- Logo à gauche -->
      <div>
        <a class="text-xl font-bold">DevChretien</a>
      </div>

      <!-- Liens à droite -->
      <div class="flex items-center space-x-6">
        <div v-for="link in links" :key="link.name" class="text-lg">
          <a href="#">{{ link.name }}</a>
        </div>
      </div>
    </div>
  </header>

  <main></main>
</template>

<script setup>
import { ref } from 'vue'

const links = ref([
  { name: 'Accueil', url: '#' },
  { name: 'A propos', url: '#' },
  { name: 'Projets', url: '#' },
  { name: 'Compétences', url: '#' },
  { name: 'Contact', url: '#' },
])
</script>
