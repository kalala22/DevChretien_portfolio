<template>
  <div class="flex flex-col items-center justify-center bg-background p-5 py-20 mt-10">
    <h2 class="text-primary text-3xl md:text-5xl uppercase">
      Mes <span class="font-extrabold">Projects</span>
    </h2>
  </div>

  <section id="project" class="flex flex-col items-center bg-background">
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto p-6 md:rounded-lg shadow-xl bg-secondary max-w-7xl"
    >
      <div
        v-for="(project, indexProjects) in projects"
        :key="indexProjects"
        class="card bg-background w-full shadow-sm"
      >
        <div class="rounded-lg w-full h-48 overflow-hidden shadow-black/50 shadow-lg">
          <figure>
            <img :src="project.image" alt="Project Image" class="rounded-lg object-fill" />
          </figure>
        </div>

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
import img1 from '@/assets/img/img_project/sunnyside.png'
import img2 from '@/assets/img/img_project/portfolio.png'
import img3 from '@/assets/img/img_project/clonenetflix.png'
import img4 from '@/assets/img/img_project/youtube.png'
import img5 from '@/assets/img/img_project/clonex.png'
import img6 from '@/assets/img/img_project/figma.jpg'

const projects = ref([
  {
    id: 1,
    title: 'Projet Portfolio',
    description:
      'Création d’un site web statique en HTML et CSS dans le cadre de mes premières semaines de formation à Kadea. Ce projet m’a permis d’apprendre à structurer une page web et à la styliser, en mettant en pratique les bases du développement front-end',
    image: img2,
    liveDemo: 'https://two025-dev-matin-projet-portfolio.onrender.com',
    badges: ['HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Project SunySide',
    description:
      "Sunnyside est une agence créative à service complet spécialisée dans l'aide à la croissance rapide des marques. Ce projet est une page de destination pour l'agence Sunnyside, utilisant 'Frontend Mentor' comme source d'inspiration.",
    image: img1,
    liveDemo: 'https://sunny-side-agency.onrender.com',
    badges: ['HTML', 'CSS'],
  },
  {
    id: 3,
    title: 'Project Clone Netflix',
    description:
      'J’ai réalisé un clone de l’interface Netflix en utilisant uniquement HTML et CSS, afin de renforcer mes compétences en intégration web.',
    image: img3,
    liveDemo: '',
    badges: ['HTML', 'CSS'],
  },
  {
    id: 4,
    title: 'Project Clone Youtube',
    description: 'Description of Project 4',
    image: img4,
    liveDemo: '',
    badges: ['HTML', 'Tailwind CSS'],
  },
  {
    id: 5,
    title: 'Project Clone Tweeter(x)',
    description: 'Description of Project 5',
    image: img5,
    liveDemo: '',
    badges: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },

  {
    id: 6,
    title: 'Maquette Design',
    description: 'Description of Project 6',
    image: img6,
    liveDemo: '',
    badges: ['Figma'],
  },

  // Add more projects as needed
])
</script>
