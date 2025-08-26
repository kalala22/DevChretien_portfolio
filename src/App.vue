<script setup>
import Navbar from './components/NavbarView.vue'
import Home from './components/HomeView.vue'
import About from './components/AboutSectionView.vue'
import Competence from './components/CompetenceView.vue'
import Project from './components/ProjectView.vue'
import Contact from './components/ContactView.vue'
import FooterView from './components/FooterView.vue'
</script>

<template>
  <!-- Header components -->
  <div class="">
    <Navbar />
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="competence">
        <!-- Compétences section will go here -->
        <Competence />
      </section>
      <section id="project">
        <!-- Projets section will go here -->
        <Project />
      </section>
      <section id="contact">
        <!-- Contact section will go here -->
        <Contact />
      </section>
      <footer>
        <!-- Footer content will go here -->
        <FooterView />
      </footer>
    </div>
  </div>
</template>
