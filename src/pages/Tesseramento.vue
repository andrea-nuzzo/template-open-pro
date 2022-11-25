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
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import HeroAboutQ from "../partials/becomeSalespersonQ/HeroAboutQ.vue";
import FeaturesBlocksQ from "../partials/FeaturesBlocksQ.vue";
import FaqsQ from "./../partials/FaqsQ.vue";
import FaqsShortQ from "./../partials/FaqsShortQ.vue";
import FeaturesZigzagQ from "../partials/FeaturesZigzagQ.vue";
import Footer from "./../partials/Footer.vue";

export default {
  name: "becomeSalesperson",
  components: {
    Header,
    PageIllustration,
    HeroAboutQ,
    FeaturesBlocksQ,
    FeaturesZigzagQ,
    FaqsQ,
    FaqsShortQ,
    Footer,
  },
};
</script>
