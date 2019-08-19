<template>
  <div id="services">
    <div class="services">
      <a href @click.prevent="serviceClick(webdev, 'webdev')">
        <ServicesLink image="services-code.svg" title="Web Design/Development" />
      </a>
      <a href @click.prevent="audioVideo = !audioVideo">
        <ServicesLink image="services-audio-video.svg" title="Audio/Video" />
      </a>
      <a href @click.prevent="graphicDesign = !graphicDesign">
        <ServicesLink image="services-graphic-design.svg" title="Graphic Design" />
      </a>
      <a href @click.prevent="brewing = !brewing">
        <ServicesLink image="services-brewing.svg" title="Brewing" />
      </a>

      <!-- <a href @click="webdev = !webdev">
        <div class="service">
          <g-image
            src="~/assets/images/services-code.svg"
            class="img-service"
            alt="Service: Web Design/Development"
          />
          <h5>Web Design/Development</h5>
        </div>
      </a>

      <a href @click="audioVideo = !audioVideo">
        <div class="service">
          <g-image
            src="~/assets/images/services-audio-video.svg"
            class="img-service"
            alt="Service: Web Design/Development"
          />
          <h5>Audio/Video</h5>
        </div>
      </a>

      <a href @click="graphicDesign = !graphicDesign">
        <div class="service">
          <g-image
            src="~/assets/images/services-graphic-design.svg"
            class="img-service"
            alt="Service: Web Design/Development"
          />
          <h5>Graphic Design</h5>
        </div>
      </a>

      <a href @click="brewing = !brewing">
        <div class="service">
          <g-image
            src="~/assets/images/services-brewing.svg"
            class="img-service"
            alt="Service: Web Design/Development"
          />
          <h5>Brewing</h5>
        </div>
      </a>-->
    </div>

    <transition name="serviceSlide">
      <div id="web-design" class="portfolio" v-if="webdev">
        <h2>Web Design/Development</h2>
        <div class="portfolio-pieces">
          <div class="porfolio-piece">piece</div>
        </div>
      </div>
    </transition>

    <transition name="serviceSlide">
      <div id="audio-video" class="portfolio" v-if="audioVideo">
        <h2>Audio/Video</h2>
        <div class="portfolio-pieces">
          <div class="porfolio-piece">piece</div>
        </div>
      </div>
    </transition>

    <transition name="serviceSlide">
      <div id="graphic-design" class="portfolio" v-if="graphicDesign">
        <h2>Graphic Design</h2>
        <div class="portfolio-pieces">
          <div class="porfolio-piece">piece</div>
        </div>
      </div>
    </transition>

    <transition name="serviceSlide">
      <div id="brewing" class="portfolio" v-if="brewing">
        <h2>Brewing</h2>
        <div class="portfolio-pieces">
          <div class="porfolio-piece">piece</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ServicesLink from "~/components/ServicesLink.vue";

export default {
  name: "Services",
  data() {
    return {
      webdev: false,
      audioVideo: false,
      graphicDesign: false,
      brewing: false
    };
  },
  components: {
    ServicesLink
  },
  methods: {
    serviceClick: function(serviceState, serviceName) {
      // Create Service Object
      let serviceObject = "this." + serviceName;

      console.log(
        "serviceState: " +
          serviceState +
          " | serviceName: " +
          serviceName +
          " | serviceObject: " +
          serviceObject
      );

      // Close all services
      this.webdev = false;
      this.audioVideo = false;
      this.graphicDesign = false;
      this.brewing = false;

      // Set service back to current state
      serviceObject = serviceState;

      // Toggle service
      serviceObject = !serviceObject;
    }
  }
};
</script>

<style lang="scss">
#services {
  .services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    margin: 0 15px;

    @media only screen and (max-width: 1010px) {
      grid-template-columns: 1fr;
      grid-gap: 0;
      margin: 10px 30px;
    }
  }
  .portfolio {
    .portfolio-pieces {
      .portfolio-piece {
        background: red;
      }
    }
  }
}

.serviceSlide-enter-active {
  transition: max-height 0.25s ease-in;
}

.serviceSlide-leave-active {
  transition: max-height 0.25s ease-out;
}

.serviceSlide-enter-to,
.serviceSlide-leave {
  max-height: 100px;
  overflow: hidden;
}

.serviceSlide-enter,
.serviceSlide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
