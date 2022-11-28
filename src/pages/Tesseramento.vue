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
      <HeroAboutQ :title="'TESSERAMENTO'" />
      <FaqsQ />
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
      </div>
      <FeaturesBlocksQ ctaText1="TESSERATI ORA" ctaText2="TESSERATI ORA" />
      <!-- Kit del tesserato -->
      <FeaturesZigzagQ />
      <FaqsShortQ />

      <HeroFeaturesQ />
      <!-- Se rientri fra queste categorie -->
      <div class="relative pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h3 class="h3 mb-4" data-aos="fade-up">
            Se rientri tra queste categorie:
          </h3>
          <p
            class="text-gray-400 my-5 py-5 text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Avvocato | Commercialista | Notaio | Tributarista | Consulente del
            lavoro | Esperto di finanza agevolata | Freelance nel marketing e
            nella comunicazione | Webmaster | Social media manager
          </p>
          <h4 class="h4 mb-7 py-7" data-aos="fade-up">
            puoi proporti come Partner Tecnico.
          </h4>
          <!-- Image -->
          <img
            class="mx-auto"
            src="https://picsum.photos/id/237/700/450"
            width="768"
            height="432"
            alt="Hero"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <p
            class="text-gray-400 my-5 py-5 text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Nella pagina Diventa Partner Tecnico trovi tutti i vantaggi dedicati
            ai professionisti.
          </p>
          <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <router-link
                to="/tesserati"
                class="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                href="#0"
                >TESSERATI ORA</router-link
              >
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
import HeroFeaturesQ from "../partials/HeroFeaturesQ.vue";
import FeaturesBlocksQ from "../partials/FeaturesBlocksQ.vue";
import FaqsQ from "../partials/FaqsQ.vue";
import FaqsShortQ from "./../partials/FaqsShortQ.vue";
import FeaturesZigzagQ from "../partials/FeaturesZigzagQ.vue";
import Footer from "./../partials/Footer.vue";

export default {
  name: "becomeSalesperson",
  components: {
    Header,
    PageIllustration,
    HeroAboutQ,
    HeroFeaturesQ,
    FeaturesBlocksQ,
    FeaturesZigzagQ,
    FaqsQ,
    FaqsShortQ,
    Footer,
  },
};
</script>
