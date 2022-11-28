<template>

  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Page illustration -->
      <div
          class="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
      >
        <PageIllustration />
      </div>
      <HeroAboutQ :title="destination.name" />

      <!--Component CaseStudies-->
      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class=" md:py-20">

            <!-- Section header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 class="h2">Servizi Correlati</h2>
            </div>

            <!-- Articles -->
            <div class="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">

              <!-- article -->
              <article class="flex flex-col h-full " data-aos="fade-up" v-for="service in destination.correlati" :key="service.slug">
                <div class="grow flex flex-col h-full p-6 bg-gray-800">
                  <h3 class="h4 mb-2">
                    <div class="hover:text-purple-600 text-gray-900 transition duration-150 ease-in-out capitalize">{{service.name}}</div>
                  </h3>
                  <p class="text-lg text-gray-400 grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua.</p>
                  <div>
                    <router-link class="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6 rounded-full" :to="`${service.slug}`">
                      <router-link :to="`/${service.slug}`" class="text-sm">Scopri</router-link>
                      <svg class="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </router-link>
                  </div>
                </div>
              </article>
            </div>

          </div>
        </div>
      </section>

      <!--Component ProcessQ-->
      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-10 pb-12 md:pt-16 md:pb-20">
            <!-- Section header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 class="h2 mb-4" data-aos="fade-up">
                Tesserandoti avrai a disposizione questi strumenti:
              </h2>
            </div>

            <!-- Items -->
            <div
                class="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none"
            >
              <!-- 1st item -->
              <div class="relative flex flex-col items-center" data-aos="fade-up">
                <div
                    aria-hidden="true"
                    class="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                    style="
                  width: calc(100% - 32px);
                  left: calc(50% + 48px);
                  top: 32px;
                "
                    data-aos="fade-in"
                    data-aos-delay="200"
                ></div>
                <svg
                    class="w-16 h-16 mb-4"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                      class="fill-current text-purple-600"
                      width="64"
                      height="64"
                      rx="32"
                  />
                  <path
                      class="stroke-current text-purple-300"
                      stroke-width="2"
                      stroke-linecap="square"
                      d="M21 23h22v18H21z"
                      fill="none"
                      fill-rule="evenodd"
                  />
                  <path
                      class="stroke-current text-purple-100"
                      d="M26 28h12M26 32h12M26 36h5"
                      stroke-width="2"
                      stroke-linecap="square"
                  />
                </svg>
                <h4 class="h4 mb-2">Ticket illimitati gratuiti</h4>
                <p class="text-lg text-gray-400 text-center">
                  Ricevi risposta entro 24 ore
                </p>
              </div>

              <!-- 2nd item -->
              <div
                  class="relative flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
              >
                <div
                    aria-hidden="true"
                    class="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                    style="
                  width: calc(100% - 32px);
                  left: calc(50% + 48px);
                  top: 32px;
                "
                    data-aos="fade-in"
                    data-aos-delay="400"
                ></div>
                <svg
                    class="w-16 h-16 mb-4"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                      class="fill-current text-purple-600"
                      width="64"
                      height="64"
                      rx="32"
                  />
                  <g fill="none" fill-rule="evenodd">
                    <path
                        class="stroke-current text-purple-300"
                        d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2"
                        stroke-width="2"
                        stroke-linecap="square"
                    />
                    <path
                        class="stroke-current text-purple-100"
                        stroke-width="2"
                        stroke-linecap="square"
                        d="M36 32l-4-3-4 3V22h8z"
                    />
                  </g>
                </svg>
                <h4 class="h4 mb-2">Video consulenze</h4>
                <p class="text-lg text-gray-400 text-center">
                  Accesso tramite prenotazione dalla tua area riservata.
                </p>
              </div>

              <!-- 3rd item -->
              <div
                  class="relative flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
              >
                <svg
                    class="w-16 h-16 mb-4"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                      class="fill-current text-purple-600"
                      width="64"
                      height="64"
                      rx="32"
                  />
                  <path
                      class="stroke-current text-purple-300"
                      stroke-width="2"
                      stroke-linecap="square"
                      d="M21 35l4 4 12-15"
                      fill="none"
                      fill-rule="evenodd"
                  />
                  <path
                      class="stroke-current text-purple-100"
                      d="M42 29h-3M42 34h-7M42 39H31"
                      stroke-width="2"
                      stroke-linecap="square"
                  />
                </svg>
                <h4 class="h4 mb-2">Pratiche immediate</h4>
                <p class="text-lg text-gray-400 text-center">
                  Puoi richiedere documenti e attivare servizi con un clic.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Chi può tesserarsi -->
        <div class="text-center mt-10 mb-10" data-aos-id-target>
          <div
              class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
          >
            <div class="mx-auto">
              <div
                  class="mt-6"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-anchor="[data-aos-id-target]"
              >
                <h4 class="h4 mb-2">Chi può tesserarsi?</h4>
                <p class="text-lg text-gray-400 m-6">
                  Professionisti, micro imprese, aziende e privati con intenzione
                  di aprire un'attività.
                </p>
              </div>
            </div>
          </div>
          <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <router-link
                  class="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 rounded-full"
                  to="/subscription"
              >TESSERATI ORA</router-link
              >
            </div>
          </div>
        </div>
      </section>
      <!-- Kit del tesserato -->
      <FeaturesZigzagQ />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>



</template>

<script>
import sourceData from '../data/servizi.json';
import FeaturesZigzagQ from "../partials/FeaturesZigzagQ.vue";
import FaqsShortQ from "../partials/FaqsShortQ.vue";
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import Footer from "./../partials/Footer.vue";
import HeroAboutQ from "../partials/becomeSalespersonQ/HeroAboutQ.vue";

export default {
  name: "ServizioQ.vue",

  components: {
    Footer,
    FeaturesZigzagQ,
    FaqsShortQ,
    Header,
    PageIllustration,
    HeroAboutQ
  },

  computed: {
    destinationSlug() {
      return this.$route.params.slug;
    },
    destination() {
      return sourceData.servizi.find(servizi => servizi.slug === this.destinationSlug);
    },
  },

  data(){
    return{

    }
  },
}
</script>

<style scoped>

</style>