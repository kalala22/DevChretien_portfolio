<template>
  <div>
    <!-- Ton contenu principal -->
    <slot />

    <!-- On enveloppe le bouton dans le composant <transition> de Vue -->
    <transition name="fade">
      <div v-show="showButton" class="fixed bottom-5 right-5">
        <button
          @click="scrollTop"
          class="bg-red-600 text-white w-full h-full p-5 rounded-full shadow-lg hover:bg-red-700 transition duration-300 flex items-center space-x-2"
        >
          <font-awesome-icon icon="arrow-up" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)
const atBottom = ref(false)

const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  const scrollTop = window.scrollY

  // Affiche le bouton dès qu'on a scrollé un peu (ex: plus de 400px)
  showButton.value = scrollTop > 400

  // Vérifie si on est presque tout en bas
  atBottom.value = scrollTop + clientHeight >= scrollHeight - 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// La fonction contactMe n'est plus nécessaire, le lien <a> s'en charge.

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// La fonction handleClick n'est plus nécessaire car on a deux éléments distincts.
</script>

<style>
/* CSS pour l'animation de fondu (fade) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
