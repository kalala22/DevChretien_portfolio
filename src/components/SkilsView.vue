<script setup>
import canvaIcon from '@/assets/skils_icons/canva.png'
import adonisIcon from '@/assets/skils_icons/adonis.png'
import illustratorIcon from '@/assets/skils_icons/illustrator.png'
import photoshopIcon from '@/assets/skils_icons/photoshop.png'
import figmaIcon from '@/assets/skils_icons/figma.png'
import tailwindIcon from '@/assets/skils_icons/tailwind.png'
import vuejsIcon from '@/assets/skils_icons/vue.png'
import jsIcon from '@/assets/skils_icons/js.png'
import htmlIcon from '@/assets/skils_icons/html.png'
import cssIcon from '@/assets/skils_icons/css.png'
import nodejsIcon from '@/assets/skils_icons/nodejs.png'
import github from '@/assets/skils_icons/github.png'
import vscode from '@/assets/skils_icons/vscode.png'

import { ref } from 'vue'

const listTechno = ref([
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Vue.js', icon: vuejsIcon },
  { name: 'AdonisJS', icon: adonisIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'Photoshop', icon: photoshopIcon },
  { name: 'Illustrator', icon: illustratorIcon },
  { name: 'Canva', icon: canvaIcon },
  { name: 'GitHub', icon: github },
  { name: 'VS Code', icon: vscode },
])
</script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <!-- Card -->
    <div class="bg-secondary shadow-lg rounded-2xl p-6">
      <h2 class="text-2xl font-bold text-center text-primary mb-10">Technologies que j'utilise</h2>

      <!-- Grille d'icônes -->
      <div
        class="grid gap-6 place-items-center grid-cols-[repeat(auto-fit,minmax(clamp(8rem,15vw,12rem),1fr))]"
      >
        <div v-for="techno in listTechno" :key="techno.name" class="flex flex-col items-center">
          <!-- Cercle -->
          <div
            class="w-[clamp(4rem,6vw,6rem)] h-[clamp(4rem,6vw,6rem)] mb-2 flex items-center justify-center bg-background rounded-full shadow-md"
          >
            <!-- Logo -->
            <img
              :src="techno.icon"
              alt=""
              class="object-contain w-[clamp(2rem,4vw,3.5rem)] h-[clamp(2rem,4vw,3.5rem)]"
            />
          </div>

          <!-- Texte -->
          <span class="text-primary text-[clamp(0.9rem,1.5vw,1.25rem)]">
            {{ techno.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
