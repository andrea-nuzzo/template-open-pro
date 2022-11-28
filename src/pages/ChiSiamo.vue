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
      <HeroAboutQ :title="'CHI SIAMO'" />
      <!-- Hero content -->
      <div class="relative pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Content -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h1 mb-4 text-left" data-aos="fade-up">
            Facciamo le presentazioni.
          </h1>
          <p
            class="text-xl text-left text-gray-400 py-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Siamo VeMa web srl, una startup innovativa che lavora in remote
            working ad un grande progetto. Lo facciamo con professionalità e
            metodo, come se lavorassimo insieme da sempre.
          </p>
          <h1 class="h1 mb-4 text-right" data-aos="fade-up">Mission.</h1>
          <p
            class="text-xl text-right text-gray-400 py-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Stiamo realizzando la prima Rete di sviluppo economico nazionale.
            Questo significa prendersi la responsabilità di ridare davvero nuova
            forza al tessuto economico su cui si fonda il nostro Paese, le
            economie locali e le PMI.
          </p>
          <!-- Il Nostro metodo di lavoro -->
          <div class="max-w-3xl mx-auto text-center pt-32 pb-12 md:pb-20">
            <h2 class="h2 mb-4">Il Nostro metodo di lavoro.</h2>
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
              <h4 class="h4 mb-2">Servizio a ciclo completo</h4>
              <p class="text-lg text-gray-400 text-center">
                Abbiamo a disposizione tutti i servizi per gestire e far
                crescere le attività commerciali. Soprattutto le accompagneremo
                nell’ottenere vendite all’interno dei nostri e-commerce.
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
              <h4 class="h4 mb-2">Innovazione e sviluppo</h4>
              <p class="text-lg text-gray-400 text-center">
                Grazie all’algoritmo sviluppato per creare le 7 piattaforme,
                tutte le attività commerciali della nostra Rete potranno
                competere nella vendita con i colossi del web.
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
              <h4 class="h4 mb-2">Rapporto umano</h4>
              <p class="text-lg text-gray-400 text-center">
                É il nostro ingrediente magico. La nostra Rete, inoltre, dà
                risalto alle competenze di negozianti e imprenditori. Le
                relazioni umane sono alla base di ogni situazione di successo.
              </p>
            </div>
          </div>
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
    Footer,
  },
};
</script>
