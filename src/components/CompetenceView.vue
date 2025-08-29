<script setup>
import Skils from './SkilsView.vue'
import { ref } from 'vue'

const listSkills = ref([
  {
    title: 'Frontend Development',
    icon: 'fa-solid fa-code',
    description:
      'Capacité à concevoir et développer des interfaces web interactives et responsives en utilisant HTML, CSS, JavaScript et des frameworks modernes comme Vue.js et React. Sens du détail visuel et optimisation des performances pour offrir une expérience utilisateur fluide.',
  },
  {
    title: 'Backend Development',
    icon: 'fa-solid fa-server',
    description:
      'Compétence dans la création et la gestion de serveurs, bases de données et API en utilisant Node.js, Express, et MongoDB. Expérience dans la mise en place de systèmes sécurisés et évolutifs pour gérer les données et les utilisateurs.',
  },
  {
    title: 'UI/UX Design',
    icon: 'fa-solid fa-palette',
    description:
      "Aptitude à concevoir des interfaces utilisateur intuitives et attrayantes en utilisant des outils comme Figma et Adobe XD. Compréhension des principes de design centrés sur l'utilisateur pour améliorer l'expérience globale.",
  },
  {
    title: 'Photographie',
    icon: 'fa-solid fa-camera',
    description:
      'Capacité à capturer des moments uniques avec créativité, spécialisé en photographie événementielle, portrait et corporate. Maîtrise des techniques de lumière et de retouche photo pour un rendu professionnel et artistique.',
  },
  {
    title: 'Graphisme',
    icon: 'fa-solid fa-image',
    description:
      "Compétence en création de visuels percutants pour le web et l'impression, utilisant des logiciels comme Adobe Photoshop et Illustrator. Expérience en conception de logos, bannières, et supports marketing pour renforcer l'identité visuelle des marques.",
  },
  {
    title: 'Gestion de Projet',
    icon: 'fa-solid fa-tasks',
    description:
      'Aptitude à planifier, organiser et superviser des projets de développement web en utilisant des méthodologies agiles comme Scrum et Kanban. Compétence en communication avec les équipes et les clients pour assurer la livraison dans les délais et le respect des exigences.',
  },
])
</script>

<template>
  <div class="">
    <section id="competence" class="flex flex-col items-center justify-center p-5 py-20">
      <div>
        <h2 class="neutral text-3xl md:text-5xl text-center uppercase">
          Mes <span class="font-extrabold">Compétences</span>
        </h2>
      </div>
      <div class="mt-5">
        <p class="neutral text-lg md:text-xl text-center max-w-2xl">
          En tant que développeur web fullstack, je maîtrise les technologies front-end et back-end
          pour créer des applications web modernes et performantes. Mon expertise couvre le
          développement d'interfaces utilisateur interactives, la gestion de bases de données et
          l'intégration d'API.
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-8 p-4 md:max-w-7xl md:mx-auto"
      >
        <div
          v-for="skill in listSkills"
          :key="skill.title"
          class="bg-base-100/30 border border-base-300 rounded-lg p-6 hover:scale-[1.02] hover:border-red-600 transition-all duration-300 ease-in-out flex flex-col text-center items-center"
        >
          <!-- Amélioration 5: Ajout de l'icône -->
          <div class="text-4xl text-red-600 mb-4">
            <font-awesome-icon :icon="skill.icon" />
          </div>

          <h3 class="text-2xl font-bold mb-4">{{ skill.title }}</h3>
          <p class="text-base-content/80">{{ skill.description }}</p>
        </div>
      </div>
    </section>
    <Skils />
  </div>
</template>
