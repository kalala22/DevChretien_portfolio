<script setup>
import { ref } from 'vue'

const links = ref([{ name: 'Contact', href: '#contact' }])
</script>

<template>
  <a
    :href="links[0].href"
    class="bg-red-600 text-white px-2 py-3 rounded-lg hover:bg-accenttransition-colors duration-300 flex items-center gap-2"
  >
    Contactez-moi
    <font-awesome-icon icon="envelope" />
  </a>
</template>
