<template>
  <div class="flex flex-col items-center justify-center bg-background p-5 py-20 mt-10">
    <h2 class="text-primary text-3xl md:text-5xl uppercase">
      Mes <span class="font-extrabold">Projects</span>
    </h2>
  </div>

  <section id="project" class="flex flex-col items-center bg-background">
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto p-6 md:rounded-lg shadow-xl bg-secondary max-w-5xl"
    >
      <div
        v-for="(project, indexProjects) in projects"
        :key="indexProjects"
        class="card bg-background w-full shadow-sm"
      >
        <figure>
          <img :src="project.image" alt="Project Image" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ project.title }}</h2>
          <p class="text-decoration">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(badge, indexBadge) in project.badges"
              :key="indexBadge"
              class="badge border bg-red-700 text-decoration text-xs"
            >
              {{ badge }}
            </span>
          </div>
          <div class="card-actions justify-start">
            <BoutonSeeProject :url="project.liveDemo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BoutonSeeProject from './BoutonSeeProject.vue'

const projects = ref([
  {
    id: 1,
    title: 'Projet Portfolio',
    description:
      'Création d’un site web statique en HTML et CSS dans le cadre de mes premières semaines de formation à Kadea. Ce projet m’a permis d’apprendre à structurer une page web et à la styliser, en mettant en pratique les bases du développement front-end',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    liveDemo: 'https://two025-dev-matin-projet-portfolio.onrender.com',
    badges: ['HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Project SunySide',
    description: 'Description of Project 2',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    liveDemo: 'https://sunny-side-agency.onrender.com',
    badges: ['HTML', 'CSS'],
  },
  {
    id: 3,
    title: 'Project Clone Netflix',
    description: 'Description of Project 3',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    liveDemo: '',
    badges: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Tailwind CSS'],
  },
  {
    id: 4,
    title: 'Project Clone Youtube',
    description: 'Description of Project 4',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    liveDemo: '',
    badges: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Tailwind CSS'],
  },
  {
    id: 5,
    title: 'Project Clone Tweeter(x)',
    description: 'Description of Project 5',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    liveDemo: '',
    badges: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Tailwind CSS'],
  },

  // Add more projects as needed
])
</script>
