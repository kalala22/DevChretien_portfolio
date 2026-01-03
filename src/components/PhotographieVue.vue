<template>
  <div class="flex flex-col items-center justify-center bg-base-300 h-1/2 mt-10">
    <div class="mt-10">
      <h2 class="text-3xl md:text-5xl text-center uppercase">
        Mes <span class="font-extrabold">Photographies</span>
      </h2>
    </div>
    <div class="text-lg md:text-xl font-light text-center mt-4 max-w-2xl">
      À travers mon objectif, je capture des instants uniques, des émotions et des histoires. Chaque
      photographie est une manière de partager ma vision du monde et de transformer de simples
      moments en souvenirs inoubliables.
    </div>
    <div class="w-full max-w-4xl overflow-hidden mt-8">
      <!-- Added max-w-4xl and mt-8 for better presentation -->
      <div id="image-carousel-animated" class="flex flex-nowrap animate-scroll">
        <!-- Duplicate your images to ensure a smooth, continuous loop -->
        <img
          src="https://via.placeholder.com/300x200?text=Photo+1"
          alt="Photography 1"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Photo+2"
          alt="Photography 2"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Photo+3"
          alt="Photography 3"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Photo+4"
          alt="Photography 4"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Photo+5"
          alt="Photography 5"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Photo+6"
          alt="Photography 6"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />

        <!-- Duplicate images to create an infinite loop effect -->
        <img
          src="https://via.placeholder.com/300x200?text=Photo+1"
          alt="Photography 1"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Photo+2"
          alt="Photography 2"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Photo+3"
          alt="Photography 3"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Photo+4"
          alt="Photography 4"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Photo+5"
          alt="Photography 5"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300x200?text=Photo+6"
          alt="Photography 6"
          class="flex-none w-64 h-48 object-cover mx-2 rounded shadow-lg"
        />
      </div>
    </div>
  </div>
</template>
<style>
/* Define the keyframes for the scrolling animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Adjust this value based on the total width of one set of your images
       and the margin between them.
       For 6 images with w-64 (256px) and mx-2 (8px left + 8px right = 16px total margin),
       one image is 256 + 16 = 272px.
       So 6 images is 6 * 272px = 1632px.
       We shift by this amount to loop seamlessly.
    */
    transform: translateX(
      calc(-272px * 6)
    ); /* (width of image + total horizontal margin) * number of images */
  }
}

/* Apply the animation to the container holding the images */
.animate-scroll {
  animation: scroll 30s linear infinite; /* 30s duration, linear speed, infinite loop */
  width: max-content; /* Ensure the container is wide enough for all duplicated images */
}

/* Optional: Pause animation on hover */
.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
<script setup></script>
