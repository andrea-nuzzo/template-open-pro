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
      <div class="w-full flex items-center justify-center pt-6 md:pt-8 lg:pt-12 pl-20 pr-20">
        <div
          class="relative flex items-center"
          data-aos="fade-up"
          data-aos-anchor="[data-aos-id-blocks]"
        >
          <svg
            class="w-16 h-16 mb-4 pr-4"
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
          <h4 class="h4 mb-2 text-center">La tua area riservata sarà attivata e operativa dal 1 gennaio 2023.</h4>

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
