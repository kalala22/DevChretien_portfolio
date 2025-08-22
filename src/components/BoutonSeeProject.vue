<template>
  <div
    class="bg-red-700 text-primary px-11 py-3 rounded-lg hover:bg-red-800 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
  >
    <a :href="url" target="_blank" rel="noopener noreferrer"> Voir le projet </a>
  </div>
</template>

<script setup>
defineProps({
  url: {
    type: String, // la prop doit être une string
    required: true, // elle est obligatoire
  },
})
</script>
