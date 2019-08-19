<template>
  <nav class="nav">
    <g-link class="nav__link" to="/">Home</g-link>
    <g-link class="nav__link" to="/about">About</g-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
  //   props: ["showTitle"]
};
</script>

<style lang="scss">
.nav__link {
  margin-left: 20px;
}
</style>
