<template>
  <div id="skills">
    <h2>Skills</h2>

    <div class="skill-list">
      <div class="skill">
        <div class="skill-rating">
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
        </div>

        <div class="skill-text">
          <div class="skill-tags">
            <div class="tag graphic-design">Graphic Design</div>
          </div>

          <div class="skill-title">Graphic Design</div>
        </div>
      </div>

      <div class="skill">
        <div class="skill-rating">
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
        </div>

        <div class="skill-text">
          <div class="skill-tags">
            <div class="tag graphic-design">Graphic Design</div>
            <div class="tag web-design">Web Dev</div>
            <div class="tag motion-design">Motion</div>
          </div>

          <div class="skill-title">User Experience</div>
        </div>
      </div>

      <div class="skill">
        <div class="skill-rating">
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-empty"></span>
        </div>

        <div class="skill-text">
          <div class="skill-tags">
            <div class="tag motion-design">Motion</div>
          </div>

          <div class="skill-title">Motion Graphic Animation</div>
        </div>
      </div>

      <div class="skill">
        <div class="skill-rating">
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
        </div>

        <div class="skill-text">
          <div class="skill-tags">
            <div class="tag web-design">Web Dev</div>
          </div>

          <div class="skill-title">HTML/CSS/JavaScript</div>
        </div>
      </div>

      <div class="skill">
        <div class="skill-rating">
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
        </div>

        <div class="skill-text">
          <div class="skill-tags">
            <div class="tag graphic-design">Graphic Design</div>
            <div class="tag web-design">Web Dev</div>
          </div>

          <div class="skill-title">PHP/WordPress</div>
        </div>
      </div>

      <div class="skill">
        <div class="skill-rating">
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-empty"></span>
          <span class="rating-empty"></span>
          <span class="rating-empty"></span>
        </div>

        <div class="skill-text">
          <div class="skill-tags">
            <div class="tag web-design">Web Dev</div>
          </div>

          <div class="skill-title">NodeJS / Express / VueJS</div>
        </div>
      </div>

      <div class="skill">
        <div class="skill-rating">
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-empty"></span>
        </div>

        <div class="skill-text">
          <div class="skill-tags">
            <div class="tag graphic-design">Graphic Design</div>
            <div class="tag web-design">Web Dev</div>
            <div class="tag motion-design">Motion</div>
          </div>

          <div class="skill-title">Adobe Creative Suite</div>
        </div>
      </div>

      <div class="skill">
        <div class="skill-rating">
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-empty"></span>
        </div>

        <div class="skill-text">
          <div class="skill-tags">
            <div class="tag motion-design">Motion</div>
          </div>

          <div class="skill-title">Adobe After Effects</div>
        </div>
      </div>

      <div class="skill">
        <div class="skill-rating">
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-empty"></span>
          <span class="rating-empty"></span>
        </div>

        <div class="skill-text">
          <div class="skill-tags">
            <div class="tag motion-design">Motion</div>
          </div>

          <div class="skill-title">Cinema 4D</div>
        </div>
      </div>

      <div class="skill">
        <div class="skill-rating">
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-filled"></span>
          <span class="rating-empty"></span>
          <span class="rating-empty"></span>
        </div>

        <div class="skill-text">
          <div class="skill-tags">
            <div class="tag other">Interpersonal</div>
          </div>

          <div class="skill-title">Training/Presenting</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  components: {}
};
</script>

<style lang="scss">
#skills {
  background: rgb(20, 30, 40);
  padding: 120px 120px 120px;

  color: white;

  @media screen and (max-width: 1010px) {
    padding: 60px 60px 60px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: white;
  }

  .skill-list {
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 1220px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 770px) {
      grid-template-columns: 1fr;
    }

    div.skill {
      display: grid;
      grid-template-columns: max-content auto;
      grid-gap: 10px;

      &:hover {
        .skill-text {
          .skill-tags {
            transform: translate(0, -30px);
            opacity: 1;
          }
        }
      }

      .skill-rating {
        .rating-filled,
        .rating-empty {
          display: inline-block;
          height: 10px;
          width: 10px;
          border: 2px solid white;
          border-radius: 10px;
        }

        .rating-filled {
          background: white;
        }
      }

      .skill-text {
        .skill-title {
          background: rgb(20, 30, 40);
        }

        .skill-tags {
          position: absolute;
          opacity: 0;

          transition: all 0.25s;

          @media screen and (max-width: 1010px) {
            display: none;
          }

          .tag {
            display: inline;

            font-family: "Montserrat", sans-serif;
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            color: rgb(20, 30, 40);

            padding: 5px;
            margin-left: 5px;

            &.graphic-design {
              background: rgb(255, 0, 186);
            }

            &.web-design {
              background: rgb(186, 255, 0);
            }

            &.motion-design {
              background: rgb(0, 186, 255);
            }

            &.other {
              background: rgb(255, 186, 0);
            }
          }
        }
      }
    }
  }
}
</style>
