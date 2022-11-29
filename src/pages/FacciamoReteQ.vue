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
      <HeroAboutQ :title="'FACCIAMO RETE'" />
      <div class="relative pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Content -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h1 mb-4" data-aos="fade-up">
            L’economia locale sta morendo. Qui c’è la soluzione.
          </h1>
          <p
            class="text-xl text-gray-400 py-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I big mondiali dell’e-commerce continuano a costruire nuovi depositi
            in giro per l’Italia. Sai perchè lo fanno? Per arrivare a consegnare
            in tempo reale i prodotti e avere sempre più il monopolio delle
            vendite al dettaglio. I clienti degli e-commerce, in questo modo,
            sono sempre più soddisfatti senza rendersi conto però, che così
            facendo, si sta annientando l’economia locale.
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
import Footer from "./../partials/Footer.vue";

export default {
  name: "FacciamoReteQ",
  components: {
    Header,
    PageIllustration,
    HeroAboutQ,
    Footer,
  },
};
</script>
