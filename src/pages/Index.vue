<template>
  <Layout>
    <Services />
    <About />
    <Skills />
    <Resume />
    <Contact />

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
import About from "~/components/About.vue";
import Contact from "~/components/Contact.vue";
import Resume from "~/components/Resume.vue";
import Services from "~/components/Services.vue";
import Skills from "~/components/Skills.vue";

export default {
  components: {
    About,
    Contact,
    Resume,
    Services,
    Skills
  },
  metaInfo: {
    title: "Farns.Co"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
