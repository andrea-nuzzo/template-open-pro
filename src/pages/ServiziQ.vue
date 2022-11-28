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

      <!-- Page sections -->
      <HeroAboutQ :title="'SERVIZI PER TE'" />
      <!-- Hero content -->
      <div class="relative pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Content -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h1 mb-4" data-aos="fade-up">
            Tutti i servizi a portata di clic.
          </h1>
          <p
            class="text-xl text-gray-400 py-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Il Centro Servizi di Quisviluppo.com mette a tua disposizione tutti
            i professionisti necessari al fare, gestire e risollevare
            un’attività commerciale o artigianale. Qui puoi trovare tutto ciò
            che ti serve. Tutto in un clic.
          </p>
          <p
            class="text-xl text-gray-400 py-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Commercialisti, avvocati, esperti di finanza agevolata, notai,
            tributaristi ed esperti di comunicazione e marketing sono al tuo
            servizio. Tesserandoti puoi chattare gratuitamente con ognuno di
            loro.
          </p>
          <!-- Accordion -->
          <h1 class="py-7">Accordion goes here.</h1>
          <!-- Tesserandoti avrai a dispozione... -->
          <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 class="h2 mb-4">
              Tesserandoti avrai a disposizione questi strumenti:
            </h2>
          </div>

          <!-- Items -->
          <div
            class="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none py-7 mb-7 md:mb-10"
            data-aos-id-blocks
          >
            <!-- 1st item -->
            <div
              class="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
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
                  class="stroke-current text-purple-100"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  stroke-linecap="square"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                />
                <path
                  class="stroke-current text-purple-300"
                  d="M43 42h-9M43 37h-9"
                  stroke-linecap="square"
                  stroke-width="2"
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
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                class="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  class="fill-current text-purple-600"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  class="stroke-current text-purple-100"
                  stroke-width="2"
                  stroke-linecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fill-rule="evenodd"
                />
                <path
                  class="stroke-current text-purple-300"
                  d="M26 28h12M26 32h12M26 36h5"
                  stroke-width="2"
                  stroke-linecap="square"
                />
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
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
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
                <g
                  transform="translate(21 21)"
                  stroke-linecap="square"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <ellipse
                    class="stroke-current text-purple-300"
                    cx="11"
                    cy="11"
                    rx="5.5"
                    ry="11"
                  />
                  <path
                    class="stroke-current text-purple-100"
                    d="M11 0v22M0 11h22"
                  />
                  <circle
                    class="stroke-current text-purple-100"
                    cx="11"
                    cy="11"
                    r="11"
                  />
                </g>
              </svg>
              <h4 class="h4 mb-2">Pratiche immediate</h4>
              <p class="text-lg text-gray-400 text-center">
                Puoi richiedere documenti e attivare servizi con un clic.
              </p>
            </div>
          </div>
          <h2 class="h2 mb-4 pt-3" data-aos="fade-up">Chi può tesserarsi?</h2>
          <p
            class="text-xl text-gray-400 py-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Professionisti, micro imprese, aziende e privati con intenzione di
            aprire un'attività.
          </p>
          <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <router-link
                to="/"
                class="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                href="#0"
                >SCOPRI I VANTAGGI</router-link
              >
            </div>
          </div>
                <!-- Kit del tesserato -->
      <FeaturesZigzagQ class="pt-10" />
        </div>
      </div>
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import HeroAboutQ from "../partials/becomeSalespersonQ/HeroAboutQ.vue";
import FeaturesZigzagQ from "../partials/FeaturesZigzagQ.vue";
import Footer from "./../partials/Footer.vue";

export default {
  components: {
    Header,
    PageIllustration,
    HeroAboutQ,
    FeaturesZigzagQ,
    Footer,
  },
};
</script>
