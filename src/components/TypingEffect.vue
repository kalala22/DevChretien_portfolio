<template>
  <div class="inline-block font-montserrat">
    <!-- CORRECTION : On utilise la variable réactive 'typeValue' (avec un V majuscule) -->
    <span class="typed-text">{{ typeValue }}</span>
    <span class="cursor" :class="{ typing: isTypingActive }">&nbsp;</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// --- État Réactif ---
const typeValue = ref('')
const isTypingActive = ref(false)

// --- Configuration ---
const words = ['Full-Stack Developper', 'Photographer', 'UI/UX Designer']
const typingSpeed = 100
const erasingSpeed = 50
const delayBetweenWords = 2000

let wordIndex = 0
let charIndex = 0
let isErasing = false

// --- Fonction d'effet de machine à écrire (Aucun changement ici) ---
const typeWriterEffect = () => {
  const currentWord = words[wordIndex]

  if (isErasing) {
    if (charIndex > 0) {
      isTypingActive.value = true
      typeValue.value = currentWord.substring(0, charIndex - 1)
      charIndex--
      setTimeout(typeWriterEffect, erasingSpeed)
    } else {
      isErasing = false
      isTypingActive.value = false
      wordIndex = (wordIndex + 1) % words.length
      setTimeout(typeWriterEffect, typingSpeed + 500)
    }
  } else {
    if (charIndex < currentWord.length) {
      isTypingActive.value = true
      typeValue.value += currentWord.charAt(charIndex)
      charIndex++
      setTimeout(typeWriterEffect, typingSpeed)
    } else {
      isErasing = true
      isTypingActive.value = false
      setTimeout(typeWriterEffect, delayBetweenWords)
    }
  }
}

// --- Démarrage de l'effet ---
onMounted(() => {
  setTimeout(typeWriterEffect, delayBetweenWords)
})
</script>

<style scoped>
/* Le style est correct, aucun changement nécessaire */
.cursor {
  display: inline-block;
  background-color: currentColor;
  margin-left: 0.1rem;
  width: 2px;
  animation: blink 1s infinite;
}

.cursor.typing {
  animation: none;
}

@keyframes blink {
  0% {
    background-color: currentColor;
  }
  49% {
    background-color: currentColor;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
  100% {
    background-color: currentColor;
  }
}
</style>
