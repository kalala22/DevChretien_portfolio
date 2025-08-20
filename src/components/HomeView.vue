<template>
 
    <main class="min-h-screen bg-background flex items-center justify-center p-4">
  
        <div class="flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl">
    
            
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
                    <button class="bg-primary text-secondary px-6 py-3 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                        Voir mon CV
                    </button>
                </div>
            </div>

           
            <div class="order-1 md:order-2 w-60 h-60 md:w-[30%] md:h-[30%] flex-shrink-0">
                <img :src="myPic" alt="Ma photo" class="w-full h-full object-cover shadow-lg"/>
            </div>

        </div>
  
    </main>
</template>

<script setup>
import myPic from '@/assets/img/my_pic.png'
</script>
