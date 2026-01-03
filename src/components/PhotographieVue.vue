<template>
  <div class="flex flex-col items-center justify-center bg-base-300 h-1/2 mt-10">
    <div class="mt-10">
      <h2 class="text-3xl md:text-5xl text-center uppercase">
        Mes <span class="font-extrabold">Photographies</span>
      </h2>
    </div>

    <div class="text-lg md:text-xl font-light text-center mt-4 max-w-2xl px-4">
      À travers mon objectif, je capture des instants uniques, des émotions et des histoires. Chaque
      photographie est une manière de partager ma vision du monde et de transformer de simples
      moments en souvenirs inoubliables.
    </div>

    <div class="w-full max-w-4xl overflow-hidden mt-8 mb-8">
      <div id="image-carousel-animated" class="flex flex-nowrap animate-scroll">
        <div v-for="(photo, index) in [...photos, ...photos]" :key="index" class="flex-none mx-2">
          <AdvancedImage
            :cldImg="getCldImage(photo.id)"
            :alt="photo.alt"
            class="w-96 h-60 object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/vue'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity'

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
// 1. Initialisez Cloudinary avec votre Cloud Name
const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName,
  },
})

// 2. Liste de vos images (utilisez seulement l'ID public de l'image sur Cloudinary)
const photos = [
  { id: 'CHK_0895_zqkknw', alt: 'Description 1' },
  { id: 'CHK_0843_hvhmyg', alt: 'Description 2' },
  { id: 'CHK_0915_zrngvv', alt: 'Description 3' },
  { id: 'DSC_3033_ir4pvy', alt: 'Description 4' },
  { id: 'DSC_3030_rspyqz', alt: 'Description 5' },
]

// 3. Fonction pour générer l'image optimisée
const getCldImage = (publicId) => {
  return cld
    .image(publicId)
    .resize(fill().width(600).height(450).gravity(autoGravity())) // Redimensionne pile à la taille du carrousel
    .format('auto') // Choosit le meilleur format (WebP/AVIF)
    .quality('auto') // Compresse intelligemment
}

// Calcul pour l'animation (identique à avant)
const totalScroll = (256 + 16) * photos.length
</script>

<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Utilisation d'une variable CSS ou calcul basé sur le nombre d'images */
    transform: translateX(v-bind("'-' + totalScroll + 'px'"));
  }
}

.animate-scroll {
  display: flex;
  animation: scroll 30s linear infinite;
  width: max-content;
}

/* .animate-scroll:hover {
  animation-play-state: paused;
} */
</style>
