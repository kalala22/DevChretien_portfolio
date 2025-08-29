<template>
  <div id="contact" class="flex flex-col items-center justify-center bg-base-300 h-1/2 mt-10">
    <div class="absolute flex items-center justify-center opacity-10">
      <font-awesome-icon icon="paper-plane" class="text-primary text-[15rem] md:text-[15rem]" />
    </div>

    <div class="mt-20">
      <h2 class="text-3xl md:text-5xl text-center uppercase">
        Contactez <span class="font-extrabold">Moi</span>
      </h2>
    </div>

    <div>
      <p class="text-lg md:text-xl font-light text-center mt-4 max-w-2xl">
        Vous avez un projet en tête ou souhaitez simplement discuter ? N'hésitez pas à me contacter.
        Je suis toujours ouvert aux nouvelles opportunités et collaborations.
      </p>
    </div>

    <div class="w-full flex justify-center mt-5">
      <div class="w-full mt-10 p-6">
        <form @submit.prevent="sendMessage" class="max-w-3xl mx-auto pt-8">
          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 md:mb-20 mb-8">
            <!-- Prénom -->
            <div>
              <label class="block text-sm md:text-xl font-bold mb-2">VOTRE PRENOM</label>
              <input
                name="name"
                v-model="form.prenom"
                type="text"
                placeholder="Entrez votre prénom"
                class="w-full py-3 md:text-lg pl-2 border rounded-lg focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02] bg-base-300"
                required
              />
            </div>

            <!-- Nom -->
            <div>
              <label class="block text-sm md:text-xl font-bold mb-2">VOTRE NOM</label>
              <input
                name="name"
                v-model="form.nom"
                type="text"
                placeholder="Entrez votre nom"
                class="w-full py-3 md:text-lg pl-2 border rounded-lg focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02] bg-base-300"
                required
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm md:text-xl font-bold mb-2">VOTRE ADRESSE MAIL</label>
              <input
                name="email"
                v-model="form.email"
                type="email"
                placeholder="Entrez votre adresse mail"
                class="w-full py-3 md:text-lg pl-2 border rounded-lg focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02] bg-base-300"
                required
              />
            </div>

            <!-- Téléphone -->
            <div>
              <label class="block text-sm md:text-lg pl-2 font-bold mb-2"
                >VOTRE NUMERO DE TELEPHONE</label
              >
              <input
                v-model="form.numero"
                name="phone"
                type="tel"
                pattern="^\+?[0-9]{8,15}$"
                placeholder="Entrez votre numéro de téléphone"
                class="w-full py-3 md:text-lg pl-2 border rounded-lg focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02] bg-base-300"
              />
            </div>
          </div>

          <!-- Message -->
          <div class="mb-8">
            <label class="block text-sm md:text-xl font-bold mb-2">VOTRE MESSAGE</label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Écrivez votre message"
              class="w-full py-3 md:text-xl pl-2 border rounded-lg focus:border-red-700 transition duration-300 ease-in-out outline-none focus:scale-[1.02] resize-none bg-base-300"
              required
            ></textarea>
          </div>

          <div
            v-if="success"
            class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-6 text-left"
            role="alert"
          >
            <strong class="font-bold">Message envoyé !</strong>
            <span class="block sm:inline"> Merci, je vous répondrai dès que possible.</span>
          </div>

          <!-- Message d'Erreur -->
          <div
            v-if="error"
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6 text-left"
            role="alert"
          >
            <strong class="font-bold">Erreur !</strong>
            <span class="block sm:inline"> Une erreur est survenue. Veuillez réessayer.</span>
          </div>

          <!-- Bouton -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full rounded-lg bg-[#c22e23] hover:bg-[#79140f] text-white py-3 font-bold shadow-md transition-all duration-300 ease-in-out outline-none focus:scale-[1.02] flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
          >
            <!-- État de chargement -->
            <span v-if="isLoading" class="flex items-center">
              <font-awesome-icon icon="spinner" class="animate-spin mr-2" />
              Envoi en cours...
            </span>

            <!-- État normal -->
            <span v-else class="flex items-center">
              ENVOYEZ VOTRE MESSAGE
              <font-awesome-icon icon="envelope" class="ml-2" />
            </span>
          </button>
        </form>

        <!-- <dialog :open="success" class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">✅ Merci !</h3>
            <p class="py-4">Votre message a bien été envoyé. Je vous répondrai dès que possible.</p>
            <div class="modal-action">
              <button class="btn" @click="success = false">Fermer</button>
            </div>
          </div>
          <form method="dialog" class="modal-backdrop" @click="success = false"></form>
        </dialog> -->
      </div>
    </div>
  </div>
</template>
<script setup>
// import  iconsMessage from '@/assets/icons/vector_operator.svg'
import { ref } from 'vue'
const form = ref({
  prenom: '',
  nom: '',
  email: '',
  numero: '',
  message: '',
})
const isLoading = ref(false)
const error = ref(false)
const success = ref(false)

const sendMessage = async () => {
  isLoading.value = true
  success.value = false
  error.value = false
  try {
    const res = await fetch('https://formspree.io/f/xjkoqdpv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    if (res.ok) {
      success.value = true
      form.value = { prenom: '', nom: '', email: '', numero: '', message: '' }
    } else {
      error.value = true
    }
  } catch (err) {
    error.value = true
    console.error('Erreur :', err)
  } finally {
    isLoading.value = false
  }
}
</script>
