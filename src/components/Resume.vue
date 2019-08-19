<template>
  <div id="resume">
    <h2>
      Resume
      <span class="small">
        <a href id="resume-launch" class="button" @click.prevent="launch = !launch">Open Resume</a>
      </span>
    </h2>
    <transition name="resumeSlide">
      <div class="content" v-if="launch">
        <div class="page-1">
          <h3>Profile</h3>
          <p>
            I am an experienced Web Developer and Graphic Designer. I am adept in all stages of web development:
            user
            interface and user experience; graphic design: layout, color theory, and print design; and video and
            sound
            production: editing, mixing, and post-production. My diverse skill-set allows me to approach
            problems from
            many different perspectives. This enables me to quickly and creatively solve problems. I also have a
            passion
            to teach and share. This, combined with my skills makes for a dynamic, informative, and effective
            learning
            experience.
          </p>

          <h3>Employment History</h3>

          <div class="resume-feature">
            <div class="feature-title">Freelance Web Developer</div>
            <div class="feature-context">Anacortes, WA</div>
          </div>
          <p class="date">December 2018 - Present</p>
          <ul>
            <li>
              Worked to design, code, test, and debug websites. Managed front-end and back-end development of
              clients’
              websites, as well as successfully identifying, diagnosing, and fixing website issues, such as:
              broken
              links, typographical errors,
              formatting issues, and coding errors.
            </li>
            <li>Worked with clients performing web design, development, and social media management.</li>
            <li>
              Helped to achieve a consistent look and visual theme across the website by promoting and
              implementing
              uniform fonts,
              formatting, images, and layout.
            </li>
          </ul>

          <div class="resume-feature">
            <div class="feature-title">Brewer, Anacortes Brewery</div>
            <div class="feature-context">Anacortes, WA</div>
          </div>
          <p class="date">June 2017 - December 2018</p>
          <ul>
            <li>
              Worked productively with Head Brewer to plan, execute, and maintain the brewery:
              <ul>
                <li>
                  Market analysis, recipe creation, ingredient maintenance, brewing, fermentation
                  maintenance, tank cleaning, keg
                  filling/washing, cask filling/washing, facility maintenance.
                </li>
              </ul>
            </li>
            <li>Brewing events, brewery representation, and brewer training.</li>
          </ul>

          <div class="resume-feature">
            <div class="feature-title">Interactive Lead / Partner, ACME Creative</div>
            <div class="feature-context">Anacortes, WA</div>
          </div>
          <p class="date">June 2016 - June 2017</p>
          <ul>
            <li>
              Worked as a productive and positive team lead to design, code, test, and debug websites.
              Managing front-end and back-end development of clients’, and internal, websites.
            </li>
            <li>
              Successfully identified, diagnosed, and fixed website problems, including: broken links,
              typographical errors,
              formatting issues, and coding errors.
            </li>
            <li>
              Helped to achieve a consistent look and visual theme across the website by promoting and
              implementing uniform fonts,
              formatting, images, and layout.
            </li>
            <li>Worked to assess competing websites in regards to content, look, and feel.</li>
            <li>
              Evaluated and became knowledgeable in new standards, technologies, and trends in website
              development.
            </li>
            <li>Planned, produced, and edited animated and live action video content.</li>
          </ul>

          <div class="resume-feature">
            <div class="feature-title">Production Principal / Owner, Industrious Industries</div>
            <div class="feature-context">Anacortes, WA</div>
          </div>
          <p class="date">April 2012 - May 2016</p>
          <ul>
            <li>
              Same job requirements as ACME Creative (directly above), but also included:
              <ul>
                <li>Managed finances, day to day scheduling, and studio management.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="page-2">
          <h3>Additional Skills</h3>

          <div class="resume-feature">
            <div class="feature-title">Client Training</div>
            <div class="feature-context">ACME Creative/Industrious Industries</div>
          </div>
          <p>
            A large part of my responsibilities while at ACME Creative and Industrious Industries was to provide
            one-on-one training
            for our clients on many topics, including: social media management, basic photography, WordPress
            usage and management,
            template usage, design theory, general application usage, and internet services implementation. For
            many of our clients,
            we were their technical help. We provided some training as part of a new website or identity
            package, but we often found
            ourselves helping them with general internet usage as well.
          </p>

          <div class="resume-feature">
            <div class="feature-title">Adult Continued Learning Teaching</div>
            <div class="feature-context">Walla Walla Community College</div>
          </div>
          <p>
            Walla Walla Community College has a program for the adults in their community to continue non-degreed
            learning, offering
            many classes on various subjects. My film-making mentor taught a film theory and appreciation class,
            and he asked me to
            fill in several times over several years. The class consisted of a film screening, a short lecture
            on techniques,
            history, and film theory, followed by an open discussion.
          </p>

          <h3>Volunteer Experience</h3>

          <div class="resume-feature">
            <div class="feature-title">Anacortes Planning Commission</div>
            <div class="feature-context">City of Anacortes, 2015-2016</div>
          </div>
          <p>
            As a member of the Anacortes Planning Commission, I made recommendations to City Council on various
            zoning, planning,
            and departmental issues. During my time on the commission, I helped draft the first few iterations
            of the 2016
            Comprehensive Plan.
          </p>

          <div class="resume-feature">
            <div class="feature-title">Tech. Department Advisory Committee</div>
            <div class="feature-context">Walla Walla University, 2011-2012</div>
          </div>
          <p>
            As a member of the professional design community and alum, I was asked to assess curriculum and
            student final projects,
            and provide real-world context for the program.
          </p>

          <h3>Education</h3>

          <div class="resume-feature">
            <div class="feature-title">Skagit Valley College, Craft Brewing Certification</div>
            <div class="feature-context">Mt. Vernon, WA</div>
          </div>
          <p class="date">August 2016 - June 2017</p>

          <div class="resume-feature">
            <div class="feature-title">Walla Walla University, BS in New Media Imaging</div>
            <div class="feature-context">College Place, WA</div>
          </div>
          <p class="date">August 2002 - June 2007</p>
          <p>New Media Imaging included courses on print and web design, video, and photography.</p>

          <h3>References</h3>
          <p>Available upon request.</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Resume",
  components: {},
  data() {
    return {
      launch: false
    };
  },
  methods: {}
};
</script>

<style lang="scss">
#resume {
  padding: 120px 120px 120px;

  @media screen and (max-width: 1010px) {
    padding: 60px 60px 60px;
  }

  h2 {
  }

  h3 {
    border-bottom: 2px solid rgb(20, 30, 40);
    padding-bottom: 5px;
    margin: 30px 0 15px;
    font-size: 0.9rem;
    font-weight: 900;
  }

  .small {
    font-size: 40%;
    vertical-align: middle;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;

    font-size: 1rem;

    // transition: all 1s;

    @media screen and (max-width: 1010px) {
      grid-template-columns: 1fr;
    }
  }

  .resume-feature {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;

    font-family: "Montserrat", sans-serif;

    margin: 20px 0 10px;

    .feature-title {
      font-weight: 800;
    }

    .feature-context {
      font-weight: 300;
      text-align: right;
    }
  }

  ul {
    font-family: "Arvo", serif;
    color: rgb(20, 30, 40);
    list-style: disc outside;
    margin: 0 0 0 25px;
    padding: 5px 0;

    li {
      line-height: 1.25;
      padding: 5px 0;
    }

    ul {
      list-style: circle outside;
      padding: 5px 0 0;

      li {
        padding: 5px 0 0;
      }
    }
  }

  p {
    margin: 0 0 10px;

    &.date {
      font-weight: 700;
    }
  }
}
.resumeSlide-enter-active {
  transition: max-height 1s ease-in;
}

.resumeSlide-leave-active {
  transition: max-height 1s ease-out;
}

.resumeSlide-enter-to,
.resumeSlide-leave {
  max-height: 1000px;
  overflow: hidden;
}

.resumeSlide-enter,
.resumeSlide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
