<template>
    <main class="min-h-screen bg-background flex flex-col md:flex-row items-center justify-between px-80">
  
  <!-- Texte -->
  <div class="text-center  md:text-left md:w-1/2 space-y-4 text-primary ">
    <h1 class="font-bold md:text-5xl"> 
      Salut Je suis<br> <span class="font-extrabold text-7xl">Chretien Kalala,</span>
    </h1>
    <p class="text-2xl md:text-4xl font-extrabold">
      Frontend Developer
    </p>
    <p class="text-base md:text-lg font-light">
      Explorez mes projets et compétences pour en savoir plus sur mon travail.
    </p>
    <div>
      <button class="bg-accent text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300">
        Contactez-moi
      </button>
      <button class="bg-primary text-secondary px-6 py-3 rounded-lg ml-4 hover:bg-blue-200 transition-colors duration-300">
        Voir mon CV
      </button>
    </div>
  </div>

  <!-- Image -->
    <div class="md:w-72 md:h-72 border border-red-500">
      <img :src="myPic" alt="Ma photo"/>
    </div>

</main>
</template>

<script setup>
import myPic from '@/assets/img/my_pic.png'
</script>
