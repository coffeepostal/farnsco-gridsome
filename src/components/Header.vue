<template>
  <header class="header">
    <h1>
      FarnsCo
      <span>makes</span>
    </h1>
    <h2 id="header-services">
      <vue-typer
        :text="['Websites', 'Podcasts', 'Beer', 'Motion Graphics', 'Videos', 'Posters', 'Brochures', 'Business Cards', 'Design Education']"
        :shuffle="true"
      ></vue-typer>
    </h2>
  </header>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Header",
  components: {
    VueTyper
  }
};
</script>

<style lang="scss">
.header {
  background-image: url("../assets/images/cristofer-jeschke-1389566-unsplash.jpg");
  background-size: cover;
  padding: 200px;
  h1,
  h2,
  .vue-typer .custom.char {
    color: white;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    line-height: 1;
    span {
      font-size: 70%;
    }
  }
  h2,
  .vue-typer .custom.char {
    font-size: 80px;
    font-weight: 300;
  }
  @media screen and (max-width: 1010px) {
    padding: 100px 50px;

    h1,
    h2 {
      span {
        font-size: 100%;
      }
    }

    h2 {
      font-size: 60px;
    }
  }
}
</style>
