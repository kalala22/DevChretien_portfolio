<template>
  <div
    class="relative bg-red-600 text-white font-bold px-11 pr-10 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
    @click="handleClick"
  >
    <span>Voir le projet</span>
    <font-awesome-icon
      icon="arrow-up-right-from-square"
      class="absolute top-2 right-2 text-sm opacity-70"
    />
  </div>

  <!-- Modale -->

  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="bg-base-100 p-6 rounded-lg shadow-lg w-80 relative z-60">
      <h2 class="text-lg font-bold">Lien indisponible</h2>
      <p class="mt-2">Ce projet n’a pas encore de démonstration en ligne.</p>
      <div class="mt-4 flex justify-end">
        <button class="btn btn-sm bg-red-700 text-white" @click="showModal = false">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  url: {
    type: String,
    default: null,
  },
})

const showModal = ref(false)

const handleClick = () => {
  if (props.url) {
    window.open(props.url, '_blank')
  } else {
    showModal.value = true
  }
}
</script>
