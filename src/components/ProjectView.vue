<script setup>
import { ref } from 'vue'
import BoutonSeeProject from './BoutonSeeProject.vue'
import img1 from '@/assets/img/img_project/sunnyside.png'
import img2 from '@/assets/img/img_project/portfolio.png'
import img3 from '@/assets/img/img_project/clonenetflix.png'
import img4 from '@/assets/img/img_project/youtube.png'
import img5 from '@/assets/img/img_project/clonex.png'
import img6 from '@/assets/img/img_project/figma.jpg'
import img7 from '@/assets/img/img_project/lemonderural.png'
import img8 from '@/assets/img/img_project/todolist.png'
import img9 from '@/assets/img/img_project/pokedex.png'
import img10 from '@/assets/img/img_project/portfolioPhotographe.png'

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
    description:
      'Ce projet est un clone de YouTube développé avec HTML et Tailwind CSS. Il reproduit l’interface de la plateforme avec une page d’accueil responsive comprenant la barre de recherche, le menu latéral et l’affichage des vidéos. Ce travail m’a permis de renforcer mes compétences en intégration web et en utilisation de Tailwind CSS pour concevoir des interfaces modernes et adaptées à différents écrans.',
    image: img4,
    liveDemo: '',
    badges: ['HTML', 'Tailwind CSS'],
  },
  {
    id: 5,
    title: 'Project Clone Tweeter(x)',
    description:
      'Ce projet est un clone de Twitter (X) réalisé avec HTML, Tailwind CSS et JavaScript Vanilla. Il reprend les principales fonctionnalités de l’interface, comme la publication de tweets et l’affichage dynamique du contenu, tout en mettant en avant une mise en page responsive et moderne. Ce projet m’a permis de consolider mes compétences en intégration web et en manipulation du DOM avec JavaScript pur.',
    image: img5,
    liveDemo: '',
    badges: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  },

  {
    id: 6,
    title: 'Maquette Design',
    description:
      'Création de maquettes interactives sous Figma, présentant des interfaces modernes et cohérentes. Travail sur la mise en page, la palette de couleurs et l’expérience utilisateur pour offrir un design clair et attrayant.',
    image: img6,
    liveDemo:
      'https://www.figma.com/design/6UO2pnrYQMpzxGoEIS3T7p/Mes-Projets---Realisations--Copy-?node-id=0-1&t=4b6ISo5iZwQiLQZC-1',
    badges: ['Figma'],
  },
  {
    id: 7,
    title: 'Projet Le Monde Rural',
    description:
      "Développement d'un site web pour 'Le Monde Rural', une association dédiée à la promotion et au soutien des communautés rurales. Le site vise à fournir des informations, des ressources et une plateforme de communication pour les membres de l'association et le grand public.",
    image: img7,
    liveDemo: 'https://www.lemonderural.net',
    badges: ['VueJs', 'Tailwind CSS'],
  },
  {
    id: 8,
    title: 'Todo List – Application React',
    description:
      'Application de gestion de tâches développée avec React, permettant aux utilisateurs d’ajouter, modifier, supprimer et marquer des tâches comme complétées. Ce projet m’a permis de renforcer ma maîtrise des composants React, de la gestion d’état (useState) et de la logique interactive côté client, tout en appliquant de bonnes pratiques d’UI pour une expérience utilisateur simple et fluide.',
    image: img8,
    liveDemo: 'https://to-do-list-react-eta-sooty.vercel.app/',
    badges: ['ReactJs', 'CSS', 'TypeScript'],
  },
  {
    id: 9,
    title: 'Pokedex – Application React',
    description:
      'Application Pokedex développée avec React et l’API PokéAPI, permettant aux utilisateurs de rechercher et d’afficher des informations détaillées sur les Pokémon. Ce projet m’a permis de renforcer mes compétences en intégration d’API, en gestion d’état avec React (useState, useEffect) et en conception d’interfaces utilisateur réactives et attrayantes.',
    image: img9,
    liveDemo: 'https://pokedex-react-orcin-one.vercel.app/',
    badges: ['ReactJs', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 10,
    title: 'Portfolio Photographe',
    description:
      'Développement d’un portfolio en ligne pour un photographe, mettant en valeur ses œuvres à travers une galerie d’images interactive et responsive. Le site inclut des sections pour la biographie, les services proposés et un formulaire de contact, offrant ainsi une expérience utilisateur fluide et immersive.',
    image: img10,
    liveDemo: 'https://photographer-porfolio-one.vercel.app/',
    badges: ['React', 'Tailwind CSS', 'TypeScript'],
  },

  // Add more projects as needed
])
</script>

<template>
  <div class="flex flex-col items-center justify-center p-5 py-20 mt-10">
    <h2 class="text-3xl md:text-5xl uppercase">Mes <span class="font-extrabold">Projects</span></h2>
  </div>

  <section id="project" class="flex flex-col items-center">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto p-6 max-w-7xl">
      <div
        v-for="(project, indexProjects) in projects"
        :key="indexProjects"
        class="card bg-base-100 border border-base-300 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out"
      >
        <div class="rounded-lg w-full h-48 overflow-hidden">
          <figure class="h-48">
            <img :src="project.image" alt="Project Image" class="w-full h-full object-cover" />
          </figure>
        </div>

        <div class="card-body">
          <h2 class="card-title">{{ project.title }}</h2>
          <p class="">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(badge, indexBadge) in project.badges"
              :key="indexBadge"
              class="badge border border-red-600 text-xs"
            >
              {{ badge }}
            </span>
          </div>
          <div class="card-actions justify-end mt-5">
            <BoutonSeeProject :url="project.liveDemo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
