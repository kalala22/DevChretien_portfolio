<template>
  <div id="about" class="flex flex-col items-center bg-base-300 justify-center p-5 mt-10">
    <!-- <div class="absolute flex items-center justify-center opacity-10">
      <font-awesome-icon icon="code" class="text-primary/20 text-[15rem] md:text-[15rem]" />
    </div> -->
    <div class="pt-20">
      <h2 class="neutral text-3xl md:text-5xl text-center uppercase">
        À propos de <span class="font-extrabold">Moi</span>
      </h2>
    </div>

    <motion.div
      :initial="{ opacity: 0, scale: 0 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{
        duration: 0.6,
        scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
      }"
      class="md:flex md:items-center md:flex-row-reverse md:justify-center"
    >
      <div class="">
        <p class="neutral text-lg md:text-xl text-center mt-4 max-w-2xl">
          <span class="underline decoration-red-500">Développeur web fullstack</span> passionné, je
          conçois des applications modernes et interactives en alliant front-end, back-end et sens
          du design. Créatif et polyvalent, mon expérience en photographie et graphisme apporte une
          touche visuelle unique à mes projets.
        </p>
      </div>

      <div class="mt-10">
        <img :src="flatImage" alt="image plat dev" class="md:h-96" />
      </div>
    </motion.div>
  </div>
</template>
<script setup>
import { motion } from 'motion-v'

import flatImage from '@/assets/img/programmer_flat.png'
</script>
