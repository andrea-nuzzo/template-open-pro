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
          <h1 class="h1 mb-4 text-left" data-aos="fade-up">Facciamo le presentazioni.</h1>
          <p
            class="text-xl text-gray-400 py-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Siamo VeMa web srl, una startup innovativa che lavora in remote
            working ad un grande progetto. Lo facciamo con professionalità e
            metodo, come se lavorassimo insieme da sempre.
          </p>
          <h1 class="h1 mb-4 text-right" data-aos="fade-up">Mission.</h1>
          <p
            class="text-xl text-gray-400 py-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Stiamo realizzando la prima Rete di sviluppo economico nazionale.
            Questo significa prendersi la responsabilità di ridare davvero nuova
            forza al tessuto economico su cui si fonda il nostro Paese, le
            economie locali e le PMI.
          </p>
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
