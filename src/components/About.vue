<template>
  <div id="about">
    <div class="photo">
      <g-image src="~/assets/images/portrait-adam.jpg" alt="Photo of Adam Farnsworth" />
    </div>
    <div class="text">
      <h2>Let me introduce myself...</h2>
      <p>Hello, my name is Adam Farnsworth!</p>
      <p>
        I've been a web designer and developer for a little over a decade now. I've also been a filmmaker, a
        graphic
        designer, a brewer,
        and podcaster. If you've stumbled onto my website, you might be wanting to make one of these yourself,
        and
        are looking for someone to give you a hand. Drop me an email below, and let's connect.
      </p>
      <p>Thanks,</p>
      <p class="signature">Adam</p>
      <p>FarnsCo, CEO</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {}
};
</script>

<style lang="scss">
#about {
  background: rgb(255, 197, 0);
  padding: 120px 120px 120px;

  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-gap: 50px;

  .photo {
    @media screen and (max-width: 1010px) and (min-width: 770px) {
      height: 400px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text {
  }
  h2 {
    margin: 0 0 20px;
  }
  p {
    font-size: 24px;
    padding-bottom: 15px;
    line-height: 1.2;
    &.signature {
      font-family: "Rock Salt", cursive;
      font-size: 36px;
    }
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 1010px) {
    grid-template-columns: 1fr;
    padding: 60px 60px 60px;
  }
}
</style>
