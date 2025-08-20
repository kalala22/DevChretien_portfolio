<script setup>
import Navbar from './components/NavbarView.vue'
import Home from './components/HomeView.vue'
import About from './components/AboutSectionView.vue'
</script>


<template>
  <!-- Header components -->
   <div>
    
      <Navbar/>
    <div class="bg-background">
      <section id="home">
         <Home />
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="competence">
        <!-- Compétences section will go here -->

      </section>
      <section id="project">
        <!-- Projets section will go here --> 
      </section>
      <section id="contact">
        <!-- Contact section will go here -->
      </section>
    </div>
    
   </div>
</template>


