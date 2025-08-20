<script setup>
import myPic from '@/assets/img/my_pic.png'
import BoutonCv from '@/components/BoutonCv.vue'
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  isLoaded.value = true;
});
</script>

<template>
 
    <main class="min-h-screen bg-background flex items-center justify-center p-4">

        <transition name="fade-in" >
            <div v-if="isLoaded" class="flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl">
    
            
            <div class="text-center md:text-left space-y-4 text-primary order-2 md:order-1">
                <h1 class="font-semibold text-4xl md:text-5xl"> 
                    Salut Je suis<br> <span class="font-extrabold text-6xl md:text-7xl">Chretien Kalala,</span>
                </h1>
                <p class="text-2xl md:text-4xl font-extrabold">
                    Full-Stack Developer
                </p>
                <p class="text-base md:text-lg font-light">
                    Explorez mes projets et compétences pour en savoir plus sur mon travail.
                </p>
                <div class="flex flex-row sm:flex-row justify-center md:justify-start gap-4">
                    <button class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-300">
                        Contactez-moi
                    </button>
                    <BoutonCv/>
                </div>
            </div>

           
            <div class="order-1 md:order-2 w-60 h-60 md:w-[40%] md:h-[40%] flex-shrink-0">
                <img :src="myPic" alt="Ma photo" class="w-full h-full object-cover"/>
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