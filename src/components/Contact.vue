<template>
  <div id="contact">
    <h2>Contact FarnsCo</h2>
    <p class="text-center links">
      <a href="mailto:hello@farns.co">
        <font-awesome-icon class="fa-2x social-link" :icon="['far', 'at']" />hello@farns.co
      </a>
      <a href="//instagram.com/hellofarnsco" target="_blank">
        <font-awesome-icon class="fa-2x social-link" :icon="['fab', 'instagram']" />@hellofarnsco
      </a>
      <a href="//twitter.com/hellofarnsco" target="_blank">
        <font-awesome-icon class="fa-2x social-link" :icon="['fab', 'twitter']" />@hellofarnsco
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {}
};
</script>

<style lang="scss">
#contact {
  background: rgb(255, 196, 0);

  padding: 120px 120px 120px;

  .links {
    font-size: 32px;
    margin-top: -0.5em;
    vertical-align: middle;
    a {
      margin: 0 0.5em;
      color: rgb(20, 30, 40);
      .social-link {
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
}
</style>
