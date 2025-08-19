<template>
    <main class="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-between p-6">
  
  <!-- Texte -->
  <div class="text-center md:text-left md:w-1/2 space-y-4">
    <h1 class="text-4xl md:text-5xl font-medium"> 
      Salut Je suis <span class="font-extrabold">Chretien Kalala,</span>
    </h1>
    <p class="text-2xl md:text-4xl font-extrabold">
      Frontend Developer
    </p>
    <p class="text-base md:text-lg font-light">
      Explorez mes projets et compétences pour en savoir plus sur mon travail.
    </p>
  </div>

  <!-- Image -->
  <div class="mt-8 md:mt-0 md:w-1/2 flex justify-center border border-red-500">
    <div class="w-80 h-80 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
      <img :src="myPic" alt="Ma photo" class="w-full h-full object-cover" />
    </div>
  </div>

</main>
</template>

<script setup>
import myPic from '@/assets/img/my_pic.jpeg'
</script>
