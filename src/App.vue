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

  <main class="p-8 border border-red-500">
    <div class="flex items-center justify-between">
      <div class="border border-red-500">
        <h1 class="text-4xl font-medium mb-4">
          Salut moi c'est <span class="text-4xl font-extrabold">Chretien Kalala</span>
        </h1>
        <p class="text-lg mb-6">
          Je suis un développeur passionné par la création d'applications web modernes et
          performantes.
        </p>
        <p class="text-lg">
          Explorez mes projets et compétences pour en savoir plus sur mon travail.
        </p>
      </div>
      <div>
        <div>
          <img :src="myPic" alt="Ma photo" class="w-100 h-100 rounded-full bject-cover" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import myPic from '@/assets/img/my_pic.jpeg'
import { ref } from 'vue'

const links = ref([
  { name: 'Accueil', url: '#' },
  { name: 'A propos', url: '#' },
  { name: 'Projets', url: '#' },
  { name: 'Compétences', url: '#' },
  { name: 'Contact', url: '#' },
])
</script>
