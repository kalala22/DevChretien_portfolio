<script setup>
import { ref } from 'vue'

const links = ref([{ name: 'Contact', href: '#contact' }])
</script>

<template>
  <a
    :href="links[0].href"
    class="bg-red-600 text-white font-bold px-2 py-3 rounded-lg hover:bg-red-700 duration-300 flex items-center"
  >
    Contactez-moi
    <font-awesome-icon icon="envelope" />
  </a>
</template>
