<template>
  <div id="about" class="flex flex-col items-center justify-center bg-secondary p-5 h-screen mt-10">
    <div class="absolute flex items-center justify-center opacity-10">
      <font-awesome-icon icon="code" class="text-primary text-[15rem] md:text-[15rem]" />
    </div>

    <div class="">
      <h2 class="text-primary text-3xl md:text-5xl text-center uppercase">
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
    >
      <p class="text-primary text-lg md:text-2xl text-center mt-4 max-w-2xl">
        <span class="underline decoration-decoration">Développeur web fullstack</span> passionné, je
        conçois des applications modernes et interactives en alliant front-end, back-end et sens du
        design. Créatif et polyvalent, mon expérience en photographie et graphisme apporte une
        touche visuelle unique à mes projets.
      </p>
    </motion.div>
  </div>
</template>
<script setup>
import { motion } from 'motion-v'
</script>
