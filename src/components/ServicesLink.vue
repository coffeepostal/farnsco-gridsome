<template>
  <div class="service">
    <g-image :src="setImage" class="img-service" :alt="title" :title="title" />
    <h5>{{ title }}</h5>
  </div>
</template>

<script>
export default {
  name: "ServicesLink",
  components: {},
  computed: {
    setImage: function() {
      return require("~/assets/images/" + this.image);
    }
  },
  props: {
    image: String,
    title: String
  }
};
</script>

<style lang="scss">
.service {
  background-color: white;
  padding: 20px 0;
  margin: 15px 0;
  border: 1px solid rgb(20, 30, 40);
  text-align: center;
  transition: background-color 0.25s;
  &:hover {
    background-color: rgb(240, 240, 240);
    img.img-service {
      transform: scale(1.2);
    }
  }
  img.img-service {
    width: 80px;
    transition: transform 0.25s;
  }
}
</style>
