<script setup>
import myPic from '@/assets/img/my_pic.png'
import BoutonCv from '@/components/BoutonCv.vue'
import BoutonCallMe from '@/components/BoutonCallMe.vue'
import TypingEffect from '@/components/TypingEffect.vue'
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  isLoaded.value = true
})
</script>

<template>
  <main id="home" class="flex items-center justify-center">
    <transition name="fade-in">
      <div v-if="isLoaded" class="flex flex-col md:flex-row items-center justify-between">
        <div class="text-center md:text-left space-y-4 order-2 md:order-1">
          <h1 class="font-normal neutral text-3xl md:text-4xl">
            Salut, Je suis<br />
            <span class="font-extrabold neutral text-4xl md:text-7xl">Chretien Kalala,</span>
          </h1>
          <!-- <p class="text-2xl md:text-4xl font-extrabold neutral">Full-Stack Developer</p> -->
          <TypingEffect class="neutral text-2xl md:text-3xl font-bold" />
          <p class="md:text-lg text-xl font-normal neutral">
            Explorez mes projets et compétences pour en savoir plus sur mon travail.
          </p>
          <div class="flex flex-row sm:flex-row justify-center md:justify-start gap-4 mt-5">
            <BoutonCallMe />
            <BoutonCv />
          </div>
        </div>

        <div class="order-1 md:order-2 w-80 h-80 md:w-[50%] md:h-[50%] flex-shrink-0">
          <img :src="myPic" alt="Ma photo" class="w-full h-full object-cover" />
        </div>
      </div>
    </transition>
  </main>
</template>

<style>
.fade-in-enter-from {
  opacity: 0;
  transform: translateY(100px);
}

/* L'état de FIN de l'animation */
.fade-in-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

/* La durée et la courbe de l'animation */
.fade-in-enter-active {
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Une transition avec un petit effet "ressort" */
}
</style>
